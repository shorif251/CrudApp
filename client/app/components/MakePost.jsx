"use client";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import Form from "../ReuseableComonents/Form";

export default function MakePost() {
  const [postData, setPostData] = useState({
    body: "",
    img: null,
  });

  const [data, setData] = useState('')
  const accessToken = getCookie('userAccessToken')
  

  const { body, img } = postData;

  const changeHandler = (event) => {
    const { name, value, files, type } = event.target;

    setPostData({
      ...postData,
      [name]: type === "file" ? files[0] : value,
    });
  };

//creating data
  useEffect(()=>{
    const formData = new FormData();
      formData.append("body", body);
      formData.append("img", img);
      setData(formData)

  }, [postData])

  

  const formParts = (
    <div>
      <textarea
        name="body"
        value={body}
        onChange={changeHandler}
        placeholder="Add Discription"
        className="bg-inherit w-full rounded-md outline-none ring-1 ring-blue-600 hover:ring-green-700 px-4 py-2 my-3 text-base font-mono"
      />

      <input
        className="cursor-pointer w-full px-4 py-2 bg-inherit rounded-md ring-1 ring-blue-600 hover:ring-green-700 mb-4"
        type="file"
        name="img"
        onChange={changeHandler}
      />
    </div>
  );

  const clearField = () =>{
    setPostData({
      body: "",
      img: null,
    })
  }

  return (
    <div>
      <Form
        title="What's on your mind"
        encType="multipart/form-data"
        className="bg-slate-900 py-3 mx-3 my-3"
        formParts={formParts}
        submitName="Add Post"
        url="http://localhost:5005/api/user_posts"
        payload={data}
        accessToken={accessToken}
        onClearField={clearField}
      />
    </div>
  );
}
