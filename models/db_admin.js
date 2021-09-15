const sequelize = require('../utilities/dbConnection');

const db_allOrders = () =>
    sequelize.query(`SELECT pedidos.id_pedido, estado_pedido.description AS Estado, pedidos.user, usuarios.fullname, group_concat(pedidos_menus.quantity, 'x', menus.description) as DetallePedido, sum(pedidos_menus.quantity * menus.price) as TotalPrice, pedidos.id_payment, pedidos.address_to_deliver FROM pedidos INNER JOIN usuarios ON pedidos.user = usuarios.user INNER JOIN pedidos_menus ON pedidos.id_pedido = pedidos_menus.id_pedido INNER JOIN menus ON pedidos_menus.id_menu = menus.id_menu INNER JOIN estado_pedido ON estado_pedido.id_estado = pedidos.id_estado GROUP BY id_pedido`, {
        type: sequelize.QueryTypes.SELECT,
    })

const db_updateStatus = (data) =>
    sequelize.query(`UPDATE pedidos SET id_estado = ? WHERE id_pedido = ?`, {
        type: sequelize.QueryTypes.UPDATE,
        replacements: data
    })

    module.exports = {db_allOrders, db_updateStatus}