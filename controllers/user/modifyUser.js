const {db_modifyUser} = require('../../models/db_user');
const Response = require('../../utilities/response');

const modifyUser = async function (req, res) {
    try {
        let message;
        let status = 200;
        let {fullname, email, phone, address, password, user} = req.body
        let dbRes = await db_modifyUser([fullname, email, phone, address, password, user])
        message = new Response(false,200,'Datos Modificados Correctamente', req.body)
        res.status(status).send(message)

    } catch (e) {
        let message;
        let status = 500
        message = new Response(true,500,'Error al modificar datos del usuario')
        res.status(status).send(message)
    }

}



module.exports = {modifyUser};