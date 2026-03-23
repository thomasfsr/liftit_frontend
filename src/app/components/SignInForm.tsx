import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import signinIcon from "@/assets/signin.svg";

import z from "zod";
const signInSchema = z.object({
  email: z.email("Give a valid email."),
  password: z.string().min(6, "At least 6 characters."),
});

type SignInSchema = z.infer<typeof signInSchema>;

function SignInForm() {
  const { register, handleSubmit, formState } = useForm<SignInSchema>();

  async function handleSignIn({ email, password }: SignInSchema) {
    await authClient.signIn.email({
      email,
      password,
      callbackURL: "http://localhost:5173/dashboard",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <input
          required
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <input
          required
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <button type="submit" disabled={formState.isSubmitting}>
          <img src={signinIcon} style={{ width: 20, marginRight: 8 }} />
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
