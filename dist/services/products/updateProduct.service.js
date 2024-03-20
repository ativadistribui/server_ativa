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
exports.updateProductService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const Products_1 = require("../../entity/Products");
const product_serializer_1 = require("../../serializer/product.serializer");
const updateProductService = (data, productId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g;
    const productRepo = data_source_1.default.getRepository(Products_1.Products);
    const findProduct = yield productRepo.findOne({
        where: { id: productId },
    });
    const updateProduct = productRepo.merge(findProduct, {
        title: (_a = data.title) !== null && _a !== void 0 ? _a : findProduct.title,
        type: (_b = data.type) !== null && _b !== void 0 ? _b : findProduct.type,
        description: (_c = data.description) !== null && _c !== void 0 ? _c : findProduct.description,
        capacity: (_d = data.capacity) !== null && _d !== void 0 ? _d : findProduct.capacity,
        isFiled: (_e = data.isFiled) !== null && _e !== void 0 ? _e : findProduct.isFiled,
        specificity: (_f = data.specificity) !== null && _f !== void 0 ? _f : findProduct.specificity,
        image: (_g = data.image) !== null && _g !== void 0 ? _g : findProduct.image,
    });
    yield productRepo.save(updateProduct);
    const productReturned = (yield product_serializer_1.productReturnSerializer.validate(updateProduct, {
        stripUnknown: true,
    }));
    return productReturned;
});
exports.updateProductService = updateProductService;
//# sourceMappingURL=updateProduct.service.js.map