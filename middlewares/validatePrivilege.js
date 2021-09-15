const Response = require('../utilities/response');
const jwt_decode = require('jwt-decode');


function validatePrivilege (req, res, next) {
    try {
        let token = req.headers.authorization
        token = token.split(' ')[1]
        let decoded = jwt_decode(token);
        console.log(decoded)
        console.log(decoded.admin)
        if (decoded.admin == 'admin') {
            console.log('funcionó')
            next()
        } else {
            console.log('fallo')
            throw new Error
        }
    } catch {
        let message = new Response (true, 401, 'No posee los privilegios para realizar la acción solicitada')
        res.status(401).send(message)
    }
}

module.exports = {validatePrivilege}