const {db_removeMenus} = require('../../models/db_menus');
const Response = require('../../utilities/response');

const removeMenus = async function (req, res) {
    try {
        let message;
        let status= 200;
        let {id_menu} = req.body
        let dbRes = await db_removeMenus([id_menu])
        message = new Response(false,status,`Menu de ID = ${id_menu} eliminado correctamente`)
        res.status(status).send(message)
    }
    catch (e) {
        let message;
        let status = 500;
        let {id_menu} = req.body
        message = new Response(true,status,`Error al eliminar el menú de ID = ${id_menu}`)
        res.status(status).send(message)
    }
}

module.exports = {removeMenus};