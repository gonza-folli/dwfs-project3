const express = require('express');
const router = express.Router();

const {validatePrivilege} = require('../middlewares/validatePrivilege')
const {detailOrder} = require('../controllers/orders/detailOrder')
const {allOrders} = require('../controllers/admin/allOrders')
const {updateStatus} = require('../controllers/admin/updateStatus')

router.use(validatePrivilege)
router.get('/detailOrder', detailOrder)
router.get('/allOrders', allOrders)
router.put('/updateStatus', updateStatus)



module.exports = router