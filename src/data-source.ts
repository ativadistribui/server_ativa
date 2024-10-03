import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./entity/User";
import path from "path";
import { Products } from "./entity/Products";

const setDataSourceConfig = (): DataSourceOptions => {
  const nodeEnv: string = process.env.NODE_ENV;
 
  const migrations: string = path.join(__dirname, "./migrations/**.{js,ts}");

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      entities: [path.join(__dirname, "./entities/**.{js,ts}")],
      synchronize: true,
    };
  }

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [Products, User],
      migrations: [migrations],
    };
  }

  return {
    type: "postgres",
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: parseInt(process.env.PGPORT),
    synchronize: false,
    logging: false,
    entities: [User, Products],
    migrations: [migrations],
  };
};

const dataSourceConfig = setDataSourceConfig();
export default new DataSource(dataSourceConfig);
