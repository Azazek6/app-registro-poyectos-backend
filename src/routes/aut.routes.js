import { Router } from "express";
import { signIn } from "../controllers/auth.controller.js";

const router = Router();

router.post("/signin", signIn); // Iniciar Sesión

export default router;
