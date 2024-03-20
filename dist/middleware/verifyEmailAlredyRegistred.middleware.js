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
exports.verifyEmailAlreadyRegistredMiddleware = void 0;
const User_1 = require("../entity/User");
const appError_1 = require("../errors/appError");
const data_source_1 = __importDefault(require("../data-source"));
const verifyEmailAlreadyRegistredMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const companyRegistred = data_source_1.default.getRepository(User_1.User);
    const company = (yield companyRegistred.findBy({
        email: req.body.email,
    }));
    if (company.length > 0) {
        throw new appError_1.AppError("E-mail já está registrado", 409);
    }
    return next();
});
exports.verifyEmailAlreadyRegistredMiddleware = verifyEmailAlreadyRegistredMiddleware;
//# sourceMappingURL=verifyEmailAlredyRegistred.middleware.js.map