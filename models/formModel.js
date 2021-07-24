const mongoose = require('mongoose');
var schema = mongoose.Schema;

var formData = new schema({
    firstName: String,
    lastName: String,
    gender: String,
    age: Number,
});

module.exports = mongoose.model("personInfo", formData, "personInfo");
