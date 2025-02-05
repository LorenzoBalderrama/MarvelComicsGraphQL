import fs from "fs";

// Load the Marvel JSON file
const marvelData = JSON.parse(fs.readFileSync("marvel_data_2020_2024.json", "utf8"));

export const getComicsByYear = (year) => marvelData.comics[year.toString()] || [];

export const getComicById = (id) => {
  for (const year in marvelData.comics) {
    const found = marvelData.comics[year].find((comic) => comic.id.toString() === id);
    if (found) return found;
  }
  return null;
};