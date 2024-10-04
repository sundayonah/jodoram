import { z } from 'zod';

export const EventsSchema = z.object({
   title: z.enum(['Mr', 'Mrs', 'Ms', 'Dr', 'Prof']).optional(),
   firstname: z.string().min(2, 'First name is required'),
   surname: z.string().min(2, 'Surname is required'),
   company: z.string().min(2, 'Company or Organization is required'),
   email: z.string().email('Invalid email address'),
   country: z.string().min(1, 'Country is required'), // Updated to 'country'
   state: z.string().min(1, 'State is required'), // New 'state' field
   phone: z.string().min(10, 'Phone is required'),
   exhibitionBoot: z.enum(['Yes', 'No']),
   displayTags: z.enum(['Yes', 'No']),
   createdAt: z.string().optional(),
});

export type Events = z.infer<typeof EventsSchema>;
