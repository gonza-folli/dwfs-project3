const sequelize = require('../utilities/dbConnection');

const db_addOrder = (data) =>
    sequelize.query('INSERT INTO pedidos (user, address_to_deliver, id_estado, id_payment, time_event) VALUES (?,?,1,?,NOW())', {
        replacements: data,
        type: sequelize.QueryTypes.INSERT,
    })

const db_detailOrder = (id) =>
    sequelize.query(`SELECT pedidos.id_pedido, usuarios.user, group_concat(pedidos_menus.quantity, 'x', menus.description) as DetallePedido, sum(pedidos_menus.quantity * menus.price) as TotalPrice, estado_pedido.description AS Estado, pedidos.address_to_deliver, metodo_pago.description AS MedioPago, usuarios.email, usuarios.phone FROM pedidos INNER JOIN usuarios ON pedidos.user = usuarios.user INNER JOIN pedidos_menus ON pedidos.id_pedido = pedidos_menus.id_pedido INNER JOIN menus ON pedidos_menus.id_menu = menus.id_menu INNER JOIN estado_pedido ON estado_pedido.id_estado = pedidos.id_estado INNER JOIN metodo_pago ON metodo_pago.id_payment = pedidos.id_payment WHERE pedidos.id_pedido = ?;`, {
        replacements: id,
        type: sequelize.QueryTypes.SELECT,
    })

const db_selectUserFromOrder = (id) =>
    sequelize.query('SELECT * from pedidos WHERE id_pedido = ?', {
        replacements: id,
        type: sequelize.QueryTypes.SELECT,
    })

// const db_selectLastOrder = () =>
//     sequelize.query('SELECT LAST_INSERT_ID()', {
//     // sequelize.query('INSERT INTO pedidos SET `user` = ?, `address_to_deliver` = ?, `id_estado` = ?, `id_payment` = ?, `time_event` = ?', Order, {raw: false}, [data.user, data.address_to_deliver, 1, data.id_payment, NOW()], {
//         replacements: data,
//         type: sequelize.QueryTypes.SELECT,
//     })

module.exports = {db_addOrder, db_detailOrder, db_selectUserFromOrder}