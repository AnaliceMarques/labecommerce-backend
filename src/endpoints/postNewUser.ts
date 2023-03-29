import { Request, Response } from "express";
import { users } from "../database";
import { TUser } from "../types";

export const postNewUser = (req: Request, res: Response) => {
  const { id, email, password } = req.body;

  if (typeof id !== "string") {
    return res.status(400).send("id tem que ser string");
  }
  if (typeof name !== "string") {
    return res.status(400).send("name tem que ser string");
  }
  if (typeof password !== "string") {
    return res.status(400).send("password tem que ser string");
  }

  const userIdFound: TUser = users.find((user) => user.id === id);
  if (userIdFound) {
    return res.status(400).send("id de usuário já cadastrado");
  }
  const userEmailFound: TUser = users.find((user) => user.email === email);
  if (userEmailFound) {
    return res.status(400).send("email de usuário já existe cadastrado");
  }

  const newUser: TUser = {
    id,
    email,
    password,
  };

  users.push(newUser);

  res.status(201).send({ mensage: "Usuário cadastrado com sucesso", newUser });
};
