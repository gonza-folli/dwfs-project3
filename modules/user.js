const express = require('express');
const router = express.Router()

const middleware = require('../middlewares/middle_users')

const { createUser } = require('../controllers/user/createUser')
const { loginUser } = require('../controllers/user/loginUser')
const { modifyUser } = require('../controllers/user/modifyUser')
// const { removeUser } = require('../controllers/user/modifyUser')


router.post('/signup', middleware.validateFields, middleware.validateId, createUser)
router.post('/login', loginUser)
router.put('/', middleware.validateFields, middleware.validateSelfPermission, modifyUser)
// router.delete('/', removeUser)

module.exports = router