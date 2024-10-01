import express, { Response } from "express";
import { registerUser } from "../controllers/register";
import { loginUser } from "../controllers/login";
import roleCheck from "../middlewares/checkRole";

const app = express();

app.use(express.json());

// used this illustrate role checks
app.get("/admin-dashboard", roleCheck(['admin']), (req, res) => {
    res.json({ msg: 'Welcome to the admin dashboard!' });
  });
app.post("/login", loginUser);
app.post("/register", registerUser);

export default app;
