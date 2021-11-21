const express = require("express");
const router = express.Router();
var userController = require('./user/userController');

router.post("/saveUserLogin", userController.userLoginData);
router.post("/saveCartData", userController.saveCartData);
router.post("/updateCartData", userController.updateCartDataToAdd);
router.get("/getAllCartData", userController.getAllCartData)
router.post("/updateCartDataToRemove", userController.updateCartDataToRemove)
router.get("/removeCartData", userController.removeCartData)

router.post("/saveOrderData", userController.saveOrderData);
module.exports = router;