import { Router } from "express";
import { registerUser } from "../controllers/register";
import { loginUser } from "../controllers/login";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
