//Verificações feitas na aula de Typescript II
// //User
// export const createUser = (
//     id: string,
//     email: string,
//     password: string
//   ): string => {
//     const emailExist: TUser | undefined = users.find(
//       (user) => user.email === email
//     );
//     const idExist: TUser | undefined = users.find((user) => user.id === id);

//     if (emailExist) {
//       return "E-mail já cadastrado";
//     } else if (idExist) {
//       return "Id já existe";
//     } else {
//       const newUser = {
//         id,
//         email,
//         password,
//       };
//       users.push(newUser);

//       console.log("Usuários cadastrados: \n", users);
//       return "Cadastro realizado com suceso";
//     }
//   };

//   export const getAllUsers = (): string[] => {
//     const emailUsers: string[] = [];
//     users.map((user) => emailUsers.push(user.email));
//     console.log("Usuários cadastrados \n");
//     return emailUsers;
//   };

//   //Product
//   export const createProduct = (
//     id: string,
//     name: string,
//     price: number,
//     category: PRODUCT_CATEGORY
//   ): string => {
//     const productExist = products.find(
//       (product) => product.name === name || product.id === id
//     );

//     if (productExist) {
//       return "O produto já está cadastrado";
//     } else {
//       const newProduct = {
//         id,
//         name,
//         price,
//         category,
//       };
//       products.push(newProduct);

//       console.log("Produtos cadastrados: \n", products);
//       return "Produto criado com suceso";
//     }
//   };

//   export const getAllProducts = (): TProduct[] => {
//     console.log("Produtos cadastrados: \n");
//     return products;
//   };

//   export const getProductById = (idToSearch: string): TProduct | undefined => {
//     return products.find((product) => product.id === idToSearch);
//   };
//   //nesse caso o filter não serve, porque ele não volta undefined, volta um [] caso não encontre.

//   export const queryProductsByName = (query: string): TProduct[] | string => {
//     if (query !== "") {
//       const productsFound = products.filter((product) =>
//         product.name.toLowerCase().includes(query.toLowerCase())
//       );
//       return productsFound.length > 0
//         ? productsFound
//         : "Não foi encontrado nenhum produto com esse nome";
//     } else {
//       return "Digite o que você deseja pesquisar";
//     }
//   };

//   //Purchase
//   export const createPurchase = (
//     userId: string,
//     productId: string,
//     quantity: number,
//     totalPrice: number
//   ): string => {
//     const userExist = users.find((user) => user.id === userId);
//     const productExist = products.find((product) => product.id === productId);

//     if (userExist === undefined) {
//       return "Usuário não cadastrado";
//     } else if (productExist === undefined) {
//       return "Produto não cadastrado";
//     } else {
//       const newPurchase = {
//         userId,
//         productId,
//         quantity,
//         totalPrice,
//       };
//       purchases.push(newPurchase);

//       console.log("Compras cadastradas: \n", purchases);
//       return "Compra realizada com sucesso";
//     }
//   };

//   export const getAllPurchasesFromUserId = (userIdToSearch: string): void => {
//     const userExist = users.find((user) => user.id === userIdToSearch);
//     if (!userExist) {
//       console.log("Usuário não identificado");
//     } else {
//       const userPurchase = purchases.filter(
//         (purchase) => purchase.userId === userIdToSearch
//       );
//       userPurchase.length > 0
//         ? console.log(
//             "Compras realizadas pelo usuário",
//             userExist.email,
//             "\n",
//             userPurchase
//           )
//         : console.log(
//             "Não foi identificada nenhuma compra do usuário",
//             userExist.email
//           );
//     }
//   };
