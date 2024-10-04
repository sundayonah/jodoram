import React from 'react';

const Hero = () => {
   return (
      <div className="">
         <div className="bg-blue-800 mt-20">
            <div className="max-w-5xl mx-auto text-center py-4">
               <h1 className="text-6xl md:text-9xl text-white font-bold">
                  SEF-2024
               </h1>
               <span className="text-xl md:text-3xl text-white font-bold">
                  SUSTAINABLE ENERGY FORUM
               </span>
            </div>
         </div>
         <div className="max-w-5xl mx-auto text-center pt-2">
            <span className="text-blue-500 text-xl md:text-3xl font-bold">
               SUSTAINABLE ENERGY SECURITY,
            </span>
            <h1 className="text-blue-950 text-2xl md:text-3xl font-extrabold px-4">
               PAN-AFRICAN POLICY INITIATIVE
            </h1>
         </div>
         <div className="pt-3">
            <h1 className="text-center text-lg md:text-2xl text-white font-bold bg-blue-800 py-3">
               4th - 8th NOVEMBER 2024
            </h1>
         </div>
         <div className="flex justify-center items-center space-x-3 pt-3">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.5}
               stroke="currentColor"
               className="w-8 h-8 text-blue-950"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
               />
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
               />
            </svg>
            <h1 className="text-blue-950 text-center text-lg md:text-2xl font-bold py-3">
               CENTRAL BUSINESS DISTRICT, ABUJA
            </h1>
         </div>
      </div>
   );
};

export default Hero;
