import { useCharacterStore } from "./useCharacterStore";

function useCharacter() {
  const character = useCharacterStore((store) => store.character);

  return character;
}

export { useCharacter };