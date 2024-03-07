"use client";

import { useState } from "react";
import { fetchingPost } from "../service/fetching";

export default function Form({
  encType = "",
  formParts,
  className = "",
  payload=null,
  url="",
  title = "",
  submitName = "Create Account",
  accessToken="",
  onClearField
}) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    try {
      const post = await fetchingPost(
        url, payload,
        {
          Authorization: `Bearer ${accessToken}`,
        }
      );

      const postres = await post.json();
      if(postres.success){
        setResponse("Data was submitted successfully")
        onClearField()
      } 
      else if(!postres.success){
        setResponse(postres.error)
      }
      setIsLoading(false)
      console.log(postres);
    } catch (error) {
      setError("Something went wrong!")
      setIsLoading(false)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`px-4 py-2 shadow shadow-gray-600 rounded ${className}`}
      encType={encType}
    >
      <h1 className="md:text-2xl text-xl text-center text-green-700">
        {title}
      </h1>
      <div>{formParts}</div>
      <div className="flex justify-center">
        <input
          type="submit"
          className="bg-green-700 px-4 py-2 rounded-md text-slate-50 hover:text-green-700 hover:bg-slate-50 transition-all"
          value={isLoading? "Loading..." : submitName}
        />
      </div>
    </form>
  );
}
