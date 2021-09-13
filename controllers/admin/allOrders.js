const {db_allOrders} = require('../../models/db_admin')
const Response = require('../../utilities/response');

const allOrders = async function (req,res) {
    try {
        let message
        let status = 200
        let dbRes = await db_allOrders()
        console.log(dbRes)
        message = new Response(true,200,'El listado de ordenes es el siguiente', dbRes)
        res.status(status).send(message)
    } catch {
        let message;
        let status = 400;
        message = new Response(true,400,'Error al consultar el listado de todas las órdenes')
        res.status(status).send(message)
    }
}

module.exports = {allOrders}