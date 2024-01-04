import { DataTypes } from "sequelize";
import { database } from "../configurations/db.js";

export const Proyecto = database.define(
  "proyectos",
  {
    id_proyecto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    numero_proyecto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    division: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contacto: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_persona: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_termino: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    distrito: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    provincia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altitud: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    referencia: {
      type: DataTypes.STRING,
      allowNull: true,
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
