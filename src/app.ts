import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import { userRoutes } from "./routes/user.routes";
import { loginRoutes } from "./routes/login.routes";
import { handleError } from "./errors/handleError";
import { productsRoutes } from "./routes/products.routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/admin", userRoutes);
app.use("/login", loginRoutes);
app.use("/products", productsRoutes);
app.use(handleError);

export default app;
