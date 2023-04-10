-- Active: 1680536467204@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    email TEXT UNIQUE NOT NULL, 
    password TEXT NOT NULL
);

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


CREATE TABLE purchases (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    total_price REAL NOT NULL,
    paid INTEGER NOT NULL DEFAULT 0, --lógica booleana onde 0 é false e 1 é true para pagamento
    delivered_at TEXT DEFAULT NULL, --data de entrega do pedido (DATETIME)
    buyer_id TEXT NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES users(id)
);

DROP TABLE purchases;

SELECT * FROM purchases;

INSERT INTO purchases (id, total_price, buyer_id)
    VALUES
        ("pu001", 9.99, "u002"),
        ("pu002", 19.99, "u002"),
        ("pu003", 9.99, "u003"),
        ("pu004", 49.99, "u003"),
        ("pu005", 19.99, "u004"),
        ("pu006", 49.99, "u004"),
        ("pu007", 9.99, "u005"),
        ("pu008", 59.99, "u005");

UPDATE purchases
SET delivered_at = DATETIME("now", "localtime")
WHERE id="pu001";


SELECT * FROM purchases
INNER JOIN users
ON buyer_id = users.id
WHERE users.id = "u002";

-- (CASE WHEN purchases.paid = 0 THEN 'not paid' ELSE 'paid' END) as paid

CREATE TABLE purchases_products (
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL
);

INSERT INTO purchases_products
VALUES
    ("pu001", "p001", 2),
    ("pu004", "p005", 1),
    ("pu007", "p001", 5);

SELECT * FROM purchases_products;

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






