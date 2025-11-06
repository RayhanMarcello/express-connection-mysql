import dbPool from "../config/database.js";

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";
  return dbPool.execute(SQLQuery);
};

const createNewUser = (name, email, address) => {
  const SQLQuery = "INSERT INTO users (name, email, address) VALUE (?,?,?)";
  return dbPool.execute(SQLQuery, [name, email, address]);
};

export default { getAllUsers, createNewUser };
