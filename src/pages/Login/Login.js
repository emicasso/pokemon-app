import React from "react";
import { createContext } from "react";
import { useLogin } from "../../hooks/useLogin";
import Navbar from "../Navbar";
import LoginForm from "./LoginForm";

export const LoginContex = createContext();

export default function Login() {
  const {
    onLoginFormSuccess,
    email,
    password,
    onEmailChange,
    onPasswordChange,
    setError,
    error,
  } = useLogin();

  return (
    <LoginContex.Provider
      value={{
        email,
        password,
        onEmailChange,
        onPasswordChange,
        setError,
        error,
      }}
    >
      <div className="h-screen">
        <Navbar />
        <LoginForm onSuccess={onLoginFormSuccess} />
      </div>
    </LoginContex.Provider>
  );
}
