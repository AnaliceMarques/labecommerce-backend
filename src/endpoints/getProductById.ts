import { Request, Response } from "express";
import { db } from "../database/knex";

export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const [productFound] = await db.raw(`
    SELECT * FROM products
    WHERE id="${id}";
    `);

    if (!productFound) {
      res.status(404);
      throw new Error("Produto não encontrado");
    }

    res.status(200).send({ mensage: "Produto encontrado", productFound });
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
