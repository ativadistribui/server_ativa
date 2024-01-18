import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import AppDataSource from "../data-source";
import { Products } from "../entity/Products";

export const verifyProductExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const productRepo = AppDataSource.getRepository(Products);

  const currentProduct = await productRepo.findOneBy({
    id: req.params.id,
  });
  if (!currentProduct) {
    throw new AppError("Produto não encontrado", 404);
  }

  return next();
};
