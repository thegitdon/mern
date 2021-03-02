const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

const Stock = require('../models/Stock');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.create = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            })
        }

        const { name, description, price, category, quantity } = fields
        let stock = new Stock(fields);

        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Image should be lass than 1MB in size"
                })
            }
            stock.photo.data = fs.readFileSync(files.photo.path)
            stock.photo.contentType = files.photo.type
        }

        stock.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(error)
                })
            }
            res.json(result);
        })

    })
}

exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name'

    Stock.find()
        .select("-photo")
        .populate('category')
        .sort([[sortBy, order]])
        .exec((err, stock) => {
            if (err) {
                return res.status(400).json({
                    error: "// not found" //
                })
            }
            res.json(stock);
        })
}

exports.remove = (req, res) => {
    let stock = req.stock
    stock.remove((err, deletedVidegame) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "// was deleted succesfully"
        })
    })
}

exports.stockById = (req, res, next, id) => {
    Stock.findById(id)
        .populate("category")
        .exec((err, stock) => {
            if (err || !stock) {
                return res.status(400).json({
                    error: "// not found"
                });
            }
            req.stock = stock;
            next();
        })
}

exports.photo = (req, res, next) => {
    if (req.stock.photo.data) {
        res.set('Content-Type', req.stock.photo.contentType)
        return res.send(req.stock.photo.data)
    }
    next();
}

