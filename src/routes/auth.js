const { Router } = require('express');
const router = Router();

//

const { signup, signin, signout } = require('../controllers/authcontroller');

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/signout', signout)
//.post((req, res) => res.send('200'))
//router.post('/signin');

module.exports = router;