import { useContext } from "react";
import { CharacterContext } from "./CharacterContext";
import { useStore } from "zustand";
import { CharacterStore } from "./CharacterStore";

function useCharacterStore<T>(selector: (store: CharacterStore) => T) {
  const store = useContext(CharacterContext);

  if (!store) {
    throw new Error("useCharacterStore must be used within a CharacterProvider");
  }

  return useStore(store, selector);
}

export { useCharacterStore };