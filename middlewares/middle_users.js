const Response = require('../utilities/response');
const {db_selectFromUser} = require('../models/db_user');
const jwt_decode = require('jwt-decode');

// Comprobar que se encuentren TODOS los campos completados para registrarse
function validateFields (req, res, next) {
    if (!req.body.user || !req.body.fullname || !req.body.email || !req.body.phone || !req.body.address || !req.body.password)  {
        let rta = new Response (true, 403, 'No se han Ingresado todos los datos obligatorios', '')
        res.status(403).send(rta)
    } else {
        next()
    }
}

// Comprobar si el ID a registrar ya existe
async function validateId (req, res, next) {
    try {
        let {user} = req.body
        console.log(user)
        let dbRes = await db_selectFromUser([user])
        console.log(dbRes.length)
        if (dbRes.length > 0) {
            throw new Error
        } else {
            console.log('error NO detectado')
            next()
        }
    }
    catch(e){
        let message = new Response (true, 402, 'Usuario ya registrado')
        res.status(402).send(message)
    }
}

// Comprobar si el usuario esta cambiando sus PROPIOS datos y no de otro usuario
async function validateSelfPermission (req, res, next) {
    try {
        let token = req.headers.authorization
        token = token.split(' ')[1]
        let decoded = jwt_decode(token);
        let user = req.body.user
        if (decoded.usuario == user) {
            console.log('funcionó')
            next()
        } else {
            console.log('fallo')
            throw new Error
        }
    } catch {
        let message = new Response (true, 402, 'No posee los privilegios para realizar la acción solicitada')
        res.status(402).send(message)
    }
}

// function validateNewFields (req, res, next) {
//     if ((req.body.user) && (req.body.fullname || req.body.email || req.body.phone || req.body.address || req.body.password)) {
//         console.log('funcionó')
//         next()
//     } else {
//         let rta = new Response (true, 403, 'No se han Ingresado todos los datos obligatorios para modificar', '')
//         res.status(403).send(rta)
//     }
// }


module.exports= { validateFields, validateId, validateSelfPermission } 