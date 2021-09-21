const {db_updateRol} = require('../../models/db_admin');
const Response = require('../../utilities/response');

const updateRol = async function (req, res) {
    try {
        let message
        let status = 200
        let {rol, user} = req.body
        let dbRes = await db_updateRol([rol, user])
        message = new Response(false,200,`El rol del ${user} se actualizo a ${rol}`)
        res.status(status).send(message)
    } catch {
        let message;
        let status = 500;
        message = new Response(true,500,`Error al actualizar el rol del usuario`)
        res.status(status).send(message)
    }
}
module.exports = { updateRol }