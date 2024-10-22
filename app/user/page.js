import React from "react";
import Navigation from "../components/Navigation";

export default function UserInfo() {
  return (
    <div className="flex flex-col h-screen">
      {/* Body Content */}
      <div className="flex-grow p-4">
        <h1 className="text-center text-xl">Body</h1>
        {/* Body content can go here */}
      </div>

      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
}

// import Image from "next/image";
// import React, { useState } from "react";
// import userThumb from "../../public/user1.png";
// import Link from "next/link";

// export default async function UserInfo() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   return (
//     <div className="flex flex-col h-screen">
//       {/* Body Content */}
//       <div className="flex-grow p-4">
//         <h1 className="text-center text-xl">Body</h1>
//       </div>

//       {/* Bottom Navigation */}
//       <div className="fixed bottom-0 left-0 right-0 bg-blue-700 flex justify-between items-center p-4 mx-4 mb-3 sm:mx-8 md:mx-24 lg:mx-36 xl:mx-72 rounded-3xl">
//         {/* Hamburger Menu for Mobile */}
//         <div className="flex space-x-6 mx-6 sm:hidden">
//           <button onClick={toggleMenu} className="text-white">
//             <div className="space-y-2">
//               <span className="block w-8 h-0.5 bg-white"></span>
//               <span className="block w-8 h-0.5 bg-white"></span>
//               <span className="block w-8 h-0.5 bg-white"></span>
//             </div>
//           </button>
//         </div>

//         {/* Menu items for larger screens */}
//         <div className="hidden sm:flex space-x-6 mx-6">
//           <Link href="/" className="text-white">
//             Home
//           </Link>
//         </div>

//         {/* Centered Icon */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6 bg-white rounded-full md:p-2 lg:p-1">
//           <Image
//             src={userThumb}
//             alt="Centered Icon"
//             width={60}
//             height={60}
//             className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
//           />
//         </div>

//         <div className="hidden sm:flex space-x-6 mx-6">
//           <Link className="text-white" href="/">
//             Home
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Menu - shown when menu is open */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center sm:hidden">
//           <Link href="/" className="text-white">
//             Home
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }
