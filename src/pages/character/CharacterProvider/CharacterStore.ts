import { Character } from "../../../models/Character/Character";

interface CharacterStore {
  character: Character;
  setCharacter: (character: Character) => void;
}

export type { CharacterStore };