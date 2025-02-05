import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolver.js";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Marvel GraphQL API ready at ${url}`);
});