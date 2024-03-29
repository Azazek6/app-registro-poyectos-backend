-- Active: 1700627637371@@127.0.0.1@3306@db_proyectos_encomarx
CREATE DATABASE IF NOT EXISTS db_proyectos_encomarx;

USE db_proyectos_encomarx;

CREATE TABLE IF NOT EXISTS usuarios(
  id_usuario INT AUTO_INCREMENT,
  nombres VARCHAR(150) NOT NULL,
  apellidos VARCHAR(200) NOT NULL,
  usuario VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  estado INT NOT NULL DEFAULT 1,
  fecha_registro DATE NOT NULL,
  PRIMARY KEY(id_usuario)
);

CREATE TABLE IF NOT EXISTS personas(
  id_persona INT AUTO_INCREMENT,
  tipo_documento VARCHAR(50) NOT NULL,
  documento VARCHAR(50) NOT NULL,
  nombre VARCHAR(150) NOT NULL,
  rol VARCHAR(150) NOT NULL,
  telefono INT NULL,
  fecha_registro DATE NOT NULL,
  PRIMARY KEY(id_persona)
);

CREATE TABLE IF NOT EXISTS proyectos(
  id_proyecto INT AUTO_INCREMENT,
  numero_proyecto VARCHAR(150) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  division VARCHAR(120) NULL,
  id_persona INT NOT NULL,
  contacto INT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_termino DATE NOT NULL,
  distrito VARCHAR(255) NOT NULL,
  provincia VARCHAR(255) NOT NULL,
  direccion VARCHAR(255) NOT NULL,
  altitud INT NOT NULL,
  referencia TEXT NULL,
  estado VARCHAR(50) NOT NULL DEFAULT 'PENDIENTE',
  fecha_registro DATE NOT NULL,
  PRIMARY KEY(id_proyecto),
  Foreign Key (id_persona) REFERENCES personas(id_persona)
);

CREATE TABLE IF NOT EXISTS administraciones(
  id_administracion INT AUTO_INCREMENT,
  id_proyecto INT NOT NULL,
  id_gerente INT NOT NULL,
  id_residente INT NOT NULL,
  id_jefe INT NOT NULL,
  id_administrador INT NOT NULL,
  id_sisme INT NULL DEFAULT NULL,
  id_mecanico INT NULL DEFAULT NULL,
  telefono INT NOT NULL,
  comentarios TEXT NOT NULL,
  estado VARCHAR(50) NOT NULL DEFAULT 'ACTIVADO',
  fecha_registro DATE NOT NULL,
  PRIMARY KEY(id_administracion),
  Foreign Key (id_proyecto) REFERENCES proyectos(id_proyecto),
  Foreign Key (id_gerente) REFERENCES personas(id_persona),
  Foreign Key (id_residente) REFERENCES personas(id_persona),
  Foreign Key (id_jefe) REFERENCES personas(id_persona),
  Foreign Key (id_administrador) REFERENCES personas(id_persona),
  Foreign Key (id_sisme) REFERENCES personas(id_persona),
  Foreign Key (id_mecanico) REFERENCES personas(id_persona)
);