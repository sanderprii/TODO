# TODO Application 🚀

A simple **To-Do List Application** built with **Node.js**, **Express**, **Handlebars**, and **MariaDB**. This app allows users to create and manage tasks effectively.

---

## 🛠️ Technologies Used

The following technologies were used in this project:

- **Node.js**: Server-side runtime environment
- **Express.js**: Web framework for server routing
- **Handlebars**: Template engine for dynamic views
- **MariaDB**: Relational database for storing tasks
- **Vanilla JavaScript**: Client-side functionality
- **HTML/CSS**: Structure and styling



---


## 💻 Installation Guide

Follow these steps to set up and run the project locally:

### 1. **Clone the Repository**

Clone the repository to your local machine:

```
git clone https://github.com/yourusername/todo-app.git
```
```
cd todo-app
```

## 2. Install Dependencies

```
npm install
```

## 3. Set Up MariaDB Database

   Open your MariaDB server and run the SQL schema fail located at  db/init.sql. This will create database and tables.
 


## 4. Update the .env file with your database credentials:
```
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=todo_app
PORT=3000
```

## 5. Run the Server
   Start the server by running the following command:

```
node server.js
```
The app will be available at:

```
http://localhost:3000
```
## 🚀 Features
- 📝 Add Tasks: Users can add new tasks with descriptions.
- ✅ Input Validation: Empty tasks cannot be submitted.
- 🗒️ View Tasks: Added tasks are displayed in a list.
- 🖥️ Client-Side Interactivity: Validates inputs before submitting to the server.
- 📋 Client-Side Script

## 🔧 Usage
- Open the app at http://localhost:3000.
- Enter a task description and click Add Task.
- View your tasks in the list. Empty submissions are prevented.


## 🐞 Troubleshooting
If you encounter issues:

- Ensure the MariaDB server is running.
- Verify the credentials in the .env file.
- Restart the server and check logs for errors.

