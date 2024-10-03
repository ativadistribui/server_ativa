"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
const path_1 = __importDefault(require("path"));
const Products_1 = require("./entity/Products");
const setDataSourceConfig = () => {
    const nodeEnv = process.env.NODE_ENV;
    const entities = path_1.default.join(__dirname, "./entities/**.{js,ts}");
    const migrations = path_1.default.join(__dirname, "./migrations/**.{js,ts}");
    if (nodeEnv === "test") {
        return {
            type: "sqlite",
            database: ":memory:",
            entities: [path_1.default.join(__dirname, "./entities/**.{js,ts}")],
            synchronize: true,
        };
    }
    if (nodeEnv === "production") {
        return {
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities: [Products_1.Products, User_1.User],
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
        entities: [entities],
        migrations: [migrations],
    };
};
const dataSourceConfig = setDataSourceConfig();
exports.default = new typeorm_1.DataSource(dataSourceConfig);
//# sourceMappingURL=data-source.js.map