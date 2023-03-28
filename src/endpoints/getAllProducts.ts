import { Request, Response } from "express";
import { products } from "../database";

//GET All Products
export const getAllProducts = (req: Request, res: Response) => {
  res.status(200).send(products);
};
