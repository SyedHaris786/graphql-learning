// const { categories_array, products_array } = require("../db.js");
exports.Product = {
  categoryin: (parent, args, { categories_array }) => {
    const id = parent.categoryId;
    return categories_array.find((category) => category.id === id);
  },
  review: ({ id }, args, { reviews }) => {
    return reviews.filter((review) => review.productId === id);
  },
};
