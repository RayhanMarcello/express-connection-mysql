import authModels from "../models/authUser.js";

const validateUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const [result] = await authModels.validateUserModel(name, email);
    console.log(result.length);
    if (result.length === 0) {
      return res.json({
        message: "usernotfound",
      });
    }
    next();
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export default { validateUser };
