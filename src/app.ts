import express from "express";
import cors from "cors";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllProducts } from "./endpoints/getAllProducts";
import { searchProductByName } from "./endpoints/searchProductByName";
import { createUser } from "./endpoints/createUser";
import { createPurchase } from "./endpoints/createPurchase";
import { createProduct } from "./endpoints/createProduct";
import { getProductById } from "./endpoints/getProductById";
import { getUserPurchasesByUserId } from "./endpoints/getUserPurchasesByUserId";
// import { deleteUserById } from "./endpoints/deleteUserById";
// import { deleteProductById } from "./endpoints/deleteProductById";
// import { editUserById } from "./endpoints/editUserById";
// import { editProductById } from "./endpoints/editProductById";

const app = express();
app.use(express.json());

app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

//Endpoints Users
app.get("/users", getAllUsers);
app.post("/users", createUser);
// app.delete("/users/:id", deleteUserById);
// app.put("/users/:id", editUserById);

//Endpoints Products
app.get("/products", getAllProducts);
app.get("/product/search", searchProductByName);
app.get("/products/:id", getProductById);
app.post("/products", createProduct);
// app.delete("/products/:id", deleteProductById);
// app.put("/products/:id", editProductById);

//Endpoints Purchases
app.post("/purchases", createPurchase);
app.get("/users/:id/purchases", getUserPurchasesByUserId);
