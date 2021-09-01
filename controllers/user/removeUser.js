const {db_removeUser} = require('../../models/db_user');
const Response = require('../../utilities/response');

const removeUser = async function (req, res) {
    try {
        let message;
        let status = 200;
        let {fullname, email, phone, address, password, user} = req.body
        console.log('llegue')
        let dbRes = await db_modifyUser([fullname, email, phone, address, password, user])
        console.log(dbRes)
        message = new Response(false,200,'Datos Modificados Correctamente', req.body)
        res.status(status).send(message)

    } catch (e) {
        let message;
        let status = 400
        message = new Response(true,400,'Error al modificar')
        res.status(status).send(message)
    }

}

module.exports = {modifyUser};