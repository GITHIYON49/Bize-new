import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { div } from "motion/react-client";
const LoginForm = () => {
  const schema = z.object({
    username: z
      .string()
      .nonempty("Username is required.")
      .min(5, "Username must be at least 5 characters long."),
    password: z
      .string()
      .nonempty("Password is required.")
      .min(8, "Password must be at least 8 characters long."),
  });
  const {register,handleSubmit,formState:{
    errors,
    isSubmitting
  },
reset} = useForm({
    resolver:zodResolver(schema)
  })

  const onsubmit = async(data) =>{
    await new Promise((resolve)=>setTimeout(resolve,1000))
    console.log(data);
    reset();

  }
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-12 my-20">
        <div className="text-center">
          <h2 className="text-3xl capitalize font-semibold my-1">login</h2>
          <span>Hi, Welcome back</span>
        </div>
        <div className="w-full flex items-center justify-center">
          <form
            action=""
            className="w-11/12 sm:w-3/5 md:w-1/2 lg:w-1/3 flex flex-col gap-7 items-center justify-center p-5 md:p-7 shadow-2xl"
            onSubmit={handleSubmit(onsubmit)}
          >
            <div className="w-full flex flex-col items-center text-start justify-center gap-2">
              <label
                htmlFor="userName-email"
                className="w-11/12 capitalize text-sm font-medium text-gray-700 text-start"
              >
                Username or E-mail<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="userName-email"
                className="w-full px-5 py-3 rounded-md outline-none focus:border-[1px] focus:bg-white focus:border-primary bg-zinc-100 placeholder:text-gray-500 placeholder:text-base"
                placeholder="Enter your username or email"
                {...register("username")}
              />
              {errors.username && <div className="text-red-500 text-start w-full">{errors.username.message}</div>}
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-2">
              <label
                htmlFor="password"
                className="w-11/12 capitalize text-sm font-medium text-gray-700 text-start"
              >
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-5 py-3 rounded-md outline-none focus:border-[1px] focus:bg-white focus:border-primary bg-zinc-100 placeholder:text-gray-500 placeholder:text-base"
                placeholder="Enter your password"
                {...register("password")}
              />
              {errors.password && <div className="text-red-500 text-start w-full">{errors.password.message}</div>}
            </div>
            <div className="w-3/5">
              <button type="submit" className="capitalize w-full py-3 bg-primary hover:bg-primaryLight transform transition-all duration-100 ease-in-out text-sm rounded-sm  text-white cursor-pointer outline-none">
                {isSubmitting ? "...loading" : "login"}
              </button>
              <span className="block w-full text-gray-500 text-center text-sm cursor-pointer my-5">
                Forgot your password?
              </span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
