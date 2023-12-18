import moment from "moment";
import { Proyecto, Ubicacion } from "../models/asociacion.js";

// Crear Ubicacion
export const crearUbicacion = async (req, res) => {
  const { distrito, provincia, direccion, altitud, referencia, id_proyecto } =
    req.body;

  if (!distrito || !provincia || !direccion || !altitud || !id_proyecto) {
    return res.status(400).json({
      message: "Hay campos Obligatorios...!",
    });
  }

  if (altitud <= 0) {
    return res.status(400).json({
      message: "La altitud no puede ser menor a 0...!",
    });
  }

  try {
    const existe_proyecto = await Proyecto.findByPk(id_proyecto);

    if (!existe_proyecto) {
      return res.status(400).json({
        message: "El proyecto no es valido en el sistema...!",
      });
    }

    const newData = await Ubicacion.create({
      distrito: distrito.toUpperCase(),
      provincia: provincia.toUpperCase(),
      direccion: direccion.toUpperCase(),
      altitud: altitud,
      referencia: referencia.toUpperCase(),
      id_proyecto: id_proyecto,
      fecha_registro: moment(),
    });

    if (!newData) {
      return res.status(400).json({
        message: "Ocurrio un problema al crear el dato...!",
      });
    }

    return res.status(201).json({
      message: "Ubicacion asignada..!",
    });
  } catch (error) {
    return res.status(500).json({
      message: `SERVER_ERROR:: ${error}`,
    });
  }
};
