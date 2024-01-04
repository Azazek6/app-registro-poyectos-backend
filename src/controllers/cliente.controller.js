import moment from "moment";
import { Cliente } from "../models/asociacion.js";

export const crearCliente = async (req, res) => {
  const { type, document, names, rol } = req.body;

  if (!type || !document || !names || !rol) {
    return res.status(400).json({
      message: "Hay campos Obligatorios...!",
    });
  }
  try {
    const existe_cliente = await Cliente.findOne({
      where: { documento: document },
    });

    if (existe_cliente) {
      return res.status(400).json({
        message: "El documento se registró anteriormente en el sistema...!",
      });
    }
    const newData = await Cliente.create({
      tipo_documento: type.toUpperCase(),
      documento: document,
      nombre: names.toUpperCase(),
      rol: rol.toUpperCase(),
      fecha_registro: moment(),
    });

    if (!newData) {
      return res.status(400).json({
        message: "Ocurrió un problema al registrar persona...!",
      });
    }

    return res.status(201).json({
      message: "Se ha añadido una nueva persona...!",
      id_cliente: newData.id_persona,
    });
  } catch (error) {
    return res.status(500).json({
      message: `SERVER_ERROR:: ${error}`,
    });
  }
};

// Listar Clientes por documento
export const listarClienteDocumento = async (req, res) => {
  const { documento } = req.params;

  if (!documento) {
    return res.status(400).json({
      message: "Parametro requerido",
    });
  }
  try {
    const listar = await Cliente.findOne({
      where: { documento: documento },
    });

    if (!listar) {
      return res.status(400).json({
        message: "Cliente no reconocido",
      });
    }

    return res.status(200).json(listar);
  } catch (error) {
    return res.status(500).json({
      message: `SERVER_ERROR:: ${error}`,
    });
  }
};
