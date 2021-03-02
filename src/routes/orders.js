const { Router } = require('express');
const router = Router();

const { getOrders, createOrder, getOrder, updateOrder, deleteOrder } = require('../controllers/orderscontroller');

router.route('/')
//.get((req, res) => res.send('Hi there from orders!'))
.get(getOrders)
.post(createOrder)

router.route('/:id')
.get(getOrder)
.put(updateOrder)
.delete(deleteOrder)


module.exports = router;