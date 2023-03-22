export enum PRODUCT_CATEGORY {
  CATEGORY1 = "Categoria 1",
  CATEGORY2 = "Categoria 2",
  CATEGORY3 = "Categoria 3",
}

export type TUser = {
  id: string;
  email: string;
  password: string;
};

export type TProduct = {
  id: string;
  name: string;
  price: number;
  category: PRODUCT_CATEGORY;
};

export type TPurchase = {
  userId: string;
  productId: string;
  quantity: number;
  totalPrice: number;
};
