import { Usuario } from "./usuario.js";
import { Cliente } from "./cliente.js";
import { Proyecto } from "./proyecto.js";
import { Administracion } from "./administracion.js";

Proyecto.belongsTo(Cliente, { foreignKey: "id_persona" });
Cliente.hasMany(Proyecto, { foreignKey: "id_persona" });

Administracion.belongsTo(Proyecto, { foreignKey: "id_proyecto" });
Proyecto.hasMany(Administracion, { foreignKey: "id_proyecto" });

Administracion.belongsTo(Cliente, { as: "Gerente", foreignKey: "id_gerente" });
Cliente.hasMany(Administracion, { foreignKey: "id_gerente", as: "Gerente" });

Administracion.belongsTo(Cliente, {
  as: "Residente",
  foreignKey: "id_residente",
});
Cliente.hasMany(Administracion, {
  foreignKey: "id_residente",
  as: "Residente",
});

Administracion.belongsTo(Cliente, { as: "Jefe", foreignKey: "id_jefe" });
Cliente.hasMany(Administracion, { foreignKey: "id_jefe", as: "Jefe" });

export { Usuario, Cliente, Proyecto, Administracion };
