const { db_detailOrder } = require('../../models/db_orders');
const Response = require('../../utilities/response');

let detailOrder = async function (req, res) {
    try {
        let response
        let status = 200
        let {id_pedido} = req.body
        let dbRes = await db_detailOrder([id_pedido])
        console.log(dbRes)

        // // prueba
        // //funcion para hacer merge entre los objetos del array y depurar datos repetidos
        // const finalOrder = dbRes.reduce(function(r, e) {
        //     return Object.keys(e).forEach(function(k) {
        //       if(!r[k]) r[k] = [].concat(e[k])
        //       else r[k] = r[k].concat(e[k])
        //     }), r
        // }, {})
        // //sumar el precio total de la orden
        // let numbersToAdd = []
        // for (let i = 0; i < dbRes.length; i++) {
        //     let precio = dbRes[i].price
        //     let cantidad = dbRes[i].quantity
        //     let resultado = precio * cantidad
        //     numbersToAdd.push(resultado)
        // }
        // let totalPrice = numbersToAdd.reduce((a, b) => a + b, 0);
        // // variable que me arroja un solo objeto con toda la info relativa al pedido
        // let personalData = dbRes[0]
        // personalData.id_menu = finalOrder.id_menu
        // personalData.price = finalOrder.price
        // personalData.quantity = finalOrder.quantity
        // personalData.totalPrice = totalPrice
        // console.log(personalData)

        response = new Response(false, 200, `El detalle de la orden asociada al ID ${id_pedido} es el siguiente`, dbRes)
        res.status(status).send(response)

    } catch {
        let message;
        let status = 400;
        let {id_pedido} = req.body
        message = new Response(true,400,`Error al consultar la orden Número ${id_pedido}`)
        res.status(status).send(message)
    }
}

module.exports = { detailOrder }