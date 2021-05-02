const router = require("express").Router();
const userController = require("../controller/userController");


router.post("/register",  userController.userRegister);
router.post("/login", userController.userSignIn);


module.exports=router;