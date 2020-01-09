const express = require("express");
const profileRouter = express.profileRouter();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const {
  getCurrentProfile,
  createProfile,
  getAllProfiles,
  getProfileById,
  deleteProfile,
  addExperience,
  deleteExperience,
  addEducation,
  deleteEducation,
  getGithub
} = require("../../controllers/ProfileController");


profileRouter.route("/me").get(auth, getCurrentProfile);
profileRouter
  .route("/")
  .get("/", getAllProfiles)
  .post(
    [
      auth,
      [
        check("status", "Status is requireed ")
          .not()
          .isEmpty(),
        check("skills", "Skills is required")
          .not()
          .isEmpty()
      ]
    ],
    createProfile
  )
  .delete(auth, deleteProfile);

profileRouter.router("/user/:user_id").get(getProfileById);

profileRouter.route("/experience").put(
  [
    auth,
    [
      check("title", "Title is required")
        .not()
        .isEmpty(),

      check("company", "Company is required")
        .not()
        .isEmpty(),

      check("from", "From date is required")
        .not()
        .isEmpty()
    ]
  ],
  addExperience
);

profileRouter.route("/experience/:exp_id").delete(auth, deleteExperience);
profileRouter.route("/education").put(
  [
    auth,
    [
      check("school", "School is required")
        .not()
        .isEmpty(),

      check("degree", "Degree is required")
        .not()
        .isEmpty(),
      check("fieldofstudy", "Field of study is required")
        .not()
        .isEmpty(),

      check("from", "From date is required")
        .not()
        .isEmpty()
    ]
  ],
  addEducation
);
profileRouter.delete("/education/:edu_id", auth, deleteEducation);
profileRouter.get("/github/:username", getGithub);

module.exports = profileRouter;
