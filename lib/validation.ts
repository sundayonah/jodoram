import { z } from 'zod';

export const EventsSchema = z.object({
   title: z.enum(['Mr', 'Mrs', 'Ms', 'Dr', 'Prof']),
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

export const ContactUsSchema = z.object({
   firstname: z.string().min(1, 'First name is required'),
   lastname: z.string().min(1, 'Last name is required'),
   organization: z.string().min(1, 'Organization is required'),
   telephone: z.string().min(10, 'Telephone is required'),
   // .regex(/^\+?[1-9]\d{1,14}$/, 'Telephone must be valid'),
   email: z.string().email('Email must be valid'),
   reason: z
      .string()
      .min(
         10,
         'Please provide more details about your reason for contacting us'
      ),
});

export type ContactUsForm = z.infer<typeof ContactUsSchema>;
