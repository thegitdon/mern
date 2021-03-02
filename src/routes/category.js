const { Router } = require('express');
const router = Router();

const { list, create, remove, categoryById } = require('../controllers/catcontroller');

/*const {userById} = require('../controllers/authController');

const { list, create, remove, categoryById } = require('../controllers/categoryController');

router.get('/categories', list);
router.post('/create/:userId', create);
router.delete('/:categoryId/', remove)

router.param('categoryId', categoryById);
router.param('userId', userById);

router.get('/', (req, res) => {
    res.send('200 cat :)');
})*/

router.get('/categories', list);
router.post('/create', create);
router.delete('/:categoryId', remove);

router.param('categoryId', categoryById);



module.exports = router;