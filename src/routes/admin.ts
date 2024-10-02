import express from "express";
import { auth } from "../middlewares/auth";
import { isAdmin } from "../middlewares/isAdmin";
import { changeUserRole } from "../controllers/admin";
import { deleteUser } from "../controllers/admin";
const app = express();

app.get("/admin-dashboard", auth, isAdmin, (req, res) => {
  res.json({ msg: "Welcome to the admin dashboard!" });
}); 

app.post("/change-role/:userId", auth, isAdmin ,changeUserRole);
app.delete("/delete-user/:userId", auth, isAdmin, deleteUser);
export default app; 
 