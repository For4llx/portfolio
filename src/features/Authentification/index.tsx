import { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const Authentificaiton = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (forName: string) => {
    setCurrentForm(forName);
  };

  return (
    <>
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <SignUp onFormSwitch={toggleForm} />
      )}
    </>
  );
};

export default Authentificaiton;
