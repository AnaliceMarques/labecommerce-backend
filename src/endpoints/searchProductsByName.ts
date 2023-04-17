import { Request, Response } from "express";
import { db } from "../database/knex";

export const searchProductsByName = async (req: Request, res: Response) => {
  try {
    const q = req.query.q as string;

    if (q.length < 1) {
      res.status(400);
      throw new Error(
        "Para que a pesquisa seja realizada digite no mínimo um caracter do nome do produto"
      );
    }

    const list = await db
      .select("id", "name", "price", "description", "image_url as imageUrl")
      .from("products")
      .where("name", "LIKE", `%${q}%`);

    if (list.length === 0) {
      res.status(404);
      throw new Error("Não foi encontrado produto com esse nome");
    }

    const result = {
      quantity: list.length,
      list,
    };

    res.status(200).send(result);
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
