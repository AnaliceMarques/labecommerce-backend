import { Request, Response } from "express";
import { db } from "../database/knex";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await db
      .select("id", "name", "email", "created_at as createdAt")
      .from("users");

    if (result.length === 0) {
      res.status(404);
      throw new Error("Nenhum usuário cadastrado");
    }

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
