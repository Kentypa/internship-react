import { CharacterFetchInfo } from "../types/character-fetch-info.ts";

export async function getMaxPagesFromAPI(): Promise<number> {
  const url = `https://rickandmortyapi.com/api/character`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      new Error("Failed to fetch characters");
    }
    const data: CharacterFetchInfo = await response.json();
    return data.info.pages;
  } catch (error) {
    return Promise.reject(error);
  }
}
