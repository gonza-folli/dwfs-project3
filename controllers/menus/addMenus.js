const {db_addMenus} = require('../../models/db_menus');
const Response = require('../../utilities/response');


const addMenus = async function (req,res) {
    try {
        let message;
        let status = 200;
        let {menu_name, description, price, availability} = req.body
        let dbRes = await db_addMenus([menu_name, description, price, availability])
        console.log(req.body)
        message = new Response(false,status,'Menu Registrado Correctamente', req.body)
        res.status(status).send(message)
    }
    catch (e){
        let message;
        let status = 400;
        message = new Response(true,400,'Menu NO Registrado')
        res.status(status).send(message)
    }
}

module.exports = {addMenus}