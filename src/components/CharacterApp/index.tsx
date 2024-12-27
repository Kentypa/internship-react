import React, {useEffect, useState} from "react";
import {Character} from "../../types/character.tsx";
import {getCharacter} from "../../api/RickAndMortyAPI.ts";
import {CharacterList} from "../CharacterList";

const countOfCharacters = 20;

export const CharacterApp: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const fetchedCharacters: Character[] = [];

                for (let i: number = 0; i < countOfCharacters; i++) {
                    const character = await getCharacter();
                    fetchedCharacters.push(character);
                }

                setCharacters(fetchedCharacters);
                setLoading(true);
                console.log(characters);
            } catch (error) {
                console.error(error);
            }
        }

        fetchCharacters();
    }, []);

    return (
        <>
            {loading ? (<CharacterList characters={characters} />) : <h1>Loading...</h1>}
        </>
    )
}