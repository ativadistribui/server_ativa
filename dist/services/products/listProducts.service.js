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
exports.listProductsService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const Products_1 = require("../../entity/Products");
const listProductsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const productRepo = data_source_1.default.getRepository(Products_1.Products);
    const product = yield productRepo.find();
    const arrProduct = [];
    product.forEach((product) => {
        arrProduct.push(product);
    });
    return arrProduct;
});
exports.listProductsService = listProductsService;
//# sourceMappingURL=listProducts.service.js.map