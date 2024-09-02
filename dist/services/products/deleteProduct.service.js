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
exports.deleteProductService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const Products_1 = require("../../entity/Products");
const appError_1 = require("../../errors/appError");
const deleteProductService = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepo = data_source_1.default.getRepository(Products_1.Products);
    const currentProduct = yield productRepo.findOne({
        where: { id: productId },
    });
    if (!currentProduct.isFiled) {
        throw new appError_1.AppError("Produto precisa ser arquivado antes de poder ser deletado", 400);
    }
    if (currentProduct.isDeleted) {
        throw new appError_1.AppError("Produto precisa estar ativo para ser deletado.", 400);
    }
    yield productRepo.softDelete(productId);
    yield productRepo.save({
        id: currentProduct.id,
        isDeleted: true,
        updatedAt: new Date(),
    });
    return;
});
exports.deleteProductService = deleteProductService;
//# sourceMappingURL=deleteProduct.service.js.map