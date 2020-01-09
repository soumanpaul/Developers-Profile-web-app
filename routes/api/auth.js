const express = require("express");
const authRouter = express.Router();
const auth = require("../../middleware/auth");
const { check } = require("express-validator");

const { getUser, signInUser } = require("../../controllers/AuthController");

authRouter
  .route("/")
  .get(auth, getUser)
  .post(
    "/",
    [
      check("email", "Please include a valid email").isEmail(),
      check("password", "password is required").exists()
    ],
    signInUser
  );

module.exports = authRouter;
