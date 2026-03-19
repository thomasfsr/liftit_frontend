import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useNavigate } from "react-router";
import z from "zod";
const signInSchema = z.object({
  email: z.email("Give a valid email."),
  password: z.string().min(6, "At least 6 characters."),
});

type SignInType = z.infer<typeof signInSchema>;

function EmailSignInForm() {
  // const { session, isPending, signIn, signInWithGoogle, signOut } = useAuth();
  const navigate = useNavigate();
  function handleEmailSignIn({ email, password }: SignInType) {
    await authClient.signIn.email({
      email,
      password,
      callbackURL: "http://localhost:5173/dashboard",
    });
  }

  useEffect(() => {
    if (!isPending && session) {
      navigate("/dashboard");
    }
  }, [session]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn({
      email,
      password,
    });
    if (res.error) {
      console.log(res.error);
      return;
    }
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign In</button>
      </form>

      <button onClick={signInWithGoogle}>Sign in with Google</button>

      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default SignInForm;
