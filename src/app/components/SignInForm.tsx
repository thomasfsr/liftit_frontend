import { authClient } from "@/lib/auth-client";
import z from "zod";
const signInSchema = z.object({
  email: z.email("Give a valid email."),
  password: z.string().min(6, "At least 6 characters."),
});

type SignInSchema = z.infer<typeof signInSchema>;

function EmailSignInForm() {
  async function handleEmailSignIn({ email, password }: SignInSchema) {
    await authClient.signIn.email({
      email,
      password,
      callbackURL: "http://localhost:5173/dashboard",
    });
  }

  return (
    <div>
      <form onSubmit={handleEmailSignIn}>
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
    </div>
  );
}

export default EmailSignInForm;
