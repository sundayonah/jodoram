'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import Image from 'next/image';
// import Logo from ""

const Header = () => {
   const menuItems = [
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about-us' },
      { name: 'Projects', url: '/projects' },
      { name: 'Events', url: '/events' },
      { name: 'Contact Us', url: '/contactUs' },
   ];

   // State to manage the mobile menu visibility
   const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

   // Function to toggle mobile menu visibility
   const toggleMobileMenu = () => {
      setMobileMenuVisible(!mobileMenuVisible);
   };

   return (
      <>
         <main className="w-full flex justify-between items-center fixed top-0 bg-[#fff] backdrop-blur-2xl shadow-lg h-20 z-20">
            <div className="flex w-full p-4 px-8 justify-between items-center shadow-custom">
               <Link href="/" className=" text-bold">
                  <Image
                     src="/assets/sustainability.jpg"
                     width={50}
                     height={40}
                     alt="logo"
                     className="rounded-md"
                  />
               </Link>
               {/* <div> */}

               {/* Mobile menu */}
               {mobileMenuVisible ? (
                  <div className="lg:hidden flex flex-col  space-y-2 bg-[#fff] p-4  absolute top-14 right-0 w-48 shadow-2xl">
                     {menuItems.map((menu) => (
                        <div key={menu.name}>
                           <Link href={menu.url} className="text-[#201f54]">
                              {menu.name}
                           </Link>
                        </div>
                     ))}
                     {/* <button className="text-white bg-[#2d30f0] px-5 py-2 rounded-md">
                        Join Community
                     </button> */}
                  </div>
               ) : (
                  <>
                     <div className="hidden lg:flex space-x-5 justify-center items-center">
                        {menuItems.map((menu) => (
                           <div key={menu.name}>
                              <Link href={menu.url} className="text-[#201f54]">
                                 {menu.name}
                              </Link>
                           </div>
                        ))}
                     </div>
                  </>
               )}
               <button
                  className=" lg:hidden text-gray-500 focus:outline-none"
                  onClick={toggleMobileMenu}
               >
                  {mobileMenuVisible ? <X /> : <Menu />}
               </button>
            </div>
            {/* </div> */}
         </main>
      </>
   );
};

export default Header;
