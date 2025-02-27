const express = require("express");
const userController = require("../contollers/userController");

const userRouter = express.Router();

userRouter.get("/get-users", userController.getUsers);
userRouter.post("/sign-up", userController.signUp);
userRouter.post("/sign-in", userController.signIn);


module.exports = userRouter;