import { Request, Response } from "express";
import { db } from "../database/knex";
import { TProduct } from "../types";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { id, name, price, description, image_url } = req.body;

    if (!id.length) {
      res.status(400);
      throw new Error("'id' não deve estar vazio");
    }

    if (!name.length) {
      res.status(400);
      throw new Error("'name' não deve estar vazio");
    }

    if (price < 0) {
      res.status(400);
      throw new Error("'price' não deve ser negativo");
    }

    if (typeof id !== "string") {
      res.status(400);
      throw new Error("'id' tem que ser string");
    }

    if (typeof name !== "string") {
      res.status(400);
      throw new Error("'name' tem que ser string");
    }

    if (typeof price !== "number") {
      res.status(400);
      throw new Error("'price' tem que ser number");
    }

    if (typeof description !== "string") {
      res.status(400);
      throw new Error("'description' tem que ser string");
    }

    if (typeof image_url !== "string") {
      res.status(400);
      throw new Error("'image_url' tem que ser string");
    }

    const [productIdFound] = await db.raw(`
    SELECT * FROM products
    WHERE id = "${id}";
    `);

    if (productIdFound) {
      res.status(409);
      throw new Error("'id' já cadastrado");
    }

    const newProduct: TProduct = {
      id,
      name,
      price,
      description,
      image_url,
    };

    await db.raw(`
   INSERT INTO products (id, name, price, description, image_url)
    VALUES
    ("${newProduct.id}","${newProduct.name}", ${newProduct.price}, "${newProduct.description}", "${newProduct.image_url}");
   `);

    res.status(201).send("Produto cadastrado com sucesso");
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
