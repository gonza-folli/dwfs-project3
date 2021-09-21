const {db_insertUser} = require('../../models/db_user');
const Response = require('../../utilities/response');

// Función que crea un usuario nuevo y lo inserta en la base de datos tabla "usuarios"
const createUser = async function (req, res) {
    try {
        let message;
        let status = 200;
        console.log(req.body);
        let {user, fullname, email, phone, address, password} = req.body
        let dbRes = await db_insertUser ([user, fullname, email, phone, address, password])
        message = new Response(false,200,'Usuario Registrado Correctamente',req.body)
        res.status(status).send(message)
    } catch(e){
        let message;
        let status = 500;
        message = new Response(true,500,'Usuario NO Registrado')
        res.status(status).send(message)
    }

}

module.exports = { createUser }