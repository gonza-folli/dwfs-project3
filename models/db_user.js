const sequelize = require('../utilities/dbConnection')

const db_insertUser = (user) =>
    sequelize.query('INSERT INTO usuarios (user, fullname, email, phone, address, password, rol) VALUES (?,?,?,?,?,?, "user")', {
        replacements: user,
        type: sequelize.QueryTypes.INSERT
    })

const db_selectFromUser = (user) => 
    sequelize.query('SELECT * FROM usuarios WHERE user = ? ', {
        replacements: user,
        type: sequelize.QueryTypes.SELECT
    })

const db_loginUser = (user) =>
    sequelize.query('SELECT * from usuarios WHERE user = ? AND password = ?', {
        replacements: user,
        type: sequelize.QueryTypes.SELECT
    })

const db_modifyUser = (user) => 
    sequelize.query('UPDATE usuarios SET fullname = ?, email = ?, phone = ?, address = ?, password = ? WHERE user = ?', {
        replacements: user,
        type: sequelize.QueryTypes.UPDATE
    })


module.exports = { db_insertUser, db_selectFromUser, db_loginUser, db_modifyUser}