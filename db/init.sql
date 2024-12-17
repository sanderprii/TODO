CREATE DATABASE todo_app;
USE todo_app;

CREATE TABLE tasks (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       description VARCHAR(255) NOT NULL,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
