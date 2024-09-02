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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductController = exports.updateProductController = exports.listProductsController = exports.createProductController = void 0;
const createProduct_service_1 = require("../../services/products/createProduct.service");
const listProducts_service_1 = require("../../services/products/listProducts.service");
const deleteProduct_service_1 = require("../../services/products/deleteProduct.service");
const updateProduct_service_1 = require("../../services/products/updateProduct.service");
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const userId = req.user.id;
    const product = yield (0, createProduct_service_1.createProductService)(data, userId);
    return res.status(201).json(product);
});
exports.createProductController = createProductController;
const listProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, listProducts_service_1.listProductsService)();
    return res.status(200).json(products);
});
exports.listProductsController = listProductsController;
const updateProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const productId = req.params.id;
    const product = yield (0, updateProduct_service_1.updateProductService)(data, productId);
    return res.status(200).json(product);
});
exports.updateProductController = updateProductController;
const deleteProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    const userId = req.user.id;
    yield (0, deleteProduct_service_1.deleteProductService)(productId);
    return res.status(204).send();
});
exports.deleteProductController = deleteProductController;
//# sourceMappingURL=products.controller.js.map