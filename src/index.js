import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const PORT = process.env.PORT;

import userRoutes from "./routes/users.js";
import middlewareLogReq from "./middleware/log.js";

app.use(middlewareLogReq);

app.use(express.json());

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log("berjalan di port", PORT);
});
