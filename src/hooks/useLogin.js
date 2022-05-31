import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

export function useLogin() {
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


  return {
    onLoginFormSuccess,
    email,
    password,
    onEmailChange,
    onPasswordChange,
    setError,
    error,
  };
}
