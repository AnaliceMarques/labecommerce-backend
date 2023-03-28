import { Request, Response } from "express";
import { users } from "../database";

//GET All Users
export const getAllUsers = (req: Request, res: Response) => {
  res.status(200).send(users);
};
