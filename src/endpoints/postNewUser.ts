import { Request, Response } from "express";
import { users } from "../database";
import { TUser } from "../types";

//POST Create User
export const postNewUser = (req: Request, res: Response) => {
  // const id = req.body.id;
  // const email = req.body.email;
  // const password = req.body.password;

  //usando a desestruturação
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

  const newUser: TUser = {
    id,
    email,
    password,
  };

  users.push(newUser);

  res.status(201).send("Usuário cadastrado com sucesso");
};
