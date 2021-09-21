const {db_modifyMenus} = require('../../models/db_menus');
const Response = require('../../utilities/response');

const modifyMenus = async function (req,res) {
    try {
        let message;
        let status = 200;
        let {menu_name, description, price, availability, id_menu} = req.body
        let dbRes = await db_modifyMenus([menu_name, description, price, availability, id_menu])
        message = new Response(false,status,`Menu de ID = ${id_menu} modificado correctamente`)
        res.status(status).send(message)
    }
    catch (e) {
        let message;
        let status = 500;
        let {id_menu} = req.body
        message = new Response(true,status,`Error al modificar el menú de ID = ${id_menu}`)
        res.status(status).send(message)
    }
}

module.exports = {modifyMenus};