import { DataTypes } from "sequelize";
import { database } from "../configurations/db.js";

export const Cliente = database.define(
  "personas",
  {
    id_persona: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo_documento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
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
