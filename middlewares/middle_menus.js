const Response = require('../utilities/response')
const {db_getMenus} = require('../models/db_menus')


function validateFields (req, res, next) {
    if (!req.body.menu_name || !req.body.description || !req.body.price || !req.body.availability)  {
        console.log(req.body)
        let rta = new Response (true, 403, 'No se han Ingresado todos los datos obligatorios')
        res.status(403).send(rta)
    } else {
        if (req.body.availability == "Yes" || req.body.availability == "No") {
            next()
        } else {
            let rta = new Response (true, 404, 'Availability debe ser Yes o No')
            res.status(404).send(rta)
        }
    }
}

async function validateId (req, res, next) {
    if (!req.body.id_menu)  {
        let rta = new Response (true, 403, `No se ha Ingresado el ID a Eliminar`)
        res.status(403).send(rta)
    } else {
        let allMenus = await db_getMenus()
        if (allMenus.map(x => x.id_menu).includes(req.body.id_menu))  {
            next()
        } else {
            let rta = new Response (true, 406, `No existe el ID`)
            res.status(406).send(rta)
        }
    }
}



module.exports= { validateFields, validateId } 