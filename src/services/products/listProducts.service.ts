import AppDataSource from "../../data-source";
import { Products } from "../../entity/Products";
import {
  IProducts,
  IProductsReturned,
} from "../../interfaces/products.interfaces";

export const listProductsService = async (
  userId: string
): Promise<IProductsReturned[]> => {
  const productRepo = AppDataSource.getRepository(Products);
  const product = await productRepo.find();

  const arrProduct = [];

  product.forEach((product) => {
    arrProduct.push(product);
  });

  return arrProduct;
};
