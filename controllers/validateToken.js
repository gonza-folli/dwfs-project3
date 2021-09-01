const jwt = require('jsonwebtoken');
const jwtKey = 'D3l1l4h';

module.exports = function (user, privilege) {
    const token = jwt.sign({
        usuario: user,
        admin: privilege
        },
        jwtKey, 
        {expiresIn: '1h'},
        {algorithm: 'RS256'},
    )
    return token
}