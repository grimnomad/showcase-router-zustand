import { useNavigate } from "@tanstack/react-router";
import { Button } from "./design-system";

function App() {
  const navigate = useNavigate();

  function onClick() {
    navigate({to: '/characters'});
  }

  return (
    <Button background="warning" onClick={onClick}>
      Go to Characters
    </Button>
  )
}

export { App };
