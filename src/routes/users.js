import express from "express";

import UserController from "../controller/users.js";
import RegisterController from "../controller/register.js";

const router = express.Router();

router.get("/users", UserController.getAllUsers);

router.post("/register", RegisterController.createNewUser);

router.patch("/users/:id", UserController.updateUser);

router.delete("/users/:id", UserController.deleteUsers);

export default router;
