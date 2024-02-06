import { Request, Response } from "express";
import { createProductService } from "../../services/products/createProduct.service";
import { listProductsService } from "../../services/products/listProducts.service";
import { deleteProductService } from "../../services/products/deleteProduct.service";
import { updateProductService } from "../../services/products/updateProduct.service";

export const createProductController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;
  const userId = req.user.id;
  const product = await createProductService(data, userId, req.file);

  return res.status(201).json(product);
};

export const listProductsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const products = await listProductsService();

  return res.status(200).json(products);
};

export const updateProductController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;
  const productId = req.params.id;

  const product = await updateProductService(data, productId, req.file);

  return res.status(200).json(product);
};

export const deleteProductController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const productId: string = req.params.id;
  const userId = req.user.id;

  await deleteProductService(productId);

  return res.status(204).send();
};
