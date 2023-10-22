const express = require('express');
const orderController = require('../controller/OrderController');

const router = express.Router();

/*
* POST--> SAVE  --> body
* DELETE--> DELETE --> headers
* PUT--> UPDATE --> body
* get-- FETCH --> headers
*
* */

router.post('/save', orderController.saveOrder)
router.get('/getAll', orderController.getAllOrders)
router.delete('/delete', orderController.deleteOrder)


module.exports = router;
