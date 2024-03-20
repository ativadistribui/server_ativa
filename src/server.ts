import app from "./app";
import AppDataSource from "./data-source";

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connected.");

    app.listen(3000, () => {
      console.log(`Servidor executando`);
    });
  })
  .catch((err) => console.error(err));
