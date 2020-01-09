const express = require("express");
const userRouter = express.Router();

const { check } = require("express-validator");

const { userRegister } = require("../../controllers/UsersController");

userRouter.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password with 6 or more chars").isLength({
      min: 6
    })
  ],
  userRegister
);

module.exports = userRouter;
