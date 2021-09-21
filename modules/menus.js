const express = require('express');
const router = express.Router()

const middleware = require('../middlewares/middle_menus');
const {validatePrivilege} = require('../middlewares/validatePrivilege')

const {getMenus} = require('../controllers/menus/getMenus')
const {addMenus} = require('../controllers/menus/addMenus')
const {modifyMenus} = require('../controllers/menus/modifyMenus')
const {removeMenus} = require('../controllers/menus/removeMenus')

router.get('/', getMenus)
router.post('/add', validatePrivilege, middleware.validateFields, addMenus)
router.put('/modify', validatePrivilege, middleware.validateFields, modifyMenus)
router.delete('/remove', validatePrivilege, middleware.validateId, removeMenus)

module.exports = router