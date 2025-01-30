import { Info } from "./info.ts";
import { Character } from "./character.ts";

export type CharacterFetchInfo = {
  info: Info;
  results: Character[];
};
