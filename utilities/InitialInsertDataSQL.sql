INSERT INTO usuarios (user,fullname,email,phone,address,password,rol) VALUES ("admin","Administrador","admin@admin.com","11111111","admin","admin","admin");

INSERT INTO menus (menu_name,description,price,availability) VALUES ("Lomito","Lomito Completo",600,"Yes");
INSERT INTO menus (menu_name,description,price,availability) VALUES ("Hamburguesa","Hamburguesa Doble Cheddar",450,"Yes");
INSERT INTO menus (menu_name,description,price,availability) VALUES ("Ensalada","Ensalada tipo Caesar",350,"Yes");
INSERT INTO menus (menu_name,description,price,availability) VALUES ("Empanada","Empanada Criolla",60,"Yes");
INSERT INTO menus (menu_name,description,price,availability) VALUES ("Empanada","Empanada Arabe",60,"Yes");

INSERT INTO estado_pedido (description) VALUES ("Confirmado");
INSERT INTO estado_pedido (description) VALUES ("En preparacion");
INSERT INTO estado_pedido (description) VALUES ("En camino");
INSERT INTO estado_pedido (description) VALUES ("Entregado");
INSERT INTO estado_pedido (description) VALUES ("Cancelado");


INSERT INTO metodo_pago (description) VALUES ("Efectivo");
INSERT INTO metodo_pago (description) VALUES ("Tarjeta");