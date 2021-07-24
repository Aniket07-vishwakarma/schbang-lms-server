const express = require("express");
var router = express.Router();
var controller = require("../controllers/formControllers.js");

//***************get request********************** */
router.get("/getData", function(req, res){
    controller.getData(req, res);
});

// //***************put request********************** */
router.put("/addData", function(req, res){
    controller.addData(req, res);
});

// //***************post request********************** */
router.post("/deleteData/:id", function(req, res){
    controller.deleteData(req, res);
});

// //***************post request********************** */
router.post("/updateData/:id", function(req, res){
    controller.updateData(req, res);
});

module.exports = router;