import { IProductsReturned } from "./products.interfaces";

export interface IUser {
  email: string;
  password: string;
}

export interface IUserReturned {
  id: string;
  email: string;
  password: string;
  products: IProductsReturned[] | void;
}
