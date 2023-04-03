import { Request, Response } from "express";
import { products } from "../database";
import { PRODUCT_CATEGORY, TProduct } from "../types";

export const createProduct = (req: Request, res: Response) => {
  try {
    const { id, name, price, category } = req.body;

    if (typeof id !== "string") {
      res.status(400);
      throw new Error("'id' tem que ser string");
    }

    if (typeof name !== "string") {
      res.status(400);
      throw new Error("'name' tem que ser string");
    }

    if (typeof price !== "number") {
      res.status(400);
      throw new Error("'password' tem que ser string");
    }

    if (
      category !== PRODUCT_CATEGORY.CATEGORY1 &&
      category !== PRODUCT_CATEGORY.CATEGORY2 &&
      category !== PRODUCT_CATEGORY.CATEGORY3
    ) {
      res.status(400);
      throw new Error("'category' precisa ter um dos valores válidos");
    }

    const productIdFound = products.find((product) => product.id === id);

    if (productIdFound) {
      res.status(400);
      throw new Error("'id' já cadastrado");
    }

    const newProduct: TProduct = {
      id,
      name,
      price,
      category,
    };

    products.push(newProduct);

    res.status(201).send("Produto cadastrado com sucesso");
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
};
