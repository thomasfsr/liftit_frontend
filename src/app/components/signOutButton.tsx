import { authClient } from "@/lib/auth-client";
import { useNavigate } from "react-router";
import signoutIcon from "@/assets/signout.svg";

function SignOutButton() {
  const navigate = useNavigate();
  async function handleSignOut() {
    await authClient.signOut();
    navigate("/");
  }

  return (
    <button onClick={handleSignOut}>
      <img src={signoutIcon} style={{ width: 20, marginRight: 8 }} />
      Sign Out
    </button>
  );
}

export default SignOutButton;
