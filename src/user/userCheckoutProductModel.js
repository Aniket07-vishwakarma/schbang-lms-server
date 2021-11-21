const mongoose = require('mongoose');
var schema = mongoose.Schema;

var checkOutProductModel = new schema({
    userName: {type: String, default: ""},
    emailAdd: {type: String, default: ""},
    userId: {type: String, default: ""},
    mobileNum: {type: Number, default: ""},
    shippingAdd: {type: String, default: ""},
    pincode: {type: Number, default: ""},
    checkOutProductDeails: [
        {
            "details": {type: String, default: ""},
            "price": {type: String, default: ""},
            "imgUrl": {type: String, default: ""},
        }
    ],
    totaNumberOfProducts: {type: Number, default: ""},
    totalOrderCost: {type: String, default: ""},
}, 
{
    timestamps: true
});

module.exports = mongoose.model("orderData", checkOutProductModel);