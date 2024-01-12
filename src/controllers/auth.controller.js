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

    const dataToken = {
      id_usuario: newUser.id_usuario,
      nombre: newUser.nombres,
      apellidos: newUser.apellidos,
      usuario: newUser.usuario,
    };

    const token = jwt.sign(dataToken, "sddecomx");

    return res.status(201).json({
      message: "Credenciales correctas......!",
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `SERVER_ERROR:: ${error}`,
    });
  }
};
