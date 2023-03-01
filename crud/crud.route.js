const express = require("express");
const controller = require("./crud.controller");

const router = express.Router();
router.route("/").post(controller.createUser);
router.route("/:id").get(controller.getUser);
router.route("/").get(controller.getUsers);
router.route("/:id").delete(controller.deleteUser);
router.route("/:id").put(controller.editUser);

module.exports=router;



