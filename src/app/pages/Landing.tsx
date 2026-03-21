import { Link } from "react-router";

function Landing() {
  return (
    <>
      <Link to="/signin"> sign-in </Link>
      <p></p>
      <Link to="/signup"> sign-up </Link>
    </>
  );
}
export default Landing;
