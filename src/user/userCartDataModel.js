const mongoose = require('mongoose');
var schema = mongoose.Schema;

var userCartData = new schema({
    userName: {type: String, default: ""},
    emailAdd: {type: String, default: ""},
    userId: {type: String, default: ""},
    cartDetailsArr: [
        {
            "details": {type: String, default: ""},
            "price": {type: String, default: ""},
            "imgUrl": {type: String, default: ""}
        }
    ]
});

module.exports = mongoose.model("userCartData", userCartData);