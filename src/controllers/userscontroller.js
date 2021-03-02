const usersCtrl = {};

const UserModel = require('../models/User');

usersCtrl.getUsers = async (req, res) => /*res.json({message: []})*/ {
    const users = await UserModel.find(); //[{}, ...]
    res.json(users) 
}

usersCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new UserModel({
        username 
    })
    await newUser.save();
    //console.log(newOrder)
    res.json({message: 'Saved'})
}

usersCtrl.getUser = (req, res) => res.json({title: '...'})

usersCtrl.updateUser = (req, res) => res.json({message: 'OK'})

usersCtrl.deleteUser = async (req, res) => {
    await UserModel.findByIdAndDelete(req.params.id)
    res.json({message: 'Deleted'})
}

module.exports = usersCtrl;