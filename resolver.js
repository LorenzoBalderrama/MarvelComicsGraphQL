import { getComicsByYear, getComicById } from "./data.js";

export const resolvers = {
  Query: {
    comics: (_, { year }) => getComicsByYear(year),
    comic: (_, { id }) => getComicById(id),
  },
};