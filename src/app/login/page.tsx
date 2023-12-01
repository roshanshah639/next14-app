"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login Successful", response.data);
      toast.success("Login Successful");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login Failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-2xl m-4">{loading ? "Processing..." : "Login"}</p>
      <div className="flex flex-col items-center justify-center">
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
          onClick={onLogin}
        >
          {buttonDisabled ? "No Login" : "Login"}
        </button>
      </div>
      <p className="text-gray-500">
        New to Website? {"  "}
        <Link className="text-blue-500" href="/signup">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
