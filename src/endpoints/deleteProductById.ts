import { Request, Response } from "express";
import { db } from "../database/knex";

export const deleteProductById = async (req: Request, res: Response) => {
  try {
    const idToDelete = req.params.id;

    const [productIdExist] = await db("products").where({ id: idToDelete });

    if (!productIdExist) {
      res.status(404);
      throw new Error("'id' não cadastrado");
    }

    const [productInPurchasesProducts] = await db("purchases_products").where({
      product_id: idToDelete,
    });

    if (productInPurchasesProducts) {
      await db("purchases_products").del().where({ product_id: idToDelete });
    }

    await db("products").del().where({ id: idToDelete });

    res.status(200).send({ message: "Produto excluído com sucesso" });
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
