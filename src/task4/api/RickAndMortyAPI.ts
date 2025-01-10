import {Character} from "../types/character.ts";
import {QueryFunctionContext} from "react-query";

export async function fetchCharactersDataByPage({queryKey}: QueryFunctionContext): Promise<{ results: Character[] }> {
    const [page] = queryKey;
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch characters");
        }

        return response.json();
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}