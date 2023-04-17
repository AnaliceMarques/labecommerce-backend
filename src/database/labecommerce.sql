-- Active: 1680536467204@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL, 
    name TEXT NOT NULL, 
    email TEXT UNIQUE NOT NULL, 
    password TEXT NOT NULL,
    created_at TEXT DEFAULT(DATETIME('now', '-3 hours'))
);

-- DROP TABLE users;

SELECT * FROM users;

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT NULL,
    image_url TEXT NULL
);

-- DROP TABLE products;

SELECT * FROM products;

CREATE TABLE purchases (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    buyer TEXT NOT NULL,
    total_price REAL NOT NULL,
    created_at TEXT DEFAULT(DATETIME('now', '-3 hours')), 
    paid INTEGER NOT NULL DEFAULT (0), 
    FOREIGN KEY (buyer) REFERENCES users(id)
);

-- DROP TABLE purchases;

SELECT * FROM purchases;


CREATE TABLE purchases_products (
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (purchase_id) REFERENCES purchases(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- DROP TABLE purchases_products;

SELECT * FROM purchases_products;

