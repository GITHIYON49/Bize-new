import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactForm = () => {
  const schema = z.object({
    firstname: z
      .string()
      .nonempty("Please enter your first name.")
      .min(1, "Your name must be at least five characters long."),
    lastname: z
      .string()
      .nonempty("Please enter your last name.")
      .min(5, "Your name must be at least five characters long."),
    email: z
      .string()
      .nonempty("Please enter your email address.")
      .email("Please enter a valid email address."),
    phonenumber: z
      .string()
      .nonempty("Please enter your phone number.")
      .min(10, "Your phone number must be at least ten characters long."),
    message: z
      .string()
      .nonempty("Please enter your message.")
      .min(20, "Your message must be at least twenty characters long."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onsubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-10 my-10">
        <h2 className="text-3xl font-semibold">Get In Touch</h2>
        <form
          action=""
          className="w-11/12 sm:w-4/5 md:w-3/5 flex flex-col items-center justify-center gap-7 p-5 md:p-7  shadow-2xl"
          onSubmit={handleSubmit(onsubmit)}
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

{
  /* <form
          action=""
          className="w-11/12 md:w-[700px] flex flex-col items-center justify-center gap-7 px-10 py-20  shadow-2xl"
          onSubmit={handleSubmit(onsubmit)}
        >
          <div className="w-11/12 md:w-4/5 flex flex-col items-start justify-center">
            <label
              htmlFor="fullName"
              className="capitalize font-bold text-base"
            >
              full name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full border-2 border-gray-300 p-3 rounded-md outline-none"
              placeholder="Enter Your Full Name"
              {...register("name")}
            />
            {errors.name && (
              <div className="text-red-500 py-1 text-base">{errors.name.message}</div>
            )}
          </div>
          <div className="w-11/12 md:w-4/5 flex flex-col items-start justify-center">
            <label htmlFor="email" className="capitalize font-bold text-base">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              className="w-full border-2 border-gray-300 p-3 rounded-md outline-none"
              placeholder="Enter Your Email"
              {...register("email")}
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <div className="w-11/12 md:w-4/5 flex flex-col items-start justify-center">
            <label htmlFor="message" className="capitalize font-bold text-base">
              message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full border-2 border-gray-300 p-3 rounded-md outline-none min-h-40"
              {...register("message")}
            ></textarea>
            {errors.message && (
              <div className="text-red-500">{errors.message.message}</div>
            )}
          </div>
          <div className="w-11/12 md:w-4/5 flex items-center justify-start">
            <button
              disabled={isSubmitting}
              type="submit"
              className="text-base capitalize w-full sm:w-fit px-5 py-3 rounded-lg outline-none cursor-pointer transform transition-all duration-100 ease-in-out bg-secondary hover:bg-primaryLight text-white"
            >
              {isSubmitting ? "...Loading" : "send message"}
            </button>
          </div>
        </form> */
}
