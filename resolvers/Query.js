// const { categories_array, products_array } = require("../db.js");
exports.Query = {
  hello: () => {
    return "World!";
  },
  products: (parent, args, { products_array }) => {
    return products_array;
  },
  product: (parent, args, { products_array }) => {
    const productId = args.id;
    const product = products_array.find((product) => product.id === productId);
    if (!product) return null;
    return product;
  },
  categories: (parent, args, { categories_array }) => {
    return categories_array;
  },
  category: (parent, args, { categories_array }) => {
    const { id } = args;
    return categories_array.find((category) => category.id === id);
  },
};
