import { Cliente } from "./cliente.js";
import { Proyecto } from "./proyecto.js";
import { Ubicacion } from "./ubicacion.js";

Proyecto.belongsTo(Cliente, { foreignKey: "id_cliente" });
Cliente.hasMany(Proyecto, { foreignKey: "id_cliente" });

Ubicacion.belongsTo(Proyecto, { foreignKey: "id_proyecto" });
Proyecto.hasMany(Ubicacion, { foreignKey: "id_proyecto" });

export { Cliente, Proyecto, Ubicacion };
