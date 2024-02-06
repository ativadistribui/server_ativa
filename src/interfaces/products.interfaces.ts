import { Multer } from "multer";

export interface IProducts {
  title: string;
  type: string;
  description: string;
  specificity: string;
  capacity: string[];
  image: Multer.File;
}

export interface IProductsReturned {
  id: string;
  title: string;
  type: string;
  description: string;
  capacity: string[];
  specificity: string;
  isFiled: boolean;
  updatedAt: Date;
  deletedAt: Date | null;
  registerDate: Date | null;
  isDeleted: boolean;
  userId: string;
  image: string;
}
