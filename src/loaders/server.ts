import app from './expressLoader'
import { conn } from './db';

const PORT = process.env.PORT || 3001;

// Sincronizar con la base de datos antes de iniciar el servidor
conn.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor iniciado en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });
