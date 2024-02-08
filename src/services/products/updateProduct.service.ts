import AppDataSource from "../../data-source";
import { Products } from "../../entity/Products";
import {
  IProducts,
  IProductsReturned,
} from "../../interfaces/products.interfaces";
import { productReturnSerializer } from "../../serializer/product.serializer";
// import { Multer } from "multer";

export const updateProductService = async (
  data: Partial<IProducts>,
  productId
): Promise<IProductsReturned> => {
  const productRepo = AppDataSource.getRepository(Products);

  const findProduct: IProductsReturned | undefined = await productRepo.findOne({
    where: { id: productId },
  });
  console.log(findProduct, "produto");
  console.log(data, "corpo da requisição");

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

  console.log(updateProduct, "produto atualizado");

  return productReturned;
};
