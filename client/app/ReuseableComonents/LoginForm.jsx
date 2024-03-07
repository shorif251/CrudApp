"use client";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from 'react-dom';
import { SubmitHandler } from "../serverAction/action";
import Button from "./Button";

const initialState= {
  message: ""
}

export default function LoginForm() {
  const [state, formAction] = useFormState(SubmitHandler, initialState) 
  const [isPassShow, setIsPassShow] = useState(false);
  console.log(state)
  return (
    <form
      action={formAction}
      className="px-4 py-2 shadow bg-slate-900 shadow-gray-400 rounded-md md:max-w-xl max-w-sm mx-auto md:mt-0 mt-3 "
    >
      <h1 className="text-center text-2xl text-green-600">
        Login with account
      </h1>
      {state.message? setTimeout(()=>{
        <div className={` ${state.message ? 'block': 'hidden'}   py-2 px-4 text-red-400 ring-2 ring-red-700`}>
        <p>{state?.message}</p>
      </div>
      }, 4000) : state.message = "" }
      <div className=" my-8 ">
        <input
          type="email"
          name="email"
          placeholder="example@mail.com"
          className="w-full px-4 py-2 rounded bg-inherit outline-none ring-1 ring-blue-600 hover:ring-green-700"
          required
        />
      </div>

      <div className=" grid grid-cols-12 bg-slate-600 rounded ring-1 ring-blue-600 hover:ring-green-700">
        <div className=" col-start-1 col-end-11 ">
          <input
            type={!isPassShow ? "password" : "text"}
            name="password"
            placeholder="********"
            className="w-full px-4 py-2 rounded bg-inherit outline-none"
            required
          />
        </div>
        <Button
          type="button"
          btnStyle="col-start-11 col-end-13 outline-none  "
          onClick={() => setIsPassShow(!isPassShow)}
          btnName={!isPassShow ? "Show" : "Hide"}
        />
      </div>

      <div className="flex flex-col my-4">
        <span className="text-red-400 text-base text-center font-mono">
          <Link href="#">Forget Password</Link>
        </span>

        <blockquote className="text-blue-500 hover:text-green-600 md:text-xl text-lg font-serif transition-all">
          <Link href="/registration">Don't you have any user's account</Link>
        </blockquote>
      </div>

      <div className="flex justify-center my-4">
          <button
            type="submit"
            className={`bg-green-700 ring-1 ring-blue-600 hover:ring-green-600 px-4 py-2 rounded-md text-slate-50 hover:text-green-700 hover:bg-slate-50`}
          >
            Login
          </button>
      </div>
    </form>
  );
}
