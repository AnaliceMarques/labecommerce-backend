import express from "express";
import cors from "cors";
import { getPing } from "./endpoints/getPing";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getSearchProductByName } from "./endpoints/getSearchProductByName";
import { postNewUser } from "./endpoints/postNewUser";
import { postNewPurchase } from "./endpoints/postNewPurchase";
import { postNewProduct } from "./endpoints/postNewProduct";

const app = express();
app.use(express.json());

app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

app.get("/ping", getPing); //teste

app.get("/users", getAllUsers);

app.get("/products", getAllProducts);

app.get("/product/search", getSearchProductByName);

app.post("/users", postNewUser);

app.post("/products", postNewProduct);

app.post("/purchases", postNewPurchase);
