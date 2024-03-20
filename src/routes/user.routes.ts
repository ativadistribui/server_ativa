import { Router } from "express";
import { createUserController } from "../controllers/user/userCreate.controller";
import { userCreateSerializer } from "../serializer/user.serializer";
import { verifySchemaMiddleware } from "../middleware/verifySchema.middleware";
import { verifyEmailAlreadyRegistredMiddleware } from "../middleware/verifyEmailAlredyRegistred.middleware";

export const userRoutes = Router();
userRoutes.post(
  "",
  verifyEmailAlreadyRegistredMiddleware,
  verifySchemaMiddleware(userCreateSerializer),
  createUserController
);
