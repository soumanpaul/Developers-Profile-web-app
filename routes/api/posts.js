const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const {
  getAllPosts,
  addPost,
  getPostById,
  deletePost,
  likePost,
  unLikePost,
  commentOnPost,
  deleteComment
} = require("../../controllers/PostsController");

router
  .route("/")
  .get(auth, getAllPosts)
  .post(
    [
      auth,
      [
        check("text", "Text is required")
          .not()
          .isEmpty()
      ]
    ],
    addPost
  );

router
  .route("/:id")
  .get(auth, getPostById)
  .delete(auth, deletePost);
router.route("/like/:id").put(auth, likePost);
router.route("/unlike/:id").put(auth, unLikePost);
router.route("/comment/:id").post(
  [
    auth,
    [
      check("text", "Text is required")
        .not()
        .isEmpty()
    ]
  ],
  commentOnPost
);
router.route("/comment/:id/:comment_id").delete(auth, deleteComment);

module.exports = router;
