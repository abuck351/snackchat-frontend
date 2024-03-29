import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

// Interface
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginPage() {
  return (
    <>
      <h1 className="brand-text text-center">
        <FontAwesomeIcon icon="sign-in-alt" /> Login
      </h1>
      <hr />
      <LoginForm />
      <Link className="text-center" to="/signup">
        <p className="py-2">Don't have an account? Register here!</p>
      </Link>
    </>
  );
}
