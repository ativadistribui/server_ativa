import AppDataSource from "../../data-source";
import { User } from "../../entity/User";
import { Products } from "../../entity/Products";
import {
  IProducts,
  IProductsReturned,
} from "../../interfaces/products.interfaces";
import { productReturnSerializer } from "../../serializer/product.serializer";

export const createProductService = async (
  data: IProducts,
  userId: string,
): Promise<IProductsReturned> => {
  const userRepo = AppDataSource.getRepository(User);
  const productsRepo = AppDataSource.getRepository(Products);

  const findUser = await userRepo.findOneBy({
    id: userId,
  });

  const product = productsRepo.create({
    ...data,
    userId: findUser.id,
  });

  await productsRepo.save(product);

  const productSerialized = (await productReturnSerializer.validate(product, {
    stripUnknown: true,
  })) as IProductsReturned;

  return productSerialized;
};
