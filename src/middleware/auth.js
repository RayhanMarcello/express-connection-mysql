import authModels from "../models/authUser.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const jwtSecretKey = "IAQmbXtyG45qgTE";

const validateUser = async (req, res, next) => {
  const { email, address } = req.body;
  try {
    const [result] = await authModels.validateUserModel(email, address);

    // console.log(user.address);

    if (result.length === 0) {
      return res.json({
        message: "usernotfound",
      });
    }

    const user = result[0];
    console.log(user);
    const isMatch = await bcrypt.compare(address, user.address);

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
      },
      jwtSecretKey,
      {
        expiresIn: "1h",
      }
    );

    if (address !== user.address) {
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
