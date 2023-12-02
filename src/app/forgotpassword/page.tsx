"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [requestSent, setRequestSent] = useState(false);
  const [error, setError] = useState(false);

  const sendPasswordResetEmail = async () => {
    try {
      await axios.post("/api/users/forgotpassword", { email });
      setRequestSent(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Forgot Password</h1>

      {!requestSent && !error && (
        <>
          <label htmlFor="email" className="text-xl mt-4">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md p-2"
          />

          <button
            onClick={sendPasswordResetEmail}
            className="bg-blue-500 text-white p-2 mt-4 rounded-md cursor-pointer"
          >
            Send Reset Email
          </button>
        </>
      )}

      {requestSent && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">
            Password reset email sent successfully!
          </h2>
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-red-500">Oops! Error</h2>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
