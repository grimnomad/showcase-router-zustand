import { useQuery } from "@tanstack/react-query";
import { Outlet, useParams, useNavigate } from "@tanstack/react-router";
import { CharacterQueryFactory } from "../../api/Character/CharacterQueryFactory";
import { getIdFromUrl } from "./getIdFromUrl";
import { CharacterProvider } from "./CharacterProvider";
import { Button } from "../../design-system";

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
      <Button onClick={() => onClick(getIdFromUrl(character.url))}>Edit</Button>
      <Outlet />
    </CharacterProvider>
  );
}

export { CharacterPage };