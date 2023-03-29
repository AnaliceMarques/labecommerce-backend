import { Request, Response } from "express";
import { products } from "../database";
import { PRODUCT_CATEGORY, TProduct } from "../types";

export const putEditProductById = (req: Request, res: Response) => {
  const id = req.params.id;

  const productToEdid: TProduct = products.find((product) => product.id === id);

  if (!productToEdid) {
    return res.status(400).send("produto não cadastrado");
  }

  const newName = req.body.name as string | undefined;
  const newPrice = req.body.price as number | undefined;
  const newCategory = req.body.category as PRODUCT_CATEGORY | undefined;

  productToEdid.name = newName || productToEdid.name;
  productToEdid.price = isNaN(newPrice) ? productToEdid.price : newPrice;
  productToEdid.category = newCategory || productToEdid.category;

  res.status(200).send({ mensage: "Produto atualizado com sucesso" });
};
