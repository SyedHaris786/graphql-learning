const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
  }

  type Product {
    id: ID!
    name: String
    description: String
    quantity: Int
    price: Int
    image: String
    onSale: Boolean
    categoryId: String
    categoryin: Category
    review: [Review!]!
  }

  type Category {
    id: ID!
    name: String
    products: [Product!]!
  }
  type Review {
    id: String
    date: String
    title: String
    comment: String
    rating: Int
  }

  input AddCategoryInput {
    name: String
  }
`;
