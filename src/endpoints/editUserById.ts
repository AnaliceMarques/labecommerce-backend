// import { Request, Response } from "express";
// import { users } from "../database";
// import { TUser } from "../types";

// export const editUserById = (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;

//     const userToEdid: TUser = users.find((user) => user.id === id);

//     if (!userToEdid) {
//       res.status(404);
//       throw new Error("Usuário não cadastrado");
//     }

//     const newEmail = req.body.email as string | undefined;
//     const newPassword = req.body.password as string | undefined;

//     if (newEmail !== undefined && typeof newEmail !== "string") {
//       res.status(400);
//       throw new Error("'email' tem que ser string");
//     }

//     if (newPassword !== undefined && typeof newPassword !== "string") {
//       res.status(400);
//       throw new Error("'password' tem que ser string");
//     }

//     userToEdid.email = newEmail || userToEdid.email;
//     userToEdid.password = newPassword || userToEdid.password;

//     res.status(200).send("Cadastro atualizado com sucesso");
//   } catch (error) {
//     if (res.statusCode === 200) {
//       res.status(200);
//     }

//     if (error instanceof Error) {
//       res.send(error.message);
//     } else {
//       res.send("Erro inesperado");
//     }
//   }
// };
