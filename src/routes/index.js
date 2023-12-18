import { Router } from "express";
import Cliente from "./clientes.routes.js";
import Proyecto from "./proyecto.routes.js";
import Ubicacion from "./ubicacion.routes.js";

const router = Router();

router.use("/clientes", Cliente);
router.use("/proyectos", Proyecto);
router.use("/ubicaciones", Ubicacion);

export default router;
