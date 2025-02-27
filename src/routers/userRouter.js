const express = require("express");
const userController = require("../contollers/userController");

const userRouter = express.Router();

userRouter.get("/get-users", userController.getUsers);



module.exports = userRouter