CREATE DATABASE delilah;

USE delilah;

CREATE TABLE usuarios(
	user VARCHAR(20) NOT NULL,
    fullname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone BIGINT NOT NULL,
    address VARCHAR(50) NOT NULL,
    password VARCHAR(20) NOT NULL,
    rol VARCHAR(5) NOT NULL,
    PRIMARY KEY(user)
);

CREATE TABLE menus (
    id_menu INT NOT NULL AUTO_INCREMENT,
    menu_name VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    availability VARCHAR(3) NOT NULL,
    PRIMARY KEY(id_menu)
);

CREATE TABLE estado_pedido (
	id_estado INT NOT NULL AUTO_INCREMENT,
    description VARCHAR(50) NOT NULL,
    PRIMARY KEY(id_estado)
);

CREATE TABLE metodo_pago (
	id_payment INT NOT NULL AUTO_INCREMENT,
    description VARCHAR(50) NOT NULL,
    PRIMARY KEY(id_payment)
);

CREATE TABLE pedidos (
    id_pedido INT NOT NULL AUTO_INCREMENT,
	user VARCHAR(20) NOT NULL,
    address_to_deliver VARCHAR(50) NOT NULL,
    id_estado INT NOT NULL,
    id_payment INT NOT NULL,
    time_event DATETIME NOT NULL,
    PRIMARY KEY (id_pedido),
    FOREIGN KEY (user) REFERENCES usuarios(user),
    FOREIGN KEY (id_estado) REFERENCES estado_pedido(id_estado),
    FOREIGN KEY (id_payment) REFERENCES metodo_pago(id_payment)
);


CREATE TABLE pedidos_menus (
    id_pedido INT NOT NULL,
	id_menu INT NOT NULL,
    quantity TINYINT NOT NULL,
    PRIMARY KEY(id_pedido, id_menu),
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_menu) REFERENCES menus(id_menu)
);

