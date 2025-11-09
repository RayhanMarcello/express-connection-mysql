import usersModel from "../models/users.js";

// create
const createNewUser = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    await usersModel.createNewUser(username, password, email);
    res.status(200).json({
      message: "create succsess ",
      data: {
        username,
        password,
        email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "cannot create user",
      messageServer: error.message,
    });
  }
};

export default { createNewUser };
