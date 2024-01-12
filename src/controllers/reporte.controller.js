import { Proyecto, Administracion, Cliente } from "../models/asociacion.js";

export const listReporteProyectos = async (req, res) => {
  try {
    const list = await Administracion.findAll({
      attributes: ["id_administracion", "fecha_registro"],
      include: [
        {
          attributes: [
            ["numero_proyecto", "codigo"],
            "nombre",
            "fecha_inicio",
            "fecha_termino",
          ],
          model: Proyecto,
          include: {
            attributes: ["documento", "nombre"],
            model: Cliente,
            where: {
              rol: "CLIENTE",
            },
          },
        },
        {
          attributes: ["documento", "nombre"],
          model: Cliente,
          as: "Gerente",
          foreignKey: "id_gerente",
        },
        {
          attributes: ["documento", "nombre"],
          model: Cliente,
          as: "Residente",
          foreignKey: "id_residente",
        },
        {
          attributes: ["documento", "nombre"],
          model: Cliente,
          as: "Jefe",
          foreignKey: "id_jefe",
        },
      ],
    });

    return res.status(200).json(list);
  } catch (error) {
    return res.status(500).json({
      message: `SERVER_ERROR:: ${error}`,
    });
  }
};
