const {db_loginUser} = require('../../models/db_user')
const validateToken = require('../validateToken')
const Response = require('../../utilities/response');

const loginUser = async function (req, res) {
    try {
        let message;
        let status = 200;
        let {user, password} = req.body
        let dbRes = await db_loginUser([user,password])
        if (dbRes.length >0) {
            console.log(dbRes)
            const token = await validateToken(dbRes[0].user,dbRes[0].rol)
            data = dbRes[0]
            data.apiKey = token
            message = new Response(false,200,'Usuario Logeado correctamente', data)
            res.status(status).send(message)
        } else {
            throw new Error
        }
    } catch (e) {
        let message;
        let status = 400
        message = new Response(true,400,'Datos ingresados inválidos')
        res.status(status).send(message)
    }
}

module.exports = { loginUser }