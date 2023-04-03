import { Request, Response } from "express";
import { users } from "../database";

export const deleteUserById = (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const indexUserToDelete = users.findIndex((user) => user.id === id);

    if (indexUserToDelete < 0) {
      res.status(404);
      throw new Error("Usuário não cadastrado");
    }

    users.splice(indexUserToDelete, 1);

    res.status(200).send("Usuário apagado com sucesso");
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
