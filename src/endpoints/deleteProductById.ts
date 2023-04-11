// import { Request, Response } from "express";
// import { products } from "../database";

// export const deleteProductById = (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;

//     const indexProductToDelete = products.findIndex(
//       (product) => product.id === id
//     );

//     if (indexProductToDelete < 0) {
//       res.status(404);
//       throw new Error("Produto não cadastrado");
//     }

//     products.splice(indexProductToDelete, 1);

//     res.status(200).send("Produto apagado com sucesso");
//   } catch (error) {
//     if (res.statusCode === 200) {
//       res.status(500);
//     }

//     if (error instanceof Error) {
//       res.send(error.message);
//     } else {
//       res.send("Erro inesperado");
//     }
//   }
// };
