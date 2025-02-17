import { Character } from "../../models/Character/Character";
import { ListResult } from "../common/ListResult";

async function getCharacters() {
  const response = await fetch('https://swapi.dev/api/people');
  const data = await response.json() as ListResult<Character>;

  return data;
}

export { getCharacters }