import React, {useEffect, useState} from "react";
import {Character} from "../../types/character.tsx";
import {getCharacter} from "../../api/RickAndMortyAPI.ts";
import {CharacterList} from "../CharacterList";

const countOfCharacters = 20;

export const CharacterApp: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchCharacters: () => Promise<void> = async () => {
            try {
                const fetchedCharacters: Character[] = [];

                for (let i: number = 0; i < countOfCharacters; i++) {
                    const character = await getCharacter();
                    fetchedCharacters.push(character);
                }

                setCharacters(fetchedCharacters);
                setLoading(true);
            } catch (error) {
                console.error(error);
            }
        }

        fetchCharacters().then();
    }, []);

    return (
        <>
            {loading ? (<CharacterList characters={characters} />) : <h1>Loading...</h1>}
        </>
    )
}