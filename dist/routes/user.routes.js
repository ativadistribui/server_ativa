"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const userCreate_controller_1 = require("../controllers/user/userCreate.controller");
const user_serializer_1 = require("../serializer/user.serializer");
const verifySchema_middleware_1 = require("../middleware/verifySchema.middleware");
const verifyEmailAlredyRegistred_middleware_1 = require("../middleware/verifyEmailAlredyRegistred.middleware");
exports.userRoutes = (0, express_1.Router)();
exports.userRoutes.post("", verifyEmailAlredyRegistred_middleware_1.verifyEmailAlreadyRegistredMiddleware, (0, verifySchema_middleware_1.verifySchemaMiddleware)(user_serializer_1.userCreateSerializer), userCreate_controller_1.createUserController);
//# sourceMappingURL=user.routes.js.map