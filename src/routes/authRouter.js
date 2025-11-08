import express from "express";
import middlewareAuth from "../middleware/auth.js";

const authRouter = express.Router();

authRouter.post("/", middlewareAuth.validateUser, (req, res) => {
  res.json({
    message: "auth berhasi",
  });
});

export default authRouter;
