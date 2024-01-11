import { Router } from "express";
import {
  crearCliente,
  listarClienteDocumento,
} from "../controllers/cliente.controller.js";

const router = Router();

router.post("/", crearCliente); // Registrar cliente
router.get("/documento/:documento/rol/:rol", listarClienteDocumento); // Mostrar clientes por numero de documento

export default router;
