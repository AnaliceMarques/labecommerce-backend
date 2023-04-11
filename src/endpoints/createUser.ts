import { Request, Response } from "express";
import { db } from "../database/knex";
import { TUser } from "../types";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { id, name, email, password } = req.body;

    if (!id.length) {
      res.status(400);
      throw new Error("'id' não deve estar vazio");
    }

    if (!name.length) {
      res.status(400);
      throw new Error("'name' não deve estar vazio");
    }

    if (!email.length) {
      res.status(400);
      throw new Error("'email' não deve estar vazio");
    }

    if (!password.length) {
      res.status(400);
      throw new Error("'password' não deve estar vazio");
    }

    if (typeof id !== "string") {
      res.status(400);
      throw new Error("'id' tem que ser string");
    }

    if (typeof name !== "string") {
      res.status(400);
      throw new Error("'name' tem que ser string");
    }

    if (typeof email !== "string") {
      res.status(400);
      throw new Error("'email' tem que ser string");
    }

    if (typeof password !== "string") {
      res.status(400);
      throw new Error("'password' tem que ser string");
    }

    const [userIdFound] = await db.raw(`
    SELECT * FROM users
    WHERE id = "${id}";
  `);

    if (userIdFound) {
      res.status(409);
      throw new Error("'id' já cadastrado, digite outro valor");
    }

    const [userEmailFound] = await db.raw(`
    SELECT * FROM users
    WHERE email LIKE "%${email}%"
    `);

    if (userEmailFound) {
      res.status(409);
      throw new Error("'email' já cadastrado, digite outro valor");
    }

    const newUser: TUser = {
      id,
      name,
      email,
      password,
    };

    await db.raw(`
    INSERT INTO users (id, name, email, password)
    VALUES
    ("${newUser.id}","${newUser.name}", "${newUser.email}", "${newUser.password}");
    `);

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
