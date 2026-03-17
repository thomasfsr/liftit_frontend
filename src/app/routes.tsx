import { createBrowserRouter } from "react-router";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/signin",
    Component: SignIn,
  },
]);
