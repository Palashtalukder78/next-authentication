import React from "react";
import Image from "next/image";
import { auth } from "../../auth";
import { redirect } from "next/navigation";
import Logout from "../components/Logout";
import Link from "next/link";
export default async function Navigation() {
  const session = await auth();
  if (!session?.user) redirect("/");
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-700 flex justify-between items-center p-4 mx-4 mb-3 sm:mx-8 md:mx-24 lg:mx-36 xl:mx-72 rounded-3xl">
      {/* Menu items */}
      <div className="flex space-x-6 mx-6">
        <Link className="text-white" href="/">Home</Link>
      </div>

      {/* Centered Icon */}
      {/* <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6 bg-white p-1 rounded-full">
          <Image src={userThumb} alt="Centered Icon" width="60" height="60" />
        </div> */}

      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6 bg-blue-700 rounded-full lg:p-1 border-2 border-blue-700">
        <Image
          src={session?.user?.image}
          alt="Centered Icon"
          width={60}
          height={60}
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full"
        />
      </div>

      <div className="flex space-x-6 mx-6 ">
        <h4 className="text-white my-0">{session?.user?.name}</h4>
        <Logout />
      </div>
    </div>
  );
}
