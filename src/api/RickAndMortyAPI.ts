import {Character} from "../types/character.tsx";

export async function getCharacter(): Promise<Character> {
    const randomNumber = Math.floor(Math.random() * 825) + 1;
    const url = `https://rickandmortyapi.com/api/character/${randomNumber}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data as Character;
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
}
