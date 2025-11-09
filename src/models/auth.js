import dbPool from "../config/database.js";

const validateUserModel = async (email) => {
  const SQLQuerry = "SELECT * FROM users WHERE email = ?";
  return await dbPool.execute(SQLQuerry, [email]);
};

export default { validateUserModel };
