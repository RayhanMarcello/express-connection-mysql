import express from "express";

import UserController from "../controller/users.js";
import RegisterController from "../controller/register.js";

const router = express.Router();

router.get("/", UserController.getAllUsers);

router.post("/register", RegisterController.createNewUser);

router.patch("/:userId", UserController.updateUser);

router.delete("/:id", UserController.deleteUsers);

export default router;
