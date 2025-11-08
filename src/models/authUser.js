import dbPool from "../config/database.js";

const validateUserModel = async (name, email) => {
  const SQLQuerry = "SELECT * FROM users WHERE name = ? AND email = ?";
  return await dbPool.execute(SQLQuerry, [name, email]);
};

export default { validateUserModel };
