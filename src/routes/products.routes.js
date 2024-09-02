"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = require("express");
const verifySchema_middleware_1 = require("../middleware/verifySchema.middleware");
const products_controller_1 = require("../controllers/products/products.controller");
const product_serializer_1 = require("../serializer/product.serializer");
const ensureAuth_middleware_1 = require("../middleware/ensureAuth.middleware");
const verifyProductExists_middleware_1 = require("../middleware/verifyProductExists.middleware");
exports.productsRoutes = (0, express_1.Router)();
exports.productsRoutes.post("", ensureAuth_middleware_1.ensureAuthMiddleware, (0, verifySchema_middleware_1.verifySchemaMiddleware)(product_serializer_1.productSerializer), products_controller_1.createProductController);
exports.productsRoutes.get("", products_controller_1.listProductsController);
exports.productsRoutes.patch("/:id", ensureAuth_middleware_1.ensureAuthMiddleware, products_controller_1.updateProductController);
exports.productsRoutes.delete("/:id", verifyProductExists_middleware_1.verifyProductExistsMiddleware, ensureAuth_middleware_1.ensureAuthMiddleware, products_controller_1.deleteProductController);
//# sourceMappingURL=products.routes.js.map