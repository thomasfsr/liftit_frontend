import { useNavigate } from "react-router";

function BackHomeButton() {
  const nav = useNavigate();
  async function handleBackHome() {
    await nav("/");
  }
  return <button onClick={handleBackHome}>Back</button>;
}

export default BackHomeButton;
