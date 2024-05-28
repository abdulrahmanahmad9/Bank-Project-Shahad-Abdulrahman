import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllUsers } from "../api/Auth";

const User = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  return (
    <div className="bg-white-900 min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-[90%] overflow-scroll w-full px-6 py-8 bg-white rounded-md shadow-md max-h-[80%]">
        <h2 className="text-3xl text-green font-semibold mb-6 ">Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {users?.map((user) => (
            <div
              key={user.id}
              className="bg-white-700 p-6 rounded-md flex flex-col items-center justify-center"
            >
              <img
                src={user.image}
                alt="User"
                className="w-24 h-24 rounded-full mb-4"
              />
              <div className="text-center">
                <h3 className="text-lg text-green font-semibold mb-2">
                  {user.name}
                </h3>
                <p className="text-green-300">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
