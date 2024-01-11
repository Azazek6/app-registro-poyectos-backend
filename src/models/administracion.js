import { DataTypes } from "sequelize";
import { database } from "../configurations/db.js";

export const Administracion = database.define(
  "administraciones",
  {
    id_administracion: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_proyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_gerente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_residente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_jefe: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_administrador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_sisme: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_mecanico: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comentarios: {
      type: DataTypes.TEXT,
      allowNull: false,
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
