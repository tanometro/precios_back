"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expressLoader_1 = __importDefault(require("./expressLoader"));
const dbLoader_1 = __importDefault(require("./dbLoader"));
const PORT = process.env.PORT || 3001;
const app = (0, expressLoader_1.default)();
// Sincronizar con la base de datos antes de iniciar el servidor
dbLoader_1.default.conn.sync({ force: false })
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor iniciado en el puerto ${PORT}`);
    });
})
    .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
});
