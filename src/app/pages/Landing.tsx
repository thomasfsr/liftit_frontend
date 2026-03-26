import { Link } from "react-router";

function Landing() {
  return (
    <>
      <Link to="/signin">
        {" "}
        <button>sign-in</button>{" "}
      </Link>
      <p></p>
      <Link to="/signup">
        {" "}
        <button>sign-up</button>{" "}
      </Link>
    </>
  );
}
export default Landing;
