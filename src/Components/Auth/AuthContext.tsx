import {
  googleLogout,
  TokenClientConfig,
  useGoogleLogin,
} from "@react-oauth/google";
import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType, UserProfile } from "../../models/AuthModels";
import { sendToken } from "../../api/client";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<unknown>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setUser(tokenResponse);
      const response = await sendToken(tokenResponse.access_token);
      console.log("Login Success:", response)
      const userProfile = {
        name: response.name,
        email: response.email,
        picture: response.picture,
        id: response.id
      };
      setProfile(userProfile);
      localStorage.setItem("user", JSON.stringify(tokenResponse));
      localStorage.setItem("profile", JSON.stringify(userProfile));
    },
    onError: (error) => console.error("Login Failed:", error),
  });

  const logOut = () => {
    googleLogout();
    setUser(null);
    setProfile(null);
    localStorage.removeItem("user");
    localStorage.removeItem("profile");
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedProfile = localStorage.getItem("profile");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: user as TokenClientConfig, profile, login, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
