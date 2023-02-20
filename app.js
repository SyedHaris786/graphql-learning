const { ApolloServer, gql } = require("apollo-server");
const { argsToArgsConfig } = require("graphql/type/definition");
const { categories_array, products_array, reviews } = require("./db");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Product } = require("./resolvers/Product");
const { Category } = require("./resolvers/Category");
const { Mutation } = require("./resolvers/Mutation");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
    Mutation,
  },
  context: {
    categories_array,
    products_array,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log("Server is ready at" + url);
});
