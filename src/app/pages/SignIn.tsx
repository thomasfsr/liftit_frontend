import SignInForm from "../components/SignInForm";
import SocialSignInButton from "../components/SocialSignInButton";
import BackHomeButton from "../components/BackHomeButton";

function SignIn() {
  return (
    <div>
      <SignInForm />
      <SocialSignInButton />
      <BackHomeButton />
    </div>
  );
}

export default SignIn;
