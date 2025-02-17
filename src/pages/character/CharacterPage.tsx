import { useQuery } from "@tanstack/react-query";
import { Outlet, useParams, useNavigate } from "@tanstack/react-router";
import { CharacterQueryFactory } from "../../api/Character/CharacterQueryFactory";
import { getIdFromUrl } from "./getIdFromUrl";
import { CharacterProvider } from "./CharacterProvider";

function CharacterPage() {
  const { character: characterID } = useParams({ from: "/characters/$character" });
  const { data: character } = useQuery(CharacterQueryFactory.byId(characterID));
  const navigate = useNavigate();

  if (!character) return null;

  function onClick(id: string) {
    navigate({ to: `/characters/${id}/edit` });
  }

  return (
    <CharacterProvider initialCharacter={character}>
      <h1>{character.name}</h1>
      <button onClick={() => onClick(getIdFromUrl(character.url))}>Edit</button>
      <Outlet />
    </CharacterProvider>
  );
}

export { CharacterPage };