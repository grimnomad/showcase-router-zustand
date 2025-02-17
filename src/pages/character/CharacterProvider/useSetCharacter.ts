import { useCharacterStore } from "./useCharacterStore";

function useSetCharacter() {
  const setCharacter = useCharacterStore((store) => store.setCharacter);

  return setCharacter;
}

export { useSetCharacter };