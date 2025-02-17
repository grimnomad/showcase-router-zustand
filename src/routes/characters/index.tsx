import { createFileRoute } from '@tanstack/react-router';
import { CharactersPage } from '../../pages/character';

export const Route = createFileRoute('/characters/')({
  component: CharactersPage,
})

