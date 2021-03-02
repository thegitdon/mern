const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/userscontroller');

router.route('/')
//.get((req, res) => res.send('Hi there from users!'))
//res.json({message: ''}))
.get(getUsers)
.post(createUser)

router.route('/:id')
.get(getUser)
.put(updateUser)
.delete(deleteUser)

module.exports = router;