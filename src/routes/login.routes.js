"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
const userLogin_controller_1 = require("../controllers/user/userLogin.controller");
const express_1 = require("express");
const verifySchema_middleware_1 = require("../middleware/verifySchema.middleware");
const login_serializer_1 = require("../serializer/login.serializer");
exports.loginRoutes = (0, express_1.Router)();
exports.loginRoutes.post("", (0, verifySchema_middleware_1.verifySchemaMiddleware)(login_serializer_1.loginSerializer), userLogin_controller_1.userLoginController);
//# sourceMappingURL=login.routes.js.map