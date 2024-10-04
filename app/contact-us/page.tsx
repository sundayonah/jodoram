'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactUsSchema, ContactUsForm } from '@/lib/validation';
import { submitContactForm } from '@/actions/actions';
import { toast } from 'react-hot-toast';

const ContactUsPage = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<ContactUsForm>({
      resolver: zodResolver(ContactUsSchema),
   });

   const onSubmit = async (data: ContactUsForm) => {
      console.log(data, 'data in ui');
      try {
         const result = await submitContactForm(data);
         toast.success('Submit successfully!');
         reset();

         console.log(result, 'result');
         //  setFormStatus(result.message);
      } catch {
         toast.error('Failed to submit the form');

         //  setFormStatus('Failed to submit the form.');
      }
   };

   return (
      <div className="max-w-lg mx-auto md:mt-44 mt-28 p-8 bg-white shadow-md rounded-lg">
         <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
         {/* {formStatus && (
            <p
               className={`text-center mb-6 ${
                  formStatus.includes('success')
                     ? 'text-green-500'
                     : 'text-red-500'
               }`}
            >
               {formStatus}
            </p>
         )} */}
         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
            <div>
               <label className="block text-gray-700">First Name</label>
               <input
                  {...register('firstname')}
                  className={`w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 ${
                     errors.firstname ? 'border-red-500' : 'border-gray-300'
                  }`}
               />
               {errors.firstname && (
                  <p className="text-red-500 text-sm mt-1">
                     {errors.firstname.message}
                  </p>
               )}
            </div>

            <div>
               <label className="block text-gray-700">Last Name</label>
               <input
                  {...register('lastname')}
                  className={`w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 ${
                     errors.lastname ? 'border-red-500' : 'border-gray-300'
                  }`}
               />
               {errors.lastname && (
                  <p className="text-red-500 text-sm mt-1">
                     {errors.lastname.message}
                  </p>
               )}
            </div>

            <div>
               <label className="block text-gray-700">Organization</label>
               <input
                  {...register('organization')}
                  className={`w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 ${
                     errors.organization ? 'border-red-500' : 'border-gray-300'
                  }`}
               />
               {errors.organization && (
                  <p className="text-red-500 text-sm mt-1">
                     {errors.organization.message}
                  </p>
               )}
            </div>

            <div>
               <label className="block text-gray-700">Telephone</label>
               <input
                  {...register('telephone')}
                  className={`w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 ${
                     errors.telephone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  type="tel"
               />
               {errors.telephone && (
                  <p className="text-red-500 text-sm mt-1">
                     {errors.telephone.message}
                  </p>
               )}
            </div>

            <div>
               <label className="block text-gray-700">Email</label>
               <input
                  {...register('email')}
                  className={`w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 ${
                     errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  type="email"
               />
               {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                     {errors.email.message}
                  </p>
               )}
            </div>

            <div>
               <label className="block text-gray-700">Reason for Contact</label>
               <textarea
                  {...register('reason')}
                  className={`w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 ${
                     errors.reason ? 'border-red-500' : 'border-gray-300'
                  }`}
                  rows={4}
               />
               {errors.reason && (
                  <p className="text-red-500 text-sm mt-1">
                     {errors.reason.message}
                  </p>
               )}
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

export default ContactUsPage;
