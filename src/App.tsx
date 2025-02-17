import { useNavigate } from "@tanstack/react-router";

function App() {
  const navigate = useNavigate();

  function onClick() {
    navigate({to: '/characters'});
  }

  return (
    <button onClick={onClick}>
      Go to Characters
    </button>
  )
}

export { App };
