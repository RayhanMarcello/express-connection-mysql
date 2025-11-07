import express from "express";

import UserController from "../controller/users.js";

const router = express.Router();

router.get("/", UserController.getAllUsers);

router.post("/", UserController.createNewUser);

router.patch("/:userId", UserController.updateUser);

router.delete("/:id", UserController.deleteUsers);
export default router;
