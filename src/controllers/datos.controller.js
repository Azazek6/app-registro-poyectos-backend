import moment from "moment";
import { Administracion } from "../models/asociacion.js";

export const createData = async (req, res) => {
  const {
    id_proyecto,
    id_gerente,
    id_residente,
    id_jefe,
    id_administrador,
    id_sisme,
    id_mecanico,
    telefono,
    comentarios,
  } = req.body;

  if (
    !id_proyecto ||
    !id_gerente ||
    !id_residente ||
    !id_jefe ||
    !id_administrador ||
    !telefono ||
    !comentarios
  ) {
    return res.status(400).json({
      message: "Hay campos obligatorios...!",
    });
  }

  try {
    const newData = await Administracion.create({
      id_proyecto: id_proyecto,
      id_gerente: id_gerente,
      id_residente: id_residente,
      id_jefe: id_jefe,
      id_administrador: id_administrador,
      id_sisme: id_sisme == "" ? null : id_sisme,
      id_mecanico: id_mecanico == "" ? null : id_mecanico,
      telefono: telefono,
      comentarios: comentarios,
      fecha_registro: moment(),
    });

    if (!newData) {
      return res.status(400).json({
        message: "Ocurrió un error al registrar...!",
      });
    }

    return res.status(201).json({
      message: "Se ha registrado todo el proyecto...!",
    });
  } catch (error) {
    return res.status(500).json({
      message: `SERVER_ERROR:: ${error}`,
    });
  }
};
