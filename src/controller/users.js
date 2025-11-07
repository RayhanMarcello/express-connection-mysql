import { use } from "react";
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
const updateUsers = async (req, res) => {
  const { userId } = req.params;
  const { name, email, address } = req.body;
  console.log(userId);
  try {
    await usersModel.updateUser(name, email, address, userId);
    res.status(200).json({
      message: "update user succsess",
      update: {
        name: name,
        email: email,
        address: address,
      },
    });
  } catch (error) {
    res.json({
      message: "update user failed",
      messageServer: error.message,
    });
  }
};

// delete
const deleteUsers = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "delete user sucsess",
    data: {
      id: id,
      username: req.body.username,
      password: req.body.password,
    },
  });
};

export default {
  getAllUsers,
  createNewUser,
  updateUsers,
  deleteUsers,
};
