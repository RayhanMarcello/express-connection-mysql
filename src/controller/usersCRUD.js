import usersModel from "../models/users.js";

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
  const { id } = req.params;
  const { password } = req.body;

  try {
    const updateResult = await usersModel.updateUser(password, id);

    if (updateResult.affectedRows > 0) {
      res.status(200).json({
        message: "User updated successfully",
        update: {
          newPassword: password,
        },
      });
    } else {
      res.status(404).json({ message: "cant change password" });
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
    const [result] = await usersModel.deleteUser(id);
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
  updateUser,
  deleteUsers,
};
