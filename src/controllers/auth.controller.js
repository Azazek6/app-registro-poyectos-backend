import jwt from "jsonwebtoken";
import { Usuario } from "../models/asociacion.js";

export const signIn = async (req, res) => {
  const { usuario, password } = req.body;

  if (!usuario || !password) {
    return res.status(400).json({
      message: "Campos obligatorios...!",
    });
  }

  try {
    const newUser = await Usuario.findOne({
      where: { usuario: usuario },
    });

    if (!newUser) {
      return res.status(400).json({
        message: "Credenciales no encontradas o no validas...!",
      });
    }

    if (password != newUser.password) {
      return res.status(400).json({
        message: "Contraseña incorrecta...!",
      });
    }

    const token = jwt.sign(newUser, "registrosECOMARX2024");

    return res.status(201).json({
      message: "Credenciales correctas......!",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      message: `SERVER_ERROR:: ${error}`,
    });
  }
};
