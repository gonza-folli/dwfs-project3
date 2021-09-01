const express = require('express');
const router = express.Router()

const middleware = require('../middlewares/middle_menus');
const {validatePrivilege} = require('../middlewares/validatePrivilege')

const {getMenus} = require('../controllers/menus/getMenus')
const {addMenus} = require('../controllers/menus/addMenus')
const {modifyMenus} = require('../controllers/menus/modifyMenus')
const {removeMenus} = require('../controllers/menus/removeMenus')

router.get('/', getMenus)
router.post('/add', middleware.validateFields, validatePrivilege, addMenus)
router.put('/modify', middleware.validateFields, validatePrivilege, modifyMenus)
router.delete('/remove/:IdMenu', middleware.validateId, validatePrivilege, removeMenus)

module.exports = router