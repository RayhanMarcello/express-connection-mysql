import usersModel from "../models/users.js";

// CRUD

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

// read
const getAllUsers = async (req, res) => {
  try {
    const [data] = await usersModel.getAllUsers();

    res.json({
      message: "succses get data",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      messageServer: error.message,
    });
  }
};

// update - patch
const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { name, email, address } = req.body; // Extract user data from request body

  try {
    const updateResult = await usersModel.updateUser(
      userId,
      name,
      email,
      address
    );

    if (updateResult.affectedRows > 0) {
      res.status(200).json({
        message: "User updated successfully",
        update: {
          name: name,
          email: email,
          address: address,
        },
      });
    } else {
      res.status(404).json({ message: "User not found or no changes made" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update user", error: error.message });
  }
};

// delete
const deleteUsers = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await usersModel.deleteUser(id);
    res.status(200).json({
      message: "succss delete ",
      userDelete: result,
    });
  } catch (error) {
    res.status(401).json({
      message: `cannot find user ${id}`,
    });
  }
};

export default {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUsers,
};
