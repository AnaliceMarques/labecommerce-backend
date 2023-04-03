import { Request, Response } from "express";
import { products } from "../database";

export const getAllProducts = (req: Request, res: Response) => {
  try {
    res.status(200).send({ mensage: "Produtos cadastrados", products });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inseperado");
    }
  }
};
