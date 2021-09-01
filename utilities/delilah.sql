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
-- CREATE TABLE status(
-- 	id_status INT NOT NULL AUTO_INCREMENT,
--     description NVARCHAR(150) NOT NULL,
--     PRIMARY KEY(id_status)
-- );

-- CREATE TABLE eventos(
-- 	id_event INT NOT NULL AUTO_INCREMENT,
--     name NVARCHAR(150) NOT NULL,
--     event_date DATE, 
--     PRIMARY KEY(id_event)
-- );

-- CREATE TABLE usarios_evento(
-- 	id_user INT NOT NULL,
--     id_event INT NOT NULL,
--     datetime DATETIME NOT NULL,
--     id_status INT NOT NULL,
--     PRIMARY KEY(id_user, id_event),
--     FOREIGN KEY (id_status) REFERENCES status(id_status)
-- );

-- CREATE TABLE usuarios(
-- 	id_user INT NOT NULL AUTO_INCREMENT,
--     full_name NVARCHAR(150) NOT NULL,
--     cellphone INT NOT NULL,
--     email NVARCHAR(150) NOT NULL,
--     password NVARCHAR(150) NOT NULL,
--     id_rol INT NOT NULL,
--     PRIMARY KEY(id_user),
-- 	FOREIGN KEY (id_rol) REFERENCES roles(id_rol)
-- );
