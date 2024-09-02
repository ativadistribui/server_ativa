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
exports.verifyProductExistsMiddleware = void 0;
const appError_1 = require("../errors/appError");
const data_source_1 = __importDefault(require("../data-source"));
const Products_1 = require("../entity/Products");
const verifyProductExistsMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepo = data_source_1.default.getRepository(Products_1.Products);
    const currentProduct = yield productRepo.findOneBy({
        id: req.params.id,
    });
    if (!currentProduct) {
        throw new appError_1.AppError("Produto não encontrado", 404);
    }
    return next();
});
exports.verifyProductExistsMiddleware = verifyProductExistsMiddleware;
//# sourceMappingURL=verifyProductExists.middleware.js.map