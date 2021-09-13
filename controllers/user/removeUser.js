const {db_loginUser} = require('../../models/db_user')
const {db_removeUser} = require('../../models/db_user');
const Response = require('../../utilities/response');

const removeUser = async function (req, res) {
    try {
        let message;
        let status = 200;
        let {user, password} = req.body
        let dbRes = await db_loginUser([user,password])
        if (dbRes.length >0) {
            let dbRes2 = await db_removeUser([user,password])
            message = new Response(false,200,`Usuario ${user} Eliminado correctamente`)
            res.status(status).send(message)
        } else {
            throw new Error
        }
    } catch (e) {
        let message;
        let status = 400
        let {user, password} = req.body
        message = new Response(true,400, `Error al eliminar al Usuario: ${user}`)
        res.status(status).send(message)
    }

}

module.exports = { removeUser };