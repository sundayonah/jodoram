'use client';

import React, { useEffect, useState } from 'react';
import {
   enrolForEvent,
   fetchCountries,
   fetchStatesByCountry,
} from '@/actions/actions';
import { Events, EventsSchema } from '@/lib/validation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';

type Country = {
   code: string;
   name: string;
};

const EventPage = () => {
   const [countries, setCountries] = useState<Country[]>([]);
   const [states, setStates] = useState([]);
   const [selectedCountry, setSelectedCountry] = useState('');

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<Events>({
      resolver: zodResolver(EventsSchema),
   });

   const onSubmit = async (data: Events) => {
      console.log(data, 'data');
      try {
         await enrolForEvent(data);
      } catch (error) {
         console.error('Error submitting form:', error);
      } finally {
      }
   };

   // Fetch countries on component mount
   useEffect(() => {
      const loadCountries = async () => {
         const countriesData = await fetchCountries();
         setCountries(countriesData);
      };

      loadCountries();
   }, []);

   // Fetch states when a country is selected
   const onCountryChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
      const countryCode = e.target.value;
      setSelectedCountry(countryCode);

      if (countryCode) {
         const statesData = await fetchStatesByCountry(countryCode);
         setStates(statesData);
      } else {
         setStates([]);
      }
   };

   return (
      <div className="mt-44">
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg space-y-6"
         >
            <div>
               <label className="block text-gray-700 font-semibold">
                  Title
               </label>
               <select
                  {...register('title')}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               >
                  <option value="">Select a title</option>{' '}
                  {/* Placeholder option */}
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                  <option value="Prof">Prof</option>
               </select>
               {errors.title && (
                  <p className="text-red-500 text-sm mt-1">
                     {errors.title.message}
                  </p>
               )}
            </div>

            <div>
               <label className="block text-gray-700 font-semibold">
                  First Name
               </label>
               <input
                  {...register('firstname')}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
               {errors.firstname && (
                  <p className="text-red-500 text-sm mt-1">
                     {errors.firstname.message}
                  </p>
               )}
            </div>

            <div>
               <label className="block text-gray-700 font-semibold">
                  Surname
               </label>
               <input
                  {...register('surname')}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
               {errors.surname && (
                  <p className="text-red-500 text-sm mt-1">
                     {errors.surname.message}
                  </p>
               )}
            </div>

            <div>
               <label className="block text-gray-700 font-semibold">
                  Company
               </label>
               <input
                  {...register('company')}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
               {errors.company && (
                  <p className="text-red-500 text-sm mt-1">
                     {errors.company.message}
                  </p>
               )}
            </div>

            <div>
               <label className="block text-gray-700 font-semibold">
                  Email
               </label>
               <input
                  {...register('email')}
                  type="email"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
               {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                     {errors.email.message}
                  </p>
               )}
            </div>
            <div>
               <label className="block text-gray-700 font-semibold">
                  Country
               </label>
               <select
                  {...register('country')}
                  onChange={onCountryChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                     <option key={country.code} value={country.code}>
                        {country.name}
                     </option>
                  ))}
               </select>
               {errors.country && (
                  <p className="text-red-500 text-sm mt-1">
                     {errors.country.message}
                  </p>
               )}
            </div>

            {/* State Select */}
            <div>
               <label className="block text-gray-700 font-semibold">
                  State
               </label>
               <select
                  {...register('state')}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!selectedCountry || states.length === 0}
               >
                  <option value="">Select a state</option>
                  {states.map((state) => (
                     <option key={state} value={state}>
                        {state}
                     </option>
                  ))}
               </select>
               {errors.state && (
                  <p className="text-red-500 text-sm mt-1">
                     {errors.state.message}
                  </p>
               )}
            </div>

            <div>
               <label className="block text-gray-700 font-semibold">
                  Phone
               </label>
               <input
                  {...register('phone')}
                  type="tel"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               />
               {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                     {errors.phone.message}
                  </p>
               )}
            </div>

            <div className="w-full flex justify-between items-center space-x-3">
               <div className="w-full">
                  <label className="block text-gray-700 font-semibold">
                     Exhibition Booth
                  </label>
                  <select
                     {...register('exhibitionBoot')}
                     className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                     <option value="Yes">Yes</option>
                     <option value="No">No</option>
                  </select>
                  {errors.exhibitionBoot && (
                     <p className="text-red-500 text-sm mt-1">
                        {errors.exhibitionBoot.message}
                     </p>
                  )}
               </div>

               <div className="w-full">
                  <label className="block text-gray-700 font-semibold">
                     Display Tags
                  </label>
                  <select
                     {...register('displayTags')}
                     className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                     <option value="Yes">Yes</option>
                     <option value="No">No</option>
                  </select>
                  {errors.displayTags && (
                     <p className="text-red-500 text-sm mt-1">
                        {errors.displayTags.message}
                     </p>
                  )}
               </div>
            </div>

            <button
               type="submit"
               className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
               Submit
            </button>
         </form>
      </div>
   );
};

export default EventPage;
