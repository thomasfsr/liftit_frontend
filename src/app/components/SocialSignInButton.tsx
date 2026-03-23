import { authClient } from "@/lib/auth-client";
import { useState } from "react";

function SocialSignInButton() {
  const [loading, setLoading] = useState(false);
  async function handleSignIn() {
    try {
      setLoading(true);
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "http://localhost:5173/dashboard",
      });
    } catch (error) {
      console.log("Social sign-in failed", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button onClick={handleSignIn} disabled={loading}>
        {loading ? "Redirecting..." : "Sign In with Google"}
      </button>
    </div>
  );
}

export default SocialSignInButton;
