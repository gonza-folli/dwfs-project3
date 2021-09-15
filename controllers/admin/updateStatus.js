const {db_updateStatus} = require('../../models/db_admin');
const Response = require('../../utilities/response');

const updateStatus = async function (req, res) {
    try {
        let message
        let status = 200
        let {id_estado, id_pedido} = req.body
        let dbRes = await db_updateStatus([id_estado, id_pedido])
        message = new Response(false,200,`El estado del pedido Número ${id_pedido} se actualizo correctamente`)
        res.status(status).send(message)
    } catch {
        let message;
        let status = 400;
        let {id_pedido} = req.body
        message = new Response(true,400,`Error al actualizar el estado del pedido Número ${id_pedido}`)
        res.status(status).send(message)
    }
}
module.exports = { updateStatus }