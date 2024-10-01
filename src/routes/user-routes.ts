import express from "express";
import { registerUser } from "../controllers/register";
import { loginUser } from "../controllers/login";

const app = express()

app.use(express.json());

app.post("/login", loginUser);
app.post("/register", registerUser);


export default app;
