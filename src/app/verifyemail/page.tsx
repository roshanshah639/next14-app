"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const VerifyEmail = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Verify Email</h1>
      <h2 className="text-2xl">{token ? `${token}` : "Invalid Token"}</h2>

      {verified && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Email verified Successfully</h2>
          <Link className="text-blue-500 font-bold" href="/login">
            Login
          </Link>
        </div>
      )}
      {error && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-red-500">Opps! Error</h2>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
