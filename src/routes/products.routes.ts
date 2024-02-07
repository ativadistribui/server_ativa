import { Router } from "express";

import { verifySchemaMiddleware } from "../middleware/verifySchema.middleware";
import {
  createProductController,
  deleteProductController,
  listProductsController,
  updateProductController,
} from "../controllers/products/products.controller";
import { productSerializer } from "../serializer/product.serializer";
// import { handleImageUpload } from "../middleware/handleImageUpload.middleware";
import { ensureAuthMiddleware } from "../middleware/ensureAuth.middleware";
import { verifyProductExistsMiddleware } from "../middleware/verifyProductExists.middleware";

export const productsRoutes = Router();

productsRoutes.post(
  "",
  ensureAuthMiddleware,
  verifySchemaMiddleware(productSerializer),
  createProductController
);

productsRoutes.get("", listProductsController);

productsRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  updateProductController
);

productsRoutes.delete(
  "/:id",
  verifyProductExistsMiddleware,
  ensureAuthMiddleware,
  deleteProductController
);
