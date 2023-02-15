const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
    numberOfmembers: Int
    products: products
  }

  type products {
    name: String
    qty: Int
    price: String
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "World!";
    },
    numberOfmembers: () => {
      return 43;
    },
    products: () => {
      return { name: "String", qty: 20, price: "String" };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Server is ready at" + url);
});
