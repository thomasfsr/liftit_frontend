import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import signupIcon from "@/assets/signup.svg";

import z from "zod";
const signUpSchema = z.object({
  firstName: z.string("Give a valid name.").min(3).max(50),
  lastName: z.string("Give a valid name").min(3).max(50),
  email: z.email("Give a valid email."),
  password: z.string().min(6, "At least 6 characters."),
  phone: z.string().min(10, "At least 10 characters."),
});

type SignUpSchema = z.infer<typeof signUpSchema>;

function SignUpForm() {
  const { register, handleSubmit, formState, setError } =
    useForm<SignUpSchema>();

  async function handleSignUp({
    firstName,
    lastName,
    email,
    password,
    phone,
  }: SignUpSchema) {
    const res = await authClient.signUp.email({
      name: `${firstName} ${lastName}`,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      password: password,
      callbackURL: "http://localhost:5173/dashboard",
    });

    if (res?.error) {
      if (res.error.code === "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL") {
        setError("email", {
          type: "manual",
          message: "This email is already registered.",
        });
      } else {
        setError("root", {
          type: "manual",
          message: res.error.message || "Something went wrong.",
        });
      }
    }
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
          type="tel"
          placeholder="11991234567"
          {...register("phone")}
        />
        <input
          required
          type="email"
          placeholder="email"
          {...register("email")}
        />
        {formState.errors.email && (
          <p style={{ color: "red" }}>{formState.errors.email.message}</p>
        )}
        <input
          required
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <button type="submit" disabled={formState.isSubmitting}>
          <img src={signupIcon} style={{ width: 20, marginRight: 8 }} />
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
