import authModels from "../models/authUser.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const jwtSecretKey = 123123123;

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

    if (!isMatch) {
      return res.json({
        message: "email or address invalid",
      });
    }

    // const token = jwt.sign(
    //   {
    //     userId: user.id,
    //     email: user.email,
    //   },
    //   jwtSecretKey,
    //   {
    //     expiresIn: "1h",
    //   }
    // );

    // if (isMatch) {
    //   return res.json({
    //     token: token,
    //   });
    // }

    next();
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export default { validateUser };
