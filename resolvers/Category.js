// const { categories_array, products_array } = require("../db.js");
exports.Category = {
  products: (parent, args, { products_array }) => {
    const categoryId = parent.id;
    return products_array.filter(
      (product) => product.categoryId === categoryId
    );
  },
};
