import * as yup from "yup";
import {
  IProducts,
  IProductsReturned,
} from "../interfaces/products.interfaces";
// import { Multer } from "multer";

export const productSerializer: yup.ObjectSchema<IProducts> = yup
  .object()
  .shape({
    title: yup.string().required(),
    type: yup.string().required(),
    description: yup.string().required(),
    capacity: yup.array().required(),
    specificity: yup.string().required(),
    image: yup.string().required(),
    // image: yup
    //   .mixed()
    //   .required("Imagem é obrigatória")
    //   .test("isFile", "Apenas arquivos de imagem são permitidos", (value) => {
    //     return value && typeof value === "object" && "fieldname" in value;
    //   }),
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
