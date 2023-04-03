import { Request, Response } from "express";
import { users } from "../database";
import { TUser } from "../types";

export const createUser = (req: Request, res: Response) => {
  try {
    const { id, email, password } = req.body;

    if (typeof id !== "string") {
      res.status(400);
      throw new Error("'id' tem que ser string");
    }

    if (typeof email !== "string") {
      res.status(400);
      throw new Error("'email' tem que ser string");
    }

    if (typeof password !== "string") {
      res.status(400);
      throw new Error("'password' tem que ser string");
    }

    const userIdFound: TUser = users.find((user) => user.id === id);

    if (userIdFound) {
      res.status(400);
      throw new Error("'id' já cadastrado, digite outro valor");
    }

    const userEmailFound: TUser = users.find((user) => user.email === email);

    if (userEmailFound) {
      res.status(400);
      throw new Error("'email' já está cadastrado, digite outro valor");
    }

    const newUser: TUser = {
      id,
      email,
      password,
    };

    users.push(newUser);

    res.status(201).send("Usuário cadastrado com sucesso");
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
