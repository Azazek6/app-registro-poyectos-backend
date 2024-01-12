import { Router } from "express";
import {
  crearProyecto,
  listarProyectos,
} from "../controllers/proyecto.controller.js";
import { listReporteProyectos } from "../controllers/reporte.controller.js";

const router = Router();

router.post("/", crearProyecto); // Registrar proyecto
router.get("/", listarProyectos); // Listar proyectos
router.get("/reporte", listReporteProyectos); // Reporte de proyectos

export default router;
