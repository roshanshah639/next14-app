"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    username: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup Successful", response.data);

      router.push("/login");
    } catch (error: any) {
      console.log("Signup Failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-2xl m-4">{loading ? "Processing..." : "Signup"}</p>
      <div className="flex flex-col items-center justify-center">
        {/* Username */}
        <label className=" block text-gray-500 text-xl" htmlFor="username">
          Username
        </label>
        <input
          className="border border-gray-300 rounded-md px-5 py-2 m-2 focus:outline-none focus:bg-gray-150"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
        />

        {/* Email */}
        <label className=" block text-gray-500 text-xl" htmlFor="email">
          Email
        </label>
        <input
          className="border border-gray-300 rounded-md px-5 py-2 m-2 focus:outline-none focus:bg-gray-150"
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />

        {/* Password */}
        <label className=" block text-gray-500 text-xl" htmlFor="password">
          Password
        </label>
        <input
          className="border border-gray-300 rounded-md px-5 py-2 m-2 focus:outline-none focus:bg-gray-150"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />

        <button
          className="border border-orange-300 bg-orange-500 text-white rounded-full px-10 py-2 mt-5 mb-3 focus:outline-none focus:bg-orange-700"
          onClick={onSignup}
        >
          {buttonDisabled ? "No Signup" : "Signup"}
        </button>
      </div>
      <p className="text-gray-500">
        Already have an account?{" "}
        <Link className="text-blue-500" href="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
