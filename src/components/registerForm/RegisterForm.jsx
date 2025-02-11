import React from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm = () => {
  const navigate = useNavigate();
  const schema = z.object({
    username: z
      .string()
      .nonempty("Please enter a username.")
      .min(8, "Username must be at least 8 characters long."),

    firstname: z
      .string()
      .nonempty("Please enter your first name.")
      .min(1, "First name is required."),

    lastname: z
      .string()
      .nonempty("Please enter your last name.")
      .min(8, "Last name must be at least 8 characters long."),

    email: z
      .string()
      .nonempty("Please enter your email address.")
      .email("Please enter a valid email address."),

    password: z
      .string()
      .nonempty("Please enter a password.")
      .min(8, "Password must be at least 8 characters long."),

    confirmPassword: z
      .string()
      .nonempty("Please confirm your password.")
      .min(8, "Confirm password must be at least 8 characters long."),
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
    await new Promise((reslove) => setTimeout(reslove, 1000));
    console.log(data);
    reset();
  };

  function handleClick() {
    navigate("/login");
  }
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-16 my-10">
        <div className="text-center">
          <h2 className="text-3xl font-semibold my-1">Register</h2>
          <span className="text-sm">
            Register and discover a great amount of new opportunities!
          </span>
        </div>
        <div className="w-full flex items-center justify-center">
          <form
            action=""
            className="w-11/12 sm:w-4/5 md:w-1/2 lg:w-2/5 flex flex-col gap-5 shadow-2xl p-5 md:p-7"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <label htmlFor="" className="capitalize text-sm font-medium">
                user name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 rounded-xs outline-none focus:border-[1px] focus:bg-white focus:border-primary bg-zinc-100 placeholder:text-gray-500 placeholder:text-sm"
                placeholder="Enter your user name"
                {...register("username")}
              />
              {errors.username && (
                <div className="text-base text-red-500">
                  {errors.username.message}
                </div>
              )}
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <label htmlFor="" className="capitalize text-sm font-medium">
                first name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 rounded-xs outline-none focus:border-[1px] focus:bg-white focus:border-primary bg-zinc-100 placeholder:text-gray-500 placeholder:text-sm"
                placeholder="Enter your first name"
                {...register("firstname")}
              />
              {errors.firstname && (
                <div className="text-base text-red-500">
                  {errors.firstname.message}
                </div>
              )}
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <label htmlFor="" className="capitalize text-sm font-medium">
                last name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 rounded-xs outline-none focus:border-[1px] focus:bg-white focus:border-primary bg-zinc-100 placeholder:text-gray-500 placeholder:text-sm"
                placeholder="Enter your last name"
                {...register("lastname")}
              />
              {errors.lastname && (
                <div className="text-base text-red-500">
                  {errors.lastname.message}
                </div>
              )}
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <label htmlFor="" className="capitalize text-sm font-medium">
                e-mail address<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 rounded-xs outline-none focus:border-[1px] focus:bg-white focus:border-primary bg-zinc-100 placeholder:text-gray-500 placeholder:text-sm"
                placeholder="Enter your email address"
                {...register("email")}
              />
              {errors.email && (
                <div className="text-base text-red-500">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <label htmlFor="" className="capitalize text-sm font-medium">
                password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="w-full px-5 py-3 rounded-xs outline-none focus:border-[1px] focus:bg-white focus:border-primary bg-zinc-100 placeholder:text-gray-500 placeholder:text-sm"
                placeholder="Enter your password"
                {...register("password")}
                autoComplete="on"
              />
              {errors.password && (
                <div className="text-base text-red-500">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <label htmlFor="" className="capitalize text-sm font-medium">
                confirm password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="w-full px-5 py-3 rounded-xs outline-none focus:border-[1px] focus:bg-white focus:border-primary bg-zinc-100 placeholder:text-gray-500 placeholder:text-sm"
                placeholder="Enter your confirm password"
                {...register("confirmPassword")}
                autoComplete="on"
              />
              {errors.confirmPassword && (
                <div className="text-base text-red-500">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2">
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full md:w-1/2 capitalize text-white text-base py-3 rounded-md outline-none cursor-pointer transform transition-all duration-100 ease-in-out bg-primary hover:bg-primaryLight"
              >
                {isSubmitting ? "...loading" : "register"}
              </button>
              <button
                onClick={handleClick}
                className="w-full md:w-1/2 capitalize text-gray-500 text-base py-3 rounded-md outline-none cursor-pointer bg-gray-200"
              >
                login
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
