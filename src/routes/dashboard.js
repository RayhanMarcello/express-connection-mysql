import express from "express";
import jwt from "jsonwebtoken";
const dashboardRoute = express.Router();

dashboardRoute.get("/", (req, res) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Ambil token dari header

  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token, "IAQmbXtyG45qgTE", (err, decoded) => {
    if (err)
      return res.status(401).json({ message: "Invalid or expired token" });

    res.json({ message: "Protected route accessed", user: decoded });
  });
});

export default dashboardRoute;
