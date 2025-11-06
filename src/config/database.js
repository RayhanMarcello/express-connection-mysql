configDotenv();
import { configDotenv } from "dotenv";
import mysql from "mysql2";
const dbpool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  port: 3306,
});

export default dbpool.promise();
