const express = require("express");
const userController = require("../contollers/userController");
const authMiddleware = require("../middlewares/authMidleware");

const userRouter = express.Router();

userRouter.get("/get-users", userController.getUsers);
userRouter.post("/sign-up", userController.signUp);
userRouter.post("/sign-in", userController.signIn);
userRouter.patch("/update-user",authMiddleware, userController.updateUser);
userRouter.get("/matches", authMiddleware, userController.getMatches);
userRouter.get("/hobbies", authMiddleware, userController.getUsersByHobbies);

module.exports = userRouter;