const sequelize = require('../utilities/dbConnection');

const db_getMenus = () =>
    sequelize.query('SELECT * FROM menus', {
        type: sequelize.QueryTypes.SELECT
    })

const db_addMenus = (menus) =>
    sequelize.query('INSERT INTO menus (menu_name, description, price, availability) VALUES (?,?,?,?)', {
        replacements: menus,
        type: sequelize.QueryTypes.INSERT
    })

const db_modifyMenus = (menus) =>
    sequelize.query('UPDATE menus SET menu_name = ?, description = ?, price = ?, availability = ? WHERE id_menu = ? ', {
        replacements: menus,
        type: sequelize.QueryTypes.UPDATE
    })

const db_removeMenus = (menus) =>
    sequelize.query('DELETE FROM menus WHERE id_menu = ? ' , {
        replacements: menus,
        type: sequelize.QueryTypes.DELETE
    })

module.exports = { db_getMenus, db_addMenus, db_modifyMenus, db_removeMenus }