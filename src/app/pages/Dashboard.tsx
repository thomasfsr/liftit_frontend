import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { authClient } from "@/lib/auth-client";
import SignOutButton from "../components/signOutButton";

function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function checkAuth() {
      const session = await authClient.getSession();

      if (!session.data) {
        navigate("/");
        return;
      }

      setEmail(session.data?.user.email ?? "");
      setLoading(false);
    }

    checkAuth();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <p>Hello {email}</p>
      <SignOutButton />
    </div>
  );
}

export default Dashboard;
