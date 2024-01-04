import { DataTypes } from "sequelize";
import { database } from "../configurations/db.js";

export const Usuario = database.define(
  "usuarios",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fecha_registro: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
