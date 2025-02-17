import { useQuery } from "@tanstack/react-query";
import { CharacterQueryFactory } from "../../api/Character/CharacterQueryFactory";
import { useNavigate } from "@tanstack/react-router";
import { getIdFromUrl } from "./getIdFromUrl";

function CharactersPage() {
  const navigate = useNavigate();

  const { data: characters } = useQuery(CharacterQueryFactory.list());

  if (!characters) return null;

  function onClick(id: string) {
    navigate({ to: `/characters/${id}` });
  }

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.url} onClick={() => onClick(getIdFromUrl(character.url))}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export { CharactersPage };