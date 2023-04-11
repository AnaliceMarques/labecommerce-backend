// import { Request, Response } from "express";
// import { products } from "../database";
// import { PRODUCT_CATEGORY, TProduct } from "../types";

// export const editProductById = (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;

//     const productToEdid: TProduct = products.find(
//       (product) => product.id === id
//     );

//     if (!productToEdid) {
//       res.status(404);
//       throw new Error("Produto não cadastrado");
//     }

//     const newName = req.body.name as string | undefined;
//     const newPrice = req.body.price as number | undefined;
//     const newCategory = req.body.category as PRODUCT_CATEGORY | undefined;

//     if (newName !== undefined && typeof newName !== "string") {
//       res.status(400);
//       throw new Error("'name' tem que ser string");
//     }

//     if (newPrice !== undefined && typeof newPrice !== "number") {
//       res.status(400);
//       throw new Error("'price' tem que ser number");
//     }

//     if (
//       newCategory !== undefined &&
//       newCategory !== PRODUCT_CATEGORY.CATEGORY1 &&
//       newCategory !== PRODUCT_CATEGORY.CATEGORY2 &&
//       newCategory !== PRODUCT_CATEGORY.CATEGORY3
//     ) {
//       res.status(400);
//       throw new Error("'category' precisa ter um dos valores válidos");
//     }

//     productToEdid.name = newName || productToEdid.name;
//     productToEdid.price = isNaN(newPrice) ? productToEdid.price : newPrice;
//     productToEdid.category = newCategory || productToEdid.category;

//     res.status(200).send("Produto atualizado com sucesso");
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
