configDotenv();
import authModels from "../models/auth.js";
import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

const jwtSecretKey = process.env.JWT_TOKEN;

const validateUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const [result] = await authModels.validateUserModel(username, password);

    // console.log(user.address);

    if (result.length === 0) {
      return res.json({
        message: "usernotfound",
      });
    }

    const user = result[0];
    console.log(user);

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      jwtSecretKey,
      {
        expiresIn: "1h",
      }
    );

    if (password !== user.password || username !== user.username) {
      return res.json({
        message: "email or address invalid",
      });
    } else {
      return res.json({
        message: "sucsess",
        token: token,
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
  next();
};

export default { validateUser };
