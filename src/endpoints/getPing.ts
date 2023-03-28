import { Request, Response } from "express";

//teste
export const getPing = (req: Request, res: Response) => {
  res.send("Pong!");
};
