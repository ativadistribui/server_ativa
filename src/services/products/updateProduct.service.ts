import AppDataSource from "../../data-source";
import { Products } from "../../entity/Products";
import {
  IProducts,
  IProductsReturned,
} from "../../interfaces/products.interfaces";
import { productReturnSerializer } from "../../serializer/product.serializer";

export const updateProductService = async (
  data: Partial<IProducts>,
  productId
): Promise<IProductsReturned> => {
  const productRepo = AppDataSource.getRepository(Products);

  const findProduct: IProductsReturned | undefined = await productRepo.findOne({
    where: { id: productId },
  });

  const updateProduct = productRepo.merge(findProduct, {
    title: data.title ?? findProduct.title,
    type: data.type ?? findProduct.type,
    description: data.description ?? findProduct.description,
    capacity: data.capacity ?? findProduct.capacity,
    isFiled: data.isFiled ?? findProduct.isFiled,
    specificity: data.specificity ?? findProduct.specificity,
    image: data.image ?? findProduct.image,
  });

  await productRepo.save(updateProduct);

  const productReturned = (await productReturnSerializer.validate(
    updateProduct,
    {
      stripUnknown: true,
    }
  )) as IProductsReturned;

  return productReturned;
};
