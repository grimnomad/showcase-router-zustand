import { useCharacter, useSetCharacter } from "./CharacterProvider";

function EditCharacterPage() {
  const character = useCharacter();
  const setCharacter = useSetCharacter();

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCharacter({ ...character, name: event.target.value });
  }

  return <div>
    <input type="text" value={character.name} onChange={onChange}/>
  </div>;
}

export { EditCharacterPage };