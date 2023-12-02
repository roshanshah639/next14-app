"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState("Nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };
  return (
    <div className="min-h-screen container mx-auto mt-1 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-center mb-6">
        <img
          src="https://pbs.twimg.com/profile_images/1622254753425264640/RxeWXnCU_400x400.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full mr-4"
        />
        <div>
          <h1 className="text-4xl font-bold">Roshan Shah</h1>
          <p className="text-gray-600 text-lg">Software Developer</p>
          <div className="flex items-center mt-2">
            <a
              href="https://twitter.com/your-twitter-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <i className="fab fa-twitter text-blue-400 text-xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <i className="fab fa-linkedin-in text-blue-600 text-xl"></i>
            </a>
            {/* Add more social media icons/links as needed */}
          </div>
        </div>
      </div>
      <div className="text-lg text-gray-800 mb-4">
        <p>
          Hello! I'm Roshan Shah, a passionate software developer with expertise
          in creating web applications. I love to code and solve challenging
          problems.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-bold mb-2">Skills</h2>
          <ul>
            <li>JavaScript (React, Node.js)</li>
            <li>HTML, CSS</li>
            <li>Database Management (MongoDB, MySQL)</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-bold mb-2">Experience</h2>
          <p>
            <strong>Software Developer</strong> - ABC Company (2020 - Present)
          </p>
          {/* Add more experience details as needed */}
        </div>
      </div>
      <h2 className="text-3xl font-bold mt-8 bg-green-500 text-white rounded-md px-3 py-2">
        {data === "Nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <button
        onClick={logout}
        className="bg-orange-500 hover:bg-orange-700 text-white text-xl py-2 px-8 rounded-full mt-4"
      >
        Logout
      </button>
      <br />
      <br />
      <button
        onClick={getUserDetails}
        className="bg-green-500 hover:bg-green-600 text-white text-xl py-2 px-8 rounded-full mt-4"
      >
        Get User Details
      </button>
    </div>
  );
};

export default Profile;
