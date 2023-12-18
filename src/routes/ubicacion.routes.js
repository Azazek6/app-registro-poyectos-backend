import { Router } from "express";
import { crearUbicacion } from "../controllers/ubicacion.controller.js";

const router = Router();

router.post("/", crearUbicacion); // Crear ubicacion

export default router;
