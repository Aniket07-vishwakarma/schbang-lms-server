const userLoginModel = require('./userLoginModel');
const userCartModel = require('./userCartDataModel');
const checkOutProductModel = require('./userCheckoutProductModel');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('bson');
const sendAMail = require('./sendMail');
const nodemailer = require('nodemailer');

let userController = {};

userController.userLoginData = (req, res) => {

    let userId = jwt.sign(req.body.emailAdd, "eComm");
    req.body = Object.assign(req.body, { "userId": userId });

    let userLoginData = new userLoginModel(req.body);
    userLoginData.save((err, data) => {
        if (err) {
            res.status(401).json({
                error: err
            });
        } else {
            res.status(200).json({
                msg: "user login data save",
                data: data
            });
        }
    })
}


userController.saveCartData = (req, res) => {
    let userCartData = new userCartModel(req.body);
    userCartData.save((err, data) => {
        if (err) {
            res.status(401).json({
                error: err
            });
        } else {
            res.status(200).json({
                msg: "User cart data Save",
                data: data
            });
        }
    })
}

userController.updateCartDataToAdd = (req, res) => {
    userCartModel.update(
        { userId: req.body.userId },
        { "$push": { "cartDetailsArr": req.body.cartDetailsArr } },
        (err, data) => {
            if (err) {
                res.status(401).json({
                    error: err
                });
            } else {
                res.status(200).json({
                    msg: "User cart data updated",
                    data: data
                });
            }
        })
}

userController.updateCartDataToRemove = (req, res) => {
    console.log(JSON.stringify(req.body.id), req.body);
    userCartModel.update(
        { userId: req.body.userId },
        { $pull: { "cartDetailsArr": { "_id": ObjectId(req.body.id) } } },
        (err, data) => {
            if (err) {
                res.status(401).json({
                    error: err
                });
            } else {
                res.status(200).json({
                    msg: "User cart data updated to remove",
                    data: data
                });
            }
        })
}

userController.getAllCartData = (req, res) => {
    userCartModel.find({ userId: req.query.userId }, (err, data) => {
        if (err) {
            res.status(401).json({
                error: err
            });
        } else {
            res.status(200).json({
                msg: "User cart data found",
                data: data
            });
        }
    })
}

userController.removeCartData = (req, res) => {
    userCartModel.remove({ userId: req.query.userId }, (err, data) => {
        if (err) {
            res.status(401).json({
                error: err
            });
        } else {
            res.status(200).json({
                msg: "User cart data removed",
                data: data
            });
        }
    })
}

userController.saveOrderData = (req, res) => {
    let checkOutProductData = new checkOutProductModel(req.body);
    checkOutProductData.save((err, data) => {
        if (err) {
            res.status(401).json({
                error: err
            });
        } else {
            // sentMail().catch(console.error);
            sendAMail(data).catch(console.error);
            res.status(200).json({
                msg: "User cart data found",
                data: data
            });
        }
    })
}

module.exports = userController;