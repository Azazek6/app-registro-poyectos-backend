import { Router } from "express";
import Cliente from "./clientes.routes.js";
import Proyecto from "./proyecto.routes.js";

const router = Router();

router.use("/clientes", Cliente);
router.use("/proyectos", Proyecto);

export default router;
