const sequelize = require('../utilities/dbConnection');

const db_addPedidoMenu = (data) =>
    sequelize.query('INSERT INTO pedidos_menus VALUES (?,?,?)', {
        replacements: data,
        type: sequelize.QueryTypes.INSERT,
    })

module.exports = { db_addPedidoMenu }