const Response = require('../utilities/response')
const { db_selectUserFromOrder } = require('../models/db_orders')

function validateFields (req, res, next) {
    if (!req.body.user || !req.body.address_to_deliver || !req.body.menus[0].id_menu || !req.body.menus[0].quantity || !req.body.id_payment)  {
        let rta = new Response (true, 403, 'No se han Ingresado todos los datos obligatorios')
        res.status(403).send(rta)
    } else {
        next()
    }
}

async function validatePermission (req,res,next) {
    try {
        let {user, id_pedido} = req.body;
        let dbRes =  await db_selectUserFromOrder([id_pedido])
        console.log(dbRes)
        if ( user == dbRes[0].user ) {
            next()
        } else {
            throw new Error
        }
    } catch {
        let message = new Response (true, 405, 'No posee los privilegios para realizar la acción solicitada')
        res.status(402).send(message)
    }
}

module.exports = { validatePermission,  validateFields}