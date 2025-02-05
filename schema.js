import { gql } from "apollo-server";

export const typeDefs = gql`
  type Comic {
    id: ID!
    title: String!
    description: String
    issueNumber: Int
    pageCount: Int
    onsaleDate: String
    printPrice: Float
    thumbnail: String
    creators: [Creator]
    characters: [Character]
  }

  type Creator {
    name: String!
    role: String!
  }

  type Character {
    name: String!
  }

  type Query {
    comics(year: Int!): [Comic]
    comic(id: ID!): Comic
  }
`;