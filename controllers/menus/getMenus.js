const {db_getMenus} = require('../../models/db_menus');
const Response = require('../../utilities/response');

const getMenus = async function (req,res) {
    try {
        let message;
        let status = 200;
        let dbRes = await db_getMenus()
        console.log(dbRes)
        message = new Response(false, status, 'Los menus disponibles son los siguientes:', dbRes)
        res.status(status).send(message)
    }
    catch (e){
        let message;
        let status = 500;
        message = new Response(true,status,'Error al obtener la lista de Menus')
        res.status(status).send(message)
    }
}

module.exports = {getMenus}