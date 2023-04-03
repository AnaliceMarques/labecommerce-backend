import { Request, Response } from "express";
import { products } from "../database";
import { TProduct } from "../types";

export const searchProductsByName = (req: Request, res: Response) => {
  try {
    const q = req.query.q as string;

    if (q.length < 1) {
      res.status(400);
      throw new Error(
        "Para que a pesquisa seja realizada digite no mínimo um caracter do nome do produto"
      );
    }

    const productsFound: TProduct[] = products.filter((product) =>
      product.name.toLowerCase().includes(q.toLowerCase())
    );

    if (productsFound.length === 0) {
      res.status(404);
      throw new Error("Não foi encontrado produto com esse nome");
    }

    res
      .status(200)
      .send({ mensage: "Produto(s) encontrado(s)", productsFound });
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
