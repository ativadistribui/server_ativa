"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = require("./routes/user.routes");
const login_routes_1 = require("./routes/login.routes");
const handleError_1 = require("./errors/handleError");
const products_routes_1 = require("./routes/products.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/admin", user_routes_1.userRoutes);
app.use("/login", login_routes_1.loginRoutes);
app.use("/products", products_routes_1.productsRoutes);
app.use(handleError_1.handleError);
exports.default = app;
//# sourceMappingURL=app.js.map