import { Request, Response } from "express";
import { products } from "../database";
import { TProduct } from "../types";

//POST create Product
export const postNewProduct = (req: Request, res: Response) => {
  const { id, name, price, category } = req.body;

  if (typeof id !== "string") {
    return res.status(400).send("id tem que ser string");
  }
  if (typeof name !== "string") {
    return res.status(400).send("name tem que ser string");
  }
  if (typeof price !== "number") {
    return res.status(400).send("password tem que ser string");
  }

  const newProduct: TProduct = {
    id,
    name,
    price,
    category,
  };

  products.push(newProduct);

  res.status(200).send("Produto cadastrado com sucesso");
};
