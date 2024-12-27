import React from "react";

export type CharacterInfoProps = {
    id: number;
    image: string;
    name: string;
}

export const CharacterInfo: React.FC<CharacterInfoProps> = ({image, name}) => {
    return (
        <section>
            <img src={image} alt="character" />
            <br/>{name}
        </section>
    )
}