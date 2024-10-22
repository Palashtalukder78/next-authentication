import React from "react";
import SocilaLogin from "./components/SocilaLogin";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export default async function LoginForm (){
  const session = await auth();
  if (session?.user) redirect("/user");
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-purple-500 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300"
            >
              LOGIN
            </button>
          </div>
        </form>
        <div className="text-center mt-4 my-2">
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </div>
        <hr />
        <SocilaLogin />
      </div>
    </div>
  );
};

