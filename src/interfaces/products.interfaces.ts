export interface IProducts {
  title: string;
  type: string;
  description: string;
  specificity: string;
  capacity: string[];
  image: string;
  isFiled: boolean;
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
