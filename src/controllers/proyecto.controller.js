import moment from "moment";
import { Cliente, Proyecto } from "../models/asociacion.js";

// Crear nuevo proyecto
export const crearProyecto = async (req, res) => {
  const {
    proyecto,
    nombre,
    division,
    contacto,
    id_cliente,
    fecha_inicio,
    fecha_termino,
    estado,
  } = req.body;

  if (!proyecto || !nombre || !id_cliente || !fecha_inicio || !fecha_termino) {
    return res.status(400).json({
      message: "Hay campos Obligatorios...!",
    });
  }

  try {
    const existe_cliente = await Cliente.findByPk(id_cliente);

    if (!existe_cliente) {
      return res.status(400).json({
        message: "Cliente no reconocido en el sistema...!",
      });
    }

    const newData = await Proyecto.create({
      numero_proyecto: proyecto,
      nombre: nombre.toUpperCase(),
      division: division.toUpperCase(),
      contacto: contacto,
      id_cliente: id_cliente,
      fecha_inicio: fecha_inicio,
      fecha_termino: fecha_termino,
      estado: estado.toUpperCase(),
      fecha_registro: moment(),
    });

    if (!newData) {
      return res.status(400).json({
        message: "Hubo un error al crear proyecto...!",
      });
    }

    return res.status(201).json({
      message: "Se han registrado los datos del proyecto...!",
    });
  } catch (error) {
    return res.status(500).json({
      message: `SERVER_ERROR:: ${error}`,
    });
  }
};

// Listar proyectos
export const listarProyectos = async (req, res) => {
  try {
    const listar = await Proyecto.findAll({
      attributes: [["id_proyecto", "id"], "nombre"],
    });

    if (listar.length <= 0) {
      return res.status(400).json({
        message: "Aun no hay proyectos...!",
      });
    }

    return res.status(200).json(listar);
  } catch (error) {
    return res.status(500).json({
      message: `SERVER_ERROR:: ${error}`,
    });
  }
};
