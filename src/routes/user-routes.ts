import express from "express";
import { registerUser } from "../controllers/register";
import { loginUser } from "../controllers/login";
import { logoutUser } from "../controllers/logout";
import { auth } from "../middlewares/auth";
import roleCheck from "../middlewares/checkRole";

const app = express();

app.use(express.json());

app.post("/login", loginUser);

app.post("/register", registerUser);

app.post("/logout", auth, logoutUser);



export default app;
