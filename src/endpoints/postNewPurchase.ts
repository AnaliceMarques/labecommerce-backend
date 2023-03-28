import { Request, Response } from "express";
import { products, purchases } from "../database";
import { TPurchase } from "../types";

export const postNewPurchase = (req: Request, res: Response) => {
  const { userId, productId, quantity } = req.body;

  if (typeof userId !== "string") {
    return res.status(400).send("id tem que ser string");
  }
  if (typeof productId !== "string") {
    return res.status(400).send("id tem que ser string");
  }
  if (typeof quantity !== "number") {
    return res.status(400).send("quantity tem que ser number");
  }

  const product = products.find((product) => product.id === productId);

  const newPurchase: TPurchase = {
    userId,
    productId,
    quantity,
    totalPrice: quantity * product.price,
  };

  purchases.push(newPurchase);

  res.status(201).send("Compra realizada com sucesso");
};
