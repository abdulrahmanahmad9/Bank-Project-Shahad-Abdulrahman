import React, { useState } from "react";
import { login } from "../api/Auth";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      navigate("/users");
    },
  });

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-white-800 border-red rounded-md shadow-md">
        <h2 className="text-3xl text-green font-semibold mb-6 flex justify-center">
          Login
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-green text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-green text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-green rounded-md hover:bg-green-600 "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
