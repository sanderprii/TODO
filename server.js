require('dotenv').config();
const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const pool = require('./db');

const app = express();

// Handlebars setup
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', async (req, res) => {
    let tasks = [];
    try {
        const conn = await pool.getConnection();
        tasks = await conn.query('SELECT * FROM tasks ORDER BY created_at DESC');
        conn.release();
    } catch (err) {
        console.error(err);
    }
    res.render('index', { tasks });
});

app.post('/tasks', async (req, res) => {
    const description = req.body.description && req.body.description.trim();

    if (!description) {
        return res.redirect('/');
    }

    try {
        const conn = await pool.getConnection();
        await conn.query('INSERT INTO tasks (description) VALUES (?)', [description]);
        conn.release();
    } catch (err) {
        console.error(err);
    }

    res.redirect('/');
});

// Server kuulab
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server works: http://localhost:${PORT}`);
});
