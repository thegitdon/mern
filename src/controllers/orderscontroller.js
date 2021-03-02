const ordersCtrl = {};

const OrderModel = require('../models/Order');

ordersCtrl.getOrders = async (req, res) => {
    //res.json({message: []})
    const notes = await OrderModel.find(); //[{}, ...]
    res.json(notes) 
    //[{}, {}]
}

ordersCtrl.createOrder = async (req, res) => { //async
    //res.json({message: ':)'})
    //console.log(req.body)
    const { title, content, date, author } = req.body;
    const newOrder = new OrderModel({
        title,
        content,
        date,
        author
    })
    await newOrder.save();
    //console.log(newOrder)
    res.json({message: 'Saved'})
}

ordersCtrl.getOrder = async (req, res) => {
    //console.log(req.params.id)
    const order = await OrderModel.findById(req.params.id)
    console.log(order)
    res.json(order)
}
//res.json({title: '...'})

ordersCtrl.updateOrder = async (req, res) => {
    //const ... req.body;
    //console.log(req.body)
    //const { title, content, date, author } = req.body;
    await OrderModel.findByIdAndUpdate(req.params.id, req.body/*, {
        title,
        author,
        content
    }*/)//findOneAndUpdate({_id: req.params.id}, {title, ...});
    res.json({message: 'Updated'})
}
//res.json({message: 'OK'})

ordersCtrl.deleteOrder = async (req, res) => {
    await OrderModel.findByIdAndDelete(req.params.id)
    res.json({message: 'Deleted'})
}
//res.json({message: 'xxx'})

module.exports = ordersCtrl;