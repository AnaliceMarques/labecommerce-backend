-- Active: 1680536467204@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    email TEXT UNIQUE NOT NULL, 
    password TEXT NOT NULL
);

SELECT * FROM users;


INSERT INTO users
    VALUES
    ("u001", "usuario1@email.com", "123456"),
    ("u002", "usuario2@email.com", "abcdef"),
    ("u003", "usuario3@email.com", "abc123");

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    categoty TEXT NOT NULL
);

SELECT * FROM products;

INSERT INTO products
    VALUES
    ("p001", "produto 1", 9.99, "categoria 1"),
    ("p002", "produto 2", 19.99, "categoria 2"),
    ("p003", "produto 3", 29.99, "categoria 3"),
    ("p004", "produto 4", 39.99, "categoria 1"),
    ("p005", "produto 5", 49.99, "categoria 2");





