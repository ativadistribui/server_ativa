import AppDataSource from "../../data-source";
import { Products } from "../../entity/Products";
import { IProductsReturned } from "../../interfaces/products.interfaces";

export const listProductsService = async (): Promise<IProductsReturned[]> => {
  const productRepo = AppDataSource.getRepository(Products);
  const product = await productRepo.find();

  const arrProduct = [];

  product.forEach((product) => {
    arrProduct.push(product);
  });

  return arrProduct;
};
