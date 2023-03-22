import {
  users,
  products,
  purchases,
  createUser,
  getAllUsers,
  createProduct,
  getAllProducts,
  getProductById,
  queryProductsByName,
  createPurchase,
  getAllPurchasesFromUserId,
} from "./database";
import { PRODUCT_CATEGORY } from "./types";

// console.log(users);
// console.log(products);
// console.log(purchases);

console.log("--------Create User--------\n");
console.log(createUser("04", "usuario4", "usuario4@gmail.com"));
console.log(createUser("01", "analice", "analice@gmail.com"));
console.log(createUser("05", "analice", "usuario1@gmail.com"));
console.log(createUser("05", "usuario5", "usuario5@gmail.com"));

console.log("\n--------Ger All Users--------\n");
console.log(getAllUsers());

console.log("\n--------Create Product--------\n");
console.log(createProduct("05", "produto5", 50, PRODUCT_CATEGORY.CATEGORY1));
console.log(createProduct("01", "produto5", 50, PRODUCT_CATEGORY.CATEGORY1));
console.log(createProduct("1", "produto1", 10, PRODUCT_CATEGORY.CATEGORY1));

console.log("\n--------Get All Product--------\n");
console.log(getAllProducts());

console.log("\n--------Get Product By Id--------\n");
console.log(getProductById("01"));
console.log(getProductById("00"));

console.log("\n--------Query Products By Name--------\n");
console.log(queryProductsByName("1"));
console.log(queryProductsByName(""));
console.log(queryProductsByName("20"));

console.log("\n--------Create Purchase--------\n");
console.log(createPurchase("01", "01", 10, 100));
console.log(createPurchase("10", "01", 10, 100));
console.log(createPurchase("01", "10", 10, 100));
console.log(createPurchase("10", "10", 10, 100));

console.log("\n--------Get All Purchases From UserId--------\n");
getAllPurchasesFromUserId("01");
getAllPurchasesFromUserId("04");
getAllPurchasesFromUserId("20");
