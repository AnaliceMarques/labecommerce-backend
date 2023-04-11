import { Request, Response } from "express";
import { db } from "../database/knex";
import { TPurchase } from "../types";

export const createPurchase = async (req: Request, res: Response) => {
  try {
    const { id, buyer, total_price } = req.body;

    if (!id.length) {
      res.status(400);
      throw new Error("'id' não deve estar vazio");
    }

    if (!buyer.length) {
      res.status(400);
      throw new Error("'id' não deve estar vazio");
    }

    if (total_price < 0) {
      res.status(400);
      throw new Error("'totalPrice' não pode ser negativo");
    }

    if (typeof id !== "string") {
      res.status(400);
      throw new Error("'id' tem que ser string");
    }
    if (typeof buyer !== "string") {
      res.status(400);
      throw new Error("'buyer' tem que ser string");
    }
    if (typeof total_price !== "number") {
      res.status(400);
      throw new Error("'totalPrice' tem que ser number");
    }

    const [buyerFound] = await db.raw(`
    SELECT * FROM users
    WHERE id = "${buyer}";
    `);

    if (!buyerFound) {
      res.status(400);
      throw new Error("Usuário não cadastrado");
    }

    const newPurchase: TPurchase = {
      id,
      buyer,
      total_price,
    };

    await db.raw(`
    INSERT INTO purchases (id, buyer, total_price)
    VALUES ("${newPurchase.id}", "${newPurchase.buyer}",${newPurchase.total_price} )
    `);

    res.status(201).send("Compra cadastrada com sucesso");
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
