import { Character } from "../../types/character.tsx";
import { CharacterInfo, CharacterInfoProps } from "../CharacterInfo";
import React from "react";

type CharacterListProps = {
  characters: Character[];
};

export const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  const charactersInfo: CharacterInfoProps[] = characters.map(
    ({ id, name, image }) => ({ id, name, image }),
  );
  return (
    <div className="CharacterList">
      {charactersInfo.map((character) => (
        <CharacterInfo key={character.id} {...character} />
      ))}
    </div>
  );
};
