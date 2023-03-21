import { TUser, TProduct, TPurchase } from "./types";

export const users: TUser[] = [
  {
    id: "01",
    email: "usuario1@gmail.com",
    password: "123456",
  },
  {
    id: "02",
    email: "usuario2@gmail.com",
    password: "abc123",
  },
  {
    id: "03",
    email: "usuario3@gmail.com",
    password: "abcdef",
  },
];

export const products: TProduct[] = [
  {
    id: "01",
    name: "produto1",
    price: 10,
    category: "categoria1",
  },
  {
    id: "02",
    name: "produto2",
    price: 20,
    category: "categoria2",
  },
  {
    id: "03",
    name: "produto3",
    price: 30,
    category: "categoria3",
  },
  {
    id: "04",
    name: "produto4",
    price: 40,
    category: "categoria4",
  },
];

export const purchases: TPurchase[] = [
  {
    userId: users[0].id,
    productId: products[0].id,
    quantity: 2,
    totalPrice: products[0].price * 2,
  },
  {
    userId: users[1].id,
    productId: products[1].id,
    quantity: 2,
    totalPrice: products[1].price * 2,
  },
  {
    userId: users[2].id,
    productId: products[2].id,
    quantity: 2,
    totalPrice: products[2].price * 2,
  },
  {
    userId: users[2].id,
    productId: products[3].id,
    quantity: 1,
    totalPrice: products[3].price * 1,
  },
];
