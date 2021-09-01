const Response = require('../utilities/response')
// const {db_selectFromUser} = require('../models/db_user')


function validateFields (req, res, next) {
    if (!req.body.menu_name || !req.body.description || !req.body.price || !req.body.availability)  {
        console.log(req.body)
        let rta = new Response (true, 403, 'No se han Ingresado todos los datos obligatorios')
        res.status(403).send(rta)
    } else {
        if (req.body.availability == "Yes" || req.body.availability == "No") {
            next()
        } else {
            let rta = new Response (true, 403, 'Availability debe ser Yes o No')
            res.status(403).send(rta)
        }
    }
}

function validateId (req, res, next) {
    if (!req.body.id_menu)  {
        console.log(req.body)
        let rta = new Response (true, 403, `No se ha Ingresado el ID a Eliminar`)
        res.status(403).send(rta)
    } else {
        next()
    }
}



module.exports= { validateFields, validateId } 