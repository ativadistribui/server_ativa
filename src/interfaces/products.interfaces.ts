import { Multer } from "multer";

export interface IProducts {
  title: string;
  type: string;
  description: string;
  capacity: string;
  image: Multer.File;
}

export interface IProductsReturned {
  id: string;
  title: string;
  type: string;
  description: string;
  capacity: string;
  updatedAt: Date;
  deletedAt: Date | null;
  registerDate: Date | null;
  isDeleted: boolean;
  userId: string;
  image: string;
}
