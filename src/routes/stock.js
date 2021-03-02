const { Router } = require('express');
const router = Router();

const { list, create, remove, stockById, photo } = require('../controllers/stockcontroller');

// list 
router.get('/product', list);
router.post('/create', create)
router.delete('/:stockId', remove) //product
router.param("stockId", stockById);

router.get('/photo/:stockId', photo)
//router.get('/:stockId', read)

module.exports = router;