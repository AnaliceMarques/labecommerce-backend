import { Request, Response } from "express";
import { purchases, users } from "../database";
import { TPurchase, TUser } from "../types";

export const getUserPurchasesByUserId = (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const userFound: TUser | undefined = users.find((user) => user.id === id);

    if (!userFound) {
      res.status(404);
      throw new Error("Usuário não cadastrado");
    }

    const purchasesFound: TPurchase[] = purchases.filter(
      (purchase) => purchase.userId === id
    );

    if (purchasesFound.length === 0) {
      res.status(404);
      throw new Error("O usuário não realizou nenhuma compra");
    }

    res.status(200).send({
      mensage: "Compras realizadas pelo usuário",
      purchasesFound,
    });
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
