const express = require('express');
const router = express.Router();

const { addOrder } = require('../controllers/orders/addOrder');
const { detailOrder } = require('../controllers/orders/detailOrder');
const middleware = require('../middlewares/middle_orders')


router.post('/addOrder', addOrder)
router.get('/detailOrder', middleware.validatePermission, detailOrder)


module.exports = router