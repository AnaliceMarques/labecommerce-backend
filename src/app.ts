import express from "express";
import cors from "cors";
import { getPing } from "./endpoints/getPing";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getSearchProductByName } from "./endpoints/getSearchProductByName";
import { postNewUser } from "./endpoints/postNewUser";
import { postNewPurchase } from "./endpoints/postNewPurchase";
import { postNewProduct } from "./endpoints/postNewProduct";
import { getProductsById } from "./endpoints/getProductsById";
import { getUserPurchasesByUserId } from "./endpoints/getUserPurchasesByUserId";
import { deleteUserById } from "./endpoints/deleteUserById";
import { deleteProductById } from "./endpoints/deleteProductById";
import { putEditUserById } from "./endpoints/putEditUserById";
import { putEditProductById } from "./endpoints/putEditProductById";

const app = express();
app.use(express.json());

app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

app.get("/ping", getPing); //teste

//Users
app.get("/users", getAllUsers); //ok
app.post("/users", postNewUser); //ok
app.delete("/users/:id", deleteUserById); //ok
app.put("/users/:id", putEditUserById); //ok

//Products
app.get("/products", getAllProducts); //ok
app.get("/product/search", getSearchProductByName); //ok
app.get("/products/:id", getProductsById); //ok
app.post("/products", postNewProduct); //falta a verificação do tipo enum
app.delete("/products/:id", deleteProductById); //ok
app.put("/products/:id", putEditProductById); //falta a verificação do enum

//Purchases
app.post("/purchases", postNewPurchase); //ok
app.get("/users/:id/purchases", getUserPurchasesByUserId); //ok
