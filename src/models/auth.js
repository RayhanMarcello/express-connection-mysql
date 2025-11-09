import dbPool from "../config/database.js";

const validateUserModel = async (username, password) => {
  try {
    const SQLQuerry = "SELECT * FROM users WHERE username = ? AND password = ?";
    return await dbPool.execute(SQLQuerry, [username, password]);
  } catch (error) {
    return console.log(error);
  }
};

export default { validateUserModel };
