import * as yup from "yup";
import {
  IProducts,
  IProductsReturned,
} from "../interfaces/products.interfaces";

export const productSerializer: yup.ObjectSchema<IProducts> = yup
  .object()
  .shape({
    title: yup.string().required(),
    type: yup.string().required(),
    description: yup.string().required(),
    capacity: yup.array().required(),
    specificity: yup.string().required(),
    isFiled: yup.boolean().notRequired(),
    image: yup.string().required(),
  });

export const productReturnSerializer: yup.ObjectSchema<IProductsReturned> =
  yup.object({
    id: yup.string().required(),
    title: yup.string(),
    type: yup.string(),
    description: yup.string(),
    capacity: yup.array(),
    isFiled: yup.boolean(),
    specificity: yup.string(),
    updatedAt: yup.date(),
    deletedAt: yup.date().nullable(),
    registerDate: yup.date(),
    isDeleted: yup.boolean(),
    userId: yup.string(),
    image: yup.string(),
  });
