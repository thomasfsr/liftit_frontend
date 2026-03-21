import { authClient } from "@/lib/auth-client";
import { useNavigate } from "react-router";

function SignOutButton() {
  const navigate = useNavigate();
  async function handleSignOut() {
    await authClient.signOut();
    navigate("/");
  }

  return <button onClick={handleSignOut}>Sign Out</button>;
}

export default SignOutButton;
