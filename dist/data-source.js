"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
const Products_1 = require("./entity/Products");
const setDataSourceConfig = () => {
    const nodeEnv = process.env.NODE_ENV;
    if (nodeEnv === "test") {
        return {
            type: "sqlite",
            database: ":memory:",
            entities: [Products_1.Products, User_1.User],
            synchronize: true,
        };
    }
    if (nodeEnv === "production") {
        return {
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities: [Products_1.Products, User_1.User],
            migrations: ["src/migrations/**.{js,ts}"],
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
        entities: [Products_1.Products, User_1.User],
        migrations: ["src/migrations/**.{js,ts}"],
    };
};
const dataSourceConfig = setDataSourceConfig();
exports.default = new typeorm_1.DataSource(dataSourceConfig);
//# sourceMappingURL=data-source.js.map