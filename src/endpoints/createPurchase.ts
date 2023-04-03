import { Request, Response } from "express";
import { products, purchases, users } from "../database";
import { TProduct, TPurchase, TUser } from "../types";

export const createPurchase = (req: Request, res: Response) => {
  try {
    const { userId, productId, quantity } = req.body;

    if (typeof userId !== "string") {
      res.status(400);
      throw new Error("'id' tem que ser string");
    }
    if (typeof productId !== "string") {
      res.status(400);
      throw new Error("'id' tem que ser string");
    }
    if (typeof quantity !== "number") {
      res.status(400);
      throw new Error("'quantity' tem que ser number");
    }

    const userFound: TUser | undefined = users.find(
      (user) => user.id === userId
    );

    if (!userFound) {
      res.status(400);
      throw new Error("Usuário não cadastrado");
    }
    const productFound: TProduct | undefined = products.find(
      (product) => product.id === productId
    );

    if (!productFound) {
      res.status(400);
      throw new Error("Produto não cadastrado");
    }

    const newPurchase: TPurchase = {
      userId,
      productId,
      quantity,
      totalPrice: quantity * productFound.price,
    };

    purchases.push(newPurchase);

    res.status(201).send("Compra realizada com sucesso");
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
