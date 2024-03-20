import { userLoginController } from "../controllers/user/userLogin.controller";
import { Router } from "express";
import { verifySchemaMiddleware } from "../middleware/verifySchema.middleware";
import { loginSerializer } from "../serializer/login.serializer";

export const loginRoutes = Router();
loginRoutes.post(
  "",
  verifySchemaMiddleware(loginSerializer),
  userLoginController
);
