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
exports.createProductService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const User_1 = require("../../entity/User");
const Products_1 = require("../../entity/Products");
const product_serializer_1 = require("../../serializer/product.serializer");
const createProductService = (data, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = data_source_1.default.getRepository(User_1.User);
    const productsRepo = data_source_1.default.getRepository(Products_1.Products);
    const findUser = yield userRepo.findOneBy({
        id: userId,
    });
    const product = productsRepo.create(Object.assign(Object.assign({}, data), { userId: findUser.id }));
    yield productsRepo.save(product);
    const productSerialized = (yield product_serializer_1.productReturnSerializer.validate(product, {
        stripUnknown: true,
    }));
    return productSerialized;
});
exports.createProductService = createProductService;
//# sourceMappingURL=createProduct.service.js.map