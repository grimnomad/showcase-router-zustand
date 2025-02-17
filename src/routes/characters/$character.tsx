import { createFileRoute } from '@tanstack/react-router'
import { CharacterPage } from '../../pages/character'

export const Route = createFileRoute('/characters/$character')({
  component: CharacterPage,
})
