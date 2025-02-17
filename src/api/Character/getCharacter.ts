import { Character } from "../../models/Character/Character";

async function getCharacter(id: string): Promise<Character> {
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  const data = await response.json() as Character;

  return data;
}

export { getCharacter };