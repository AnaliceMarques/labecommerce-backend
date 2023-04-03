import { Request, Response } from "express";
import { products } from "../database";
import { TProduct } from "../types";

export const getProductById = (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const productFound: TProduct | undefined = products.find(
      (product) => product.id === id
    );

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
