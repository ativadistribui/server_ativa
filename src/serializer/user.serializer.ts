import * as yup from "yup";
import { IUser, IUserReturned } from "../interfaces/user.interfaces";
import { productReturnSerializer } from "./product.serializer";

export const userCreateSerializer: yup.ObjectSchema<IUser> = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8, "A senha deve conter ao minimo 8 caracteres")
      .required(),
  });

export const userCreateReturnedSerializer: yup.ObjectSchema<IUserReturned> =
  yup.object({
    id: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    products: yup.array(),
  });
