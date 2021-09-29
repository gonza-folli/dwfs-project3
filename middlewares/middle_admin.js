const Response = require('../utilities/response')
const {db_selectFromUser} = require('../models/db_user');
const {db_selectUserFromOrder} = require('../models/db_orders');


function validateFields (req, res, next) {
    if (!req.body.user || !req.body.rol)  {
        let rta = new Response (true, 403, 'No se han Ingresado todos los datos obligatorios')
        res.status(403).send(rta)
    } else {
        if (req.body.rol == "user" || req.body.rol == "admin") {
            next()
        } else {
            let rta = new Response (true, 404, 'Rol debe ser user o admin')
            res.status(404).send(rta)
        }
    }
}

// Comprobar si el ID ya existe
async function validateId (req, res, next) {
    try {
        let {user} = req.body
        let dbRes = await db_selectFromUser([user])
        if (dbRes.length > 0) {
            next()
        } else {
            throw new Error
        }
    }
    catch(e){
        let message = new Response (true, 407, 'No existe el usuario a modificar')
        res.status(407).send(message)
    }
}

// Comprobar si el ID PEDIDO ya existe
async function validateOrderId (req, res, next) {
    try {
        let {id_pedido} = req.body
        let dbRes = await db_selectUserFromOrder([id_pedido])
        if (dbRes.length > 0) {
            next()
        } else {
            throw new Error
        }
    }
    catch(e){
        let message = new Response (true, 407, 'No existe la órden a eliminar')
        res.status(407).send(message)
    }
}


module.exports= { validateFields, validateId, validateOrderId} 