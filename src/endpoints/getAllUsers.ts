import { Request, Response } from "express";
import { users } from "../database";

export const getAllUsers = (req: Request, res: Response) => {
  try {
    res.status(200).send({ mensage: "Usuários cadastrados", users });
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
