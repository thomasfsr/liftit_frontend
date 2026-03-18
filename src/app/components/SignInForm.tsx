import { useAuth } from "../contexts/AuthContext";

function SignInForm() {
  const {
    // session,
    // isPending,
    signIn,
    // signUp,
    signInWithGoogle,
    signOut,
  } = useAuth();

  const handleSignIn = async (e: React.SubmitEvent) => {
    e.preventDefault();

    await signIn({
      email: "test@email.com",
      password: "123456",
    });
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <button type="submit">Sign In</button>
      </form>

      <button onClick={signInWithGoogle}>Sign in with Google</button>

      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default SignInForm;
