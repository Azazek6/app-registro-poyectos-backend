import { Router } from "express";
import {
  crearProyecto,
  listarProyectos,
} from "../controllers/proyecto.controller.js";

const router = Router();

router.post("/", crearProyecto); // Registrar proyecto
router.get("/", listarProyectos); // Listar proyectos

export default router;
