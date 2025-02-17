import { useState } from "react";
import { Character } from "../../../models/Character/Character";
import { createStore } from 'zustand'
import { CharacterContext } from "./CharacterContext";
import { CharacterStore } from "./CharacterStore";

interface CharacterProviderProps {
  children: React.ReactNode;
  initialCharacter: Character;
}

function CharacterProvider(props: CharacterProviderProps) {
  const { children, initialCharacter } = props;

  const [store] = useState(() => createStore<CharacterStore>((set) => ({
    character: initialCharacter,
    setCharacter: (character) => set({ character }),
  })));

  return (
    <CharacterContext.Provider value={store}>
      {children}
    </CharacterContext.Provider>
  );
}

export { CharacterProvider };