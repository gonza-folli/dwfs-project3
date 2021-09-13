const Response = require('../utilities/response')
const { db_selectUserFromOrder } = require('../models/db_orders')

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
        let message = new Response (true, 402, 'No posee los privilegios para consultar la orden solicitada')
        res.status(402).send(message)
    }
}

module.exports = { validatePermission }