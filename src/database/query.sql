-- Active: 1700627637371@@127.0.0.1@3306@db_proyectos_encomarx
CREATE DATABASE IF NOT EXISTS db_proyectos_encomarx;

USE db_proyectos_encomarx;

CREATE TABLE IF NOT EXISTS clientes(
  id_cliente INT AUTO_INCREMENT,
  tipo_documento VARCHAR(50) NOT NULL,
  documento VARCHAR(50) NOT NULL,
  nombre VARCHAR(150) NOT NULL,
  telefono INT NULL,
  fecha_registro DATE NOT NULL,
  PRIMARY KEY(id_cliente)
);

CREATE TABLE IF NOT EXISTS proyectos(
  id_proyecto INT AUTO_INCREMENT,
  numero_proyecto VARCHAR(150) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  division VARCHAR(120) NULL,
  id_cliente INT NOT NULL,
  contacto INT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_termino DATE NOT NULL,
  estado VARCHAR(50) NOT NULL DEFAULT 'PENDIENTE',
  fecha_registro DATE NOT NULL,
  PRIMARY KEY(id_proyecto),
  Foreign Key (id_cliente) REFERENCES clientes(id_cliente)
);

CREATE TABLE IF NOT EXISTS ubicaciones(
  id_ubicacion INT AUTO_INCREMENT,
  distrito VARCHAR(255) NOT NULL,
  provincia VARCHAR(255) NOT NULL,
  direccion VARCHAR(255) NOT NULL,
  altitud INT NOT NULL,
  referencia TEXT NULL,
  id_proyecto INT NOT NULL,
  fecha_registro DATE,
  PRIMARY KEY(id_ubicacion),
  Foreign Key (id_proyecto) REFERENCES proyectos(id_proyecto)
);