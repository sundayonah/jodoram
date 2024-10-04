import { EventsSchema } from '@/lib/validation';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const prisma = new PrismaClient();

export const fetchCountries = async () => {
   const response = await fetch('https://restcountries.com/v3.1/all');
   if (!response.ok) {
      throw new Error('Failed to fetch countries');
   }
   const data = await response.json();
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   return data.map((country: any) => ({
      name: country.name.common,
      code: country.cca2,
   }));
};

export const fetchStatesByCountry = async (countryCode: string) => {
   const response = await fetch(
      // `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${countryCode}/regions`,
      `http://api.geonames.org/childrenJSON?geonameId=${countryCode}&username=onah`,
      {
         // headers: {
         //    'X-RapidAPI-Key':
         //       'b84e072381mshe14c281e80334f7p19c58fjsna482dd5485a8', // Replace with your API key
         //    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
         // },
      }
   );

   if (!response.ok) {
      throw new Error('Failed to fetch states');
   }

   const data = await response.json();
   console.log(data);
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   return data.data.map((state: any) => state.name);
};

export const enrolForEvent = async (data: z.infer<typeof EventsSchema>) => {
   try {
      // Validate the input data using the Zod schema
      EventsSchema.parse(data);

      // Save event data to the database using Prisma
      const newEvent = await prisma.event.create({
         data: {
            title: data.title ?? '',
            firstname: data.firstname,
            surname: data.surname,
            company: data.company,
            email: data.email,
            country: data.country, // New field
            state: data.state, // New field
            phone: data.phone,
            exhibitionBoot: data.exhibitionBoot,
            displayTags: data.displayTags,
            createdAt: data.createdAt || new Date().toISOString(), // Optional field
         },
      });

      console.log('New event created:', newEvent); // Log the newly created event

      // Revalidate the path if required (Next.js ISR)
      revalidatePath('/');

      return { success: true, message: 'Event Created successfully!' };
   } catch (error) {
      console.error('Error creating event:', error);
      throw new Error('Failed to create event');
   } finally {
      await prisma.$disconnect();
   }
};
