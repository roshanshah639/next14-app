import React from "react";

const UserProfile = ({ params }: { params: { id: string } }) => {
  return (
    <div className="container mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4">
        User Profile
        <span className="text-3xl font-bold bg-orange-500 rounded-md px-3 py-2 text-white ml-3">
          {params.id}
        </span>
      </h1>
      <div className="text-lg text-gray-800 mb-4">
        <p>
          Welcome to the user profile page! Here, you can find information about
          user {params.id}.
        </p>
      </div>
      {/* Add more sections and details as needed */}
    </div>
  );
};

export default UserProfile;
