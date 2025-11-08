import usersModel from "../models/users.js";

// create
const createNewUser = async (req, res) => {
  const { name, email, address } = req.body;
  try {
    await usersModel.createNewUser(name, email, address);
    res.status(200).json({
      message: "create succsess ",
      data: {
        name,
        email,
        address,
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
