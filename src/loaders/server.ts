import expressLoader from './expressLoader';
import dbLoader from './dbLoader';

const PORT = process.env.PORT || 3001;

const app = expressLoader();

// Sincronizar con la base de datos antes de iniciar el servidor
dbLoader.conn.sync({ force: false })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor iniciado en el puerto ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error al sincronizar la base de datos:", error);
    });