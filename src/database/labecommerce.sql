-- Active: 1680536467204@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    name TEXT NOT NULL, 
    email TEXT UNIQUE NOT NULL, 
    password TEXT NOT NULL,
    created_at TEXT DEFAULT(DATETIME('now', '-3 hours'))
);

DROP TABLE users;

SELECT * FROM users;

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT,
    image_url TEXT
);

DROP TABLE products;

SELECT * FROM products;

CREATE TABLE purchases (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    buyer TEXT NOT NULL,
    total_price REAL NOT NULL,
    created_at TEXT DEFAULT(DATETIME('now', '-3 hours')), 
    paid INTEGER NOT NULL DEFAULT (0), 
    FOREIGN KEY (buyer) REFERENCES users(id)
);

DROP TABLE purchases;

SELECT * FROM purchases;


CREATE TABLE purchases_products (
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL
);

DROP TABLE purchases_products;

SELECT * FROM purchases_products;


INSERT INTO users (id, name, email, password)
    VALUES
    ("u001", "usuario 1", "usuario1@email.com", "123456"),
    ("u002", "usuario 2", "usuario2@email.com", "abcdef"),
    ("u003", "usuario 3", "usuario3@email.com", "abc123");


INSERT INTO products
    VALUES
    ("p001", "produto 1", 9.99, "descrição 1", "imagem 1"),
    ("p002", "produto 2", 19.99, "descrição 2", "imagem 2"),
    ("p003", "produto 3", 29.99, "descrição 3", "imagem 3"),
    ("p004", "produto 4", 39.99, "descrição 4", "imagem 4"),
    ("p005", "produto 5", 49.99, "descrição 5", "imagem 5");


INSERT INTO purchases (id, buyer, total_price)
    VALUES
        ("pu001", "u002", 9.99),
        ("pu002", "u002", 19.99),
        ("pu003", "u003", 9.99),
        ("pu004", "u003", 49.99),
        ("pu005", "u004", 19.99),
        ("pu006", "u004", 49.99),
        ("pu007", "u005", 9.99),
        ("pu008", "u005", 59.99);

INSERT INTO purchases_products
VALUES
    ("pu001", "p001", 2),
    ("pu004", "p005", 1),
    ("pu007", "p001", 5);


--Get All Users
SELECT * FROM users;

--Get All Products
SELECT * FROM products;

--Search Product By Name
SELECT * FROM products
WHERE name LIKE "%prod%";

--Create User
INSERT INTO users (id, name, email, password)
    VALUES
    ("u004", "usuario 4", "usuario4@email.com", "123456");

--Create Product
INSERT INTO products
    VALUES
     ("p006", "produto 6", 59.99, "descrição 6", "imagem 6");

--Create Purchase
INSERT INTO purchases (id, buyer, total_price)
    VALUES
        ("pu001", "u002", 9.99);

--Get Products By Id
SELECT * FROM products
WHERE id = "p001";

--Get User Purchases By User Id
SELECT * FROM purchases
INNER JOIN users
ON buyer_id = users.id
WHERE users.id = "u002";

-- (CASE WHEN purchases.paid = 0 THEN 'not paid' ELSE 'paid' END) as paid

---------------------------------------------------------------------------------------
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



UPDATE purchases
SET delivered_at = DATETIME("now", "localtime")
WHERE id="pu001";





SELECT * FROM products
LEFT JOIN purchases_products
ON products.id = purchases_products.product_id
LEFT JOIN purchases
ON purchases.id = purchases_products.purchase_id;

--Compras realizadas por um usuário
SELECT 
    users.id AS userId,
    users.email,
    purchases.id AS purchasesId,
    purchases.paid,
    purchases.delivered_at,
    purchases_products.product_id AS productId,
    products.name AS productName,
    products.price,
    purchases_products.quantity,
    purchases.total_price AS totalPrice
FROM users
LEFT JOIN purchases
ON users.id = purchases.buyer_id
LEFT JOIN purchases_products
ON purchases_products.purchase_id = purchases.id
LEFT JOIN products
ON products.id = purchases_products.product_id
WHERE users.id = "u002";

-- ----------------------------------------------------

SELECT * FROM products
RIGHT JOIN purchases_products
ON products.id = purchases_products.product_id;






