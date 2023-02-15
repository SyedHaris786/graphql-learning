const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");

const port = 5000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
  })
);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
