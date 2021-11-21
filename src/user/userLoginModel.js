const mongoose = require('mongoose');
var schema = mongoose.Schema;

var userLoginData = new schema({
    userName: {type: String, default: ""},
    emailAdd: {type: String, default: ""},
    password: {type: String, default: ""},
    userId: {type: String, default: ""},
}, 
{
    timestamps: true
});

module.exports = mongoose.model("userLoginData", userLoginData);