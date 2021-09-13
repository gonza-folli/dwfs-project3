const { db_addOrder } = require('../../models/db_orders');
const { db_addPedidoMenu } = require('../../models/db_orderMenu');
const Response = require('../../utilities/response');

const addOrder = async function (req, res) {
    try {
        let response
        let status = 200
        let {user, address_to_deliver, id_payment, menus} = req.body
        let insertOrder = await db_addOrder([user, address_to_deliver, id_payment]);
        console.log('aaaaaaa')
        console.log(insertOrder[0]) //corresponde al ID de la orden ingresada
        let id_menu = []
        let quantity  = []
        for (let i = 0; i < menus.length; i++) {
            id_menu.push(menus[i].id_menu)
            quantity.push(menus[i].quantity)
            let insertPedidoMenu = await db_addPedidoMenu([insertOrder[0],id_menu[i],quantity[i]])
            setTimeout(() => {}, 500);
        }
        response = new Response(false,200,'Orden ingresada correctamente', req.body)
        res.status(status).send(response)
    } catch (e) {
        let message;
        let status = 400;
        message = new Response(true,400,'Error al crear la orden')
        res.status(status).send(message)
    }


} 

module.exports = { addOrder }