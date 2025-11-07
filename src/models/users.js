import dbPool from "../config/database.js";

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";
  return dbPool.execute(SQLQuery);
};

const createNewUser = (name, email, address) => {
  const SQLQuery = "INSERT INTO users (name, email, address) VALUE (?,?,?)";
  return dbPool.execute(SQLQuery, [name, email, address]);
};

const updateUser = async (userId, name, email, address) => {
  // Define the SQL query for updating the user
  const SQLQuery =
    "UPDATE users SET name = ?, email = ?, address = ? WHERE id = ?";

  try {
    // Execute the query with the parameters
    const [result] = await dbPool.execute(SQLQuery, [
      name,
      email,
      address,
      userId,
    ]);
    return result;
  } catch (error) {
    throw new Error("Database error while updating user: " + error.message);
  }
};

export default { getAllUsers, createNewUser, updateUser };
