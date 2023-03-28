import { Request, Response } from "express";
import { products } from "../database";

//GET Search Product By Name
export const getSearchProductByName = (req: Request, res: Response) => {
  const q = req.query.q as string;

  const result = products.filter((product) =>
    product.name.toLowerCase().includes(q.toLowerCase())
  );

  if (result.length === 0) {
    return res.status(404).send("Produto não encontrado");
  }

  res.status(200).send(result);
};
