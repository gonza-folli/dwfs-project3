const { db_detailOrder } = require('../../models/db_orders');
const Response = require('../../utilities/response');

let detailOrder = async function (req, res) {
    try {
        let response
        let status = 200
        let {id_pedido} = req.body
        let dbRes = await db_detailOrder([id_pedido])
        console.log(dbRes)
        response = new Response(false, 200, `El detalle de la orden asociada al ID ${id_pedido} es el siguiente`, dbRes)
        res.status(status).send(response)

    } catch {
        let message;
        let status = 500;
        let {id_pedido} = req.body
        message = new Response(true,500,`Error al consultar la orden Número ${id_pedido}`)
        res.status(status).send(message)
    }
}

module.exports = { detailOrder }