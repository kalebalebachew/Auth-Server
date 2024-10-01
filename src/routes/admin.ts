import express from "express";
import { auth } from "../middlewares/auth";
import roleCheck from "../middlewares/checkRole";

const app = express();

app.get("/admin-dashboard", auth, roleCheck(["admin"]), (req, res) => {
  res.json({ msg: "Welcome to the admin dashboard!" });
});




app.post('/change-role/:userId', auth,roleCheck(["admin"]))

export default app;
