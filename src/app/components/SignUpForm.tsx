import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";

import z from "zod";
const signUpSchema = z.object({
  firstName: z.string("Give a valid name.").min(3).max(50),
  lastName: z.string("Give a valid name").min(3).max(50),
  email: z.email("Give a valid email."),
  password: z.string().min(6, "At least 6 characters."),
});

type SignUpSchema = z.infer<typeof signUpSchema>;

function SignUpForm() {
  const { register, handleSubmit, formState } = useForm<SignUpSchema>();

  async function handleSignUp({
    firstName,
    lastName,
    email,
    password,
  }: SignUpSchema) {
    await authClient.signUp.email({
      name: "${firstName} + ${lastName}",
      email,
      password,
      callbackURL: "http://localhost:5173/dashboard",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <input
          required
          type="text"
          placeholder="first name."
          {...register("firstName")}
        />

        <input
          required
          type="text"
          placeholder="last name."
          {...register("lastName")}
        />

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
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
