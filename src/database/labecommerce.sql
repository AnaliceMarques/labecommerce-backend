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


--Get All Users
SELECT * FROM users;

--Get All Products
SELECT * FROM products;

--Search Product By Name
SELECT * FROM products
WHERE name LIKE "%prod%";

--Create User
INSERT INTO users
    VALUES
    ("u005", "usuario5@email.com", "654321");

--Create Product
INSERT INTO products
    VALUES
    ("p007", "produto 7", 59.99, "categoria 2");

--Get Products By Id
SELECT * FROM products
WHERE id = "p001";

--Delete User By Id
DELETE FROM users
WHERE id = "u001";

--Delete Product By Id
DELETE FROM products
WHERE id = "p003";

--Edit User By Id
UPDATE users
SET
    email = "usuario4@gmail.com",
    password = "123456"
WHERE id = "u004";

--Edit Product By Id
UPDATE products
SET
    price = 9.99
WHERE id="p004";

--Get All Users (ordenado pela coluna email em ordem crescente)
SELECT * FROM users
ORDER BY email ASC;

--Get All Products (ordenado pela coluna price em ordem crescente e 20 primeiros resultados)
SELECT * FROM products
ORDER BY price ASC
LIMIT 20;

--Get All Products (intervalo de preços ordenado de forma crescente)
SELECT * FROM products
WHERE price >= 9 AND price <= 49
ORDER BY price ASC;