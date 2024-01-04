import { Usuario } from "./usuario.js";
import { Cliente } from "./cliente.js";
import { Proyecto } from "./proyecto.js";

Proyecto.belongsTo(Cliente, { foreignKey: "id_cliente" });
Cliente.hasMany(Proyecto, { foreignKey: "id_cliente" });

export { Usuario, Cliente, Proyecto };
