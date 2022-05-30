import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../../App";
import Navbar from "../Navbar";
import LoginForm from "./LoginForm";

export const LoginContex = createContext();

export default function Login() {
  const navigate = useNavigate();
  const { onSuccess } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function onLoginFormSuccess() {
     onSuccess();
     navigate("/list");
  } 

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <LoginContex.Provider
      value={{
        email,
        password,
        onEmailChange,
        onPasswordChange,
        setError,
        error
      }}
    >
      <div className="h-screen">
        <Navbar />
        <LoginForm onSuccess={onLoginFormSuccess}/>
      </div>
    </LoginContex.Provider>
  );
}
