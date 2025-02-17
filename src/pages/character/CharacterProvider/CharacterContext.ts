import { createContext } from "react";
import { CharacterStore } from "./CharacterStore";
import { StoreApi } from "zustand";

const CharacterContext = createContext<StoreApi<CharacterStore> | null>(null);

export { CharacterContext };