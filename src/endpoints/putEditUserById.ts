import { Request, Response } from "express";
import { users } from "../database";
import { TUser } from "../types";

export const putEditUserById = (req: Request, res: Response) => {
  const id = req.params.id;

  const userToEdid: TUser = users.find((user) => user.id === id);

  if (!userToEdid) {
    return res.status(400).send("Usuário não cadastrado");
  }

  const newEmail = req.body.email as string | undefined;
  const newPassword = req.body.password as string | undefined;

  userToEdid.email = newEmail || userToEdid.email;
  userToEdid.password = newPassword || userToEdid.password;

  res.status(200).send({ mensage: "Cadastro atualizado com sucesso" });
};
