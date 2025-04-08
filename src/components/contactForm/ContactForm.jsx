import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Mail } from 'lucide-react';

const ContactForm = () => {
  const schema = z.object({
    firstname: z.string().nonempty("Please enter your first name."),
    lastname: z.string().nonempty("Please enter your last name."),
    email: z.string().nonempty("Please enter your email address.").email(),
    phonenumber: z.string().nonempty("Please enter your phone number."),
    message: z.string().nonempty("Please enter your message."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        // toast.success("mail send successfully")
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                 <Mail className="w-10 h-10 text-red-600"/>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {data.firstname} {data.lastname}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                     mail send successfully
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ))
        reset();
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong.");
    }
  };
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-10 my-10">
        <h2 className="text-3xl font-semibold">Get In Touch</h2>
        <form
          action=""
          className="w-11/12 sm:w-4/5 md:w-3/5 flex flex-col items-center justify-center gap-7 p-5 md:p-7  shadow-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-3">
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-1">
              <label
                htmlFor="firstName"
                className="capitalize font-bold text-base"
              >
                first name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-5 py-3 rounded-md outline-none focus:border-[1px] focus:bg-white focus:border-primary bg-zinc-100 placeholder:text-gray-500 placeholder:text-base"
                placeholder="Enter your first name"
                {...register("firstname")}
              />
              {errors.firstname && (
                <div className="text-red-500 py-1 text-base">
                  {errors.firstname.message}
                </div>
              )}
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-1">
              <label
                htmlFor="fullName"
                className="capitalize font-bold text-base"
              >
                last name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-5 py-3 rounded-md outline-none focus:border-[1px] focus:bg-white focus:border-primary bg-zinc-100 placeholder:text-gray-500 placeholder:text-base"
                placeholder="Enter your last name"
                {...register("lastname")}
              />
              {errors.lastname && (
                <div className="text-red-500 py-1 text-base">
                  {errors.lastname.message}
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-3">
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-1">
              <label htmlFor="email" className="capitalize font-bold text-base">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-5 py-3 rounded-md outline-none focus:border-[1px] focus:bg-white focus:border-primary bg-zinc-100 placeholder:text-gray-500 placeholder:text-base"
                placeholder="Enter your email"
                {...register("email")}
              />
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-1">
              <label
                htmlFor="fullName"
                className="capitalize font-bold text-base"
              >
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-5 py-3 rounded-md outline-none focus:border-[1px] focus:bg-white focus:border-primary bg-zinc-100 placeholder:text-gray-500 placeholder:text-base"
                placeholder="Enter your phone number"
                {...register("phonenumber")}
              />
              {errors.phonenumber && (
                <div className="text-red-500 py-1 text-base">
                  {errors.phonenumber.message}
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-1">
            <label htmlFor="message" className="capitalize font-bold text-base">
              message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full px-5 py-3 rounded-md outline-none min-h-40 focus:border-[1px] focus:bg-white focus:border-primary bg-zinc-100 placeholder:text-gray-500 placeholder:text-base resize-none"
              placeholder="Write your message..."
              {...register("message")}
            ></textarea>
            {errors.message && (
              <div className="text-red-500">{errors.message.message}</div>
            )}
          </div>
          <div className="flex items-center justify-start">
            <button
              disabled={isSubmitting}
              type="submit"
              className="text-base capitalize w-full  px-7 py-3 rounded-lg outline-none cursor-pointer transform transition-all duration-100 ease-in-out bg-primary hover:bg-primaryLight text-white"
            >
              {isSubmitting ? "...Loading" : "send message"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactForm;

