import { ConfirmInput } from "../../design-system";
import { useCharacter, useSetCharacter } from "./CharacterProvider";

function EditCharacterPage() {
  const character = useCharacter();
  const setCharacter = useSetCharacter();

  function onChange(value: string) {
    setCharacter({ ...character, name: value });
  }

  return <div>
    <ConfirmInput value={character.name} onChange={onChange}/>
  </div>;
}

export { EditCharacterPage };