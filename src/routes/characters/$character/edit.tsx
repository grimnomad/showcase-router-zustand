import { createFileRoute } from '@tanstack/react-router'
import { EditCharacterPage } from '../../../pages/character'

export const Route = createFileRoute('/characters/$character/edit')({
  component: EditCharacterPage,
})

