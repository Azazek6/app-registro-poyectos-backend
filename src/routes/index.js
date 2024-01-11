import { Router } from "express";
import Cliente from "./clientes.routes.js";
import Proyecto from "./proyecto.routes.js";
import Datos from "./datos.routes.js";

const router = Router();

router.use("/clientes", Cliente);
router.use("/proyectos", Proyecto);
router.use("/datos", Datos);

export default router;
