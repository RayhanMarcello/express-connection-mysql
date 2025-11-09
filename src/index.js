import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const PORT = process.env.PORT;

import userRoutes from "./routes/users.js";
import middlewareLogReq from "./middleware/log.js";
import loginRouter from "./routes/loginRouter.js";
import dashboardRoute from "./routes/dashboard.js";

app.use(middlewareLogReq);

app.use(express.json());

app.use("/api", userRoutes);

app.use("/api", loginRouter);

app.use("/dashboard", dashboardRoute);

app.listen(PORT, () => {
  console.log("berjalan di port", PORT);
});
