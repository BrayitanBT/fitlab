-- Crear base de datos
CREATE DATABASE IF NOT EXISTS fitlab;

USE fitlab;

-- Tabla de usuarios
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    rol ENUM('cliente', 'admin') DEFAULT 'cliente'
);

-- Tabla de carrito (productos añadidos por usuario)
CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    mongo_product_id VARCHAR(50) NOT NULL, -- ID de producto en MongoDB
    talla VARCHAR(10),
    cantidad INT DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE
);

-- Tabla de órdenes
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    total DECIMAL(10, 2),
    estado ENUM(
        'pendiente',
        'pagado',
        'cancelado'
    ) DEFAULT 'pendiente',
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user (id)
);

-- Detalles de cada producto en una orden
CREATE TABLE item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    mongo_product_id VARCHAR(50) NOT NULL,
    talla VARCHAR(10),
    cantidad INT DEFAULT 1,
    precio_unitario DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES orders (id)
);

/* DROP DATABASE fitlab */