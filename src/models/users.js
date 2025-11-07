import dbPool from "../config/database.js";

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";
  return dbPool.execute(SQLQuery);
};

const createNewUser = (name, email, address) => {
  const SQLQuery = "INSERT INTO users (name, email, address) VALUE (?,?,?)";
  return dbPool.execute(SQLQuery, [name, email, address]);
};

const updateUser = async (id, name, email, address) => {
  const SQLQuery = `UPDATE users SET name = ?, email = ?, address = ? WHERE id = ?}`;
  return dbPool.execute(SQLQuery, [name, email, address, id]);
};

export default { getAllUsers, createNewUser, updateUser };
