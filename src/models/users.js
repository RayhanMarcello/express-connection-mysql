import dbPool from "../config/database.js";

const getAllUsers = () => {
  try {
    const SQLQuery = "SELECT * FROM users";
    return dbPool.execute(SQLQuery);
  } catch (error) {
    console.log(error.message);
  }
};

const createNewUser = (username, password, email) => {
  const SQLQuery =
    "INSERT INTO users (username, password, role, email ) VALUE (?,?,'siswa',?)";
  return dbPool.execute(SQLQuery, [username, password, email]);
};

const updateUser = async (password, id) => {
  const SQLQuery = "UPDATE users SET password = ? WHERE id = ?";

  try {
    const [result] = await dbPool.execute(SQLQuery, [password, id]);
    return result;
  } catch (error) {
    throw new Error("Database error while updating user: " + error.message);
  }
};

const deleteUser = async (id) => {
  const SQLQuery = "DELETE FROM users WHERE id = ?";
  try {
    const [result] = await dbPool.execute(SQLQuery, [id]);
    return result;
  } catch (error) {
    return console.log(error);
  }
};

export default { getAllUsers, createNewUser, updateUser, deleteUser };
