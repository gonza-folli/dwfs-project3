const {db_allOrders} = require('../../models/db_admin')
const Response = require('../../utilities/response');

const allOrders = async function (req,res) {
    try {
        let message
        let status = 200
        let dbRes = await db_allOrders()
        console.log(dbRes)
        if (dbRes.length >= 1) {
            message = new Response(false,200,'El listado de ordenes es el siguiente', dbRes)
            res.status(status).send(message)
        } else {
            message = new Response(false,204,'No se encuentran órdenes para mostrar')
            res.status(204).send(message)
        }
    } catch {
        let message;
        let status = 500;
        message = new Response(true,500,'Error al consultar el listado de todas las órdenes')
        res.status(status).send(message)
    }
}

module.exports = {allOrders}