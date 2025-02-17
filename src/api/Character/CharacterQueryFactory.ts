import { QueryKey, queryOptions } from "@tanstack/react-query"
import { getCharacters } from "./getCharacters"
import { getCharacter } from "./getCharacter";

class CharacterQueryFactory {
  static #queryKey: QueryKey = ['character'];

  static all(): QueryKey {
    return this.#queryKey;
  }

  static id(id: string): QueryKey {
    return [...this.#queryKey, id];
  }

  static list() {
    return queryOptions({
      queryKey: this.all(),
      queryFn: getCharacters,
      select: (data) => data.results,
    });
  }

  static byId(id: string) {
    return queryOptions({
      queryKey: this.id(id),
      queryFn: () => getCharacter(id),
      select: (data) => data,
    });
  }
}

export { CharacterQueryFactory }