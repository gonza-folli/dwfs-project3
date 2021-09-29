const {db_removeOrderChild} = require('../../models/db_orders');
const {db_removeOrder} = require('../../models/db_orders');
const Response = require('../../utilities/response');

const removeOrder = async function (req, res) {
    try {
        let message;
        let status= 200;
        let {id_pedido} = req.body
        await db_removeOrderChild([id_pedido])
        await db_removeOrder([id_pedido])
        message = new Response(false,status,`Orden ID = ${id_pedido} eliminada correctamente`)
        res.status(status).send(message)
    }
    catch (e) {
        let message;
        let status = 500;
        let {id_pedido} = req.body
        message = new Response(true,status,`Error al eliminar la órden de ID = ${id_pedido}`)
        res.status(status).send(message)
    }
}

module.exports = {removeOrder};