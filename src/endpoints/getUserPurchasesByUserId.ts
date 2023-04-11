import { Request, Response } from "express";
import { db } from "../database/knex";

export const getUserPurchasesByUserId = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const [userFound] = await db.raw(`
    SELECT * FROM users
    WHERE id = "${id}";
    `);

    if (!userFound) {
      res.status(404);
      throw new Error("Usuário não cadastrado");
    }

    const purchasesFound = await db.raw(`
      SELECT * FROM purchases
      WHERE buyer = "${id}"
    `);

    if (purchasesFound.length === 0) {
      res.status(404);
      throw new Error("O usuário não realizou nenhuma compra");
    }

    res.status(200).send({
      mensage: "Compras realizadas pelo usuário",
      purchasesFound,
    });
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
