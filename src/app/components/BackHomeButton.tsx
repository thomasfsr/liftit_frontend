import { useNavigate } from "react-router";

function BackHomeButton() {
  const nav = useNavigate();
  async function handleBackHome() {
    await nav("/");
  }
  <button onClick={handleBackHome}>Back</button>;
}

export default BackHomeButton;
