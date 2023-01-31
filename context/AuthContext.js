import React, { createContext, useContext, useState, useEffect } from "react";
import Router from "next/router";
const Context = createContext();

export const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // state get data user from localStorage
  const [field, setField] = useState({}); // state input data login from user
  const [msg, setMsg] = useState(false); // state message
  const [loading, setLoading] = useState(false); // state loading
  const [msgSuccess, setMsgSuccess] = useState(false); // state message modal from frontend
  const [msgErr, setMsgErr] = useState(false, ""); // state message modal from backend
  /* function register from api */
  const doRegist = async (e) => {
    e.preventDefault();
    setLoading(true);
    const req = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(field),
    });
    const res = await req.json();

    /* validate error message from api */
    if (!req.ok) {
      setLoading(false);
      setMsgErr(res.msg);
    }
    /* validate success message */
    if (req.ok) {
      setLoading(false);
      setMsgSuccess("Register Successfuly, please login!");
    }

    e.target.reset();
  };

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage) {
      const user = localStorage.getItem("user");
      if (user) {
        setCurrentUser(JSON.parse(user));
      }
    }
  }, []);

  // Menyimpan data ke local storage saat state berubah

  /* function fetch login from api */
  const Auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    const req = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(field),
    });
    const res = await req.json();
    const user = res.data.name;
    if (typeof window !== "undefined" && localStorage) {
      localStorage.setItem("user", JSON.stringify(user));
    }

    /* validate direct page with coocie jwt */
    if (res.token) {
      Router.push("/dashboard");
      setLoading(false);
    }

    /* validate message from api */
    if (!res.token) {
      setLoading(false);
      setMsg(res.msg);
    }
    e.target.reset();
  };
  return (
    <Context.Provider
      value={{
        setMsgErr,
        msgErr,
        msgSuccess,
        setMsgSuccess,
        loading,
        doRegist,
        msg,
        setMsg,
        setCurrentUser,
        currentUser,
        setField,
        field,
        Auth,
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuthContext = () => useContext(Context);
