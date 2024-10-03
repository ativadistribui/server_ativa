"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const User_1 = require("../../entity/User");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const bcryptjs_1 = require("bcryptjs");
const appError_1 = require("../../errors/appError");
const userLoginService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, password, }) {
    const userRepo = data_source_1.default.getRepository(User_1.User);
    const user = yield userRepo.findOneBy({ email });
    if (!user) {
        throw new appError_1.AppError("Email ou senha incorretos", 403);
    }
    const passwordExists = yield (0, bcryptjs_1.compare)(password, user.password);
    if (!passwordExists) {
        throw new appError_1.AppError("Email ou senha incorretos", 403);
    }
    const token = jsonwebtoken_1.default.sign({
        id: user.id,
    }, String(process.env.SECRET_KEY), {
        subject: user.id,
        expiresIn: "24h",
    });
    return [200, token];
});
exports.userLoginService = userLoginService;
//# sourceMappingURL=userLogin.service.js.map