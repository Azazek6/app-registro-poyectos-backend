import { Router } from "express";
import {
  createData
} from "../controllers/datos.controller.js";

const router = Router();

router.post("/", createData); // Registrar datos administrativos

export default router;
