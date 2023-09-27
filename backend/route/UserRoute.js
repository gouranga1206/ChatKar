const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  updateUser,
  getUserById,
  deleteUser,
} = require("../controller/UserController.js");

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
