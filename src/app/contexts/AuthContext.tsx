import React, { createContext, useContext } from "react";
import { authClient } from "@/lib/auth-client";

// Better-Auth provides the types for us!
type Session = typeof authClient.$Infer.Session;

interface AuthContextType {
  session: Session | null;
  isPending: boolean;
  signIn: typeof authClient.signIn.email;
  signUp: typeof authClient.signUp.email;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session, isPending } = authClient.useSession();

  const signInWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  const signOut = async () => {
    await authClient.signOut();
  };

  const value = {
    session,
    isPending,
    signIn: authClient.signIn.email,
    signUp: authClient.signUp.email,
    signInWithGoogle,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
