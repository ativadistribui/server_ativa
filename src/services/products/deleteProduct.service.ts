import AppDataSource from "../../data-source";
import { Products } from "../../entity/Products";
import { AppError } from "../../errors/appError";
import { IProductsReturned } from "../../interfaces/products.interfaces";

export const deleteProductService = async (productId): Promise<void> => {
  console.log("aqui");
  const productRepo = AppDataSource.getRepository(Products);

  const currentProduct: IProductsReturned | undefined =
    await productRepo.findOne({
      where: { id: productId },
    });

  if (currentProduct.isDeleted) {
    throw new AppError("Produto precisa estar ativo para ser deletado.", 400);
  }

  await productRepo.softDelete(productId);

  await productRepo.save({
    id: currentProduct.id,
    isDeleted: true,
    updatedAt: new Date(),
  });

  return;
};