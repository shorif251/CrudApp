"use client";
import { useEffect, useState } from "react";
import Button from "../ReuseableComonents/Button";
import Form from "../ReuseableComonents/Form";
import FormField from "../ReuseableComonents/FormField";

export default function Registration() {
  const [userData, setUserData] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    sex: "",
    img: null,
  });
  const [data, setData] = useState("")

  const [isPassShow, setIsPassShow] = useState(false);

  const { firstName, surname, email, password, sex, img } = userData;

  const changeHandler = (event) => {
    const { type, name, value, files } = event.target;
    setUserData({
      ...userData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  useEffect(()=>{
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("surname", surname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("sex", sex);
    formData.append("img", img);
    setData(formData);

  }, [userData])

  const formField = (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:gap-3">
        <FormField
          name="firstName"
          placeholder="Enter Firstname"
          value={firstName}
          onChange={changeHandler}
          className="w-full"
        />

        <FormField
          name="surname"
          placeholder="Enter Surname"
          value={surname}
          onChange={changeHandler}
          className="w-full"
        />
      </div>

      <FormField
        type="email"
        name="email"
        placeholder="example@mail.com"
        value={email}
        onChange={changeHandler}
        className="w-full"
      />

      <div className="grid grid-cols-12 my-3 bg-slate-600 rounded ring-1 ring-blue-600 hover:ring-green-700">
        <div className=" col-start-1 col-end-11 ">
          <input
            type={`${!isPassShow ? "password" : "text"}`}
            name="password"
            placeholder="********"
            value={password}
            onChange={changeHandler}
            className="w-full px-4 py-2 ring-0 bg-slate-600 text-slate-50 outline-none "
          />
        </div>
        <Button
          type="button"
          btnStyle="col-start-11 col-end-13 outline-none ring-0"
          onClick={() => setIsPassShow(!isPassShow)}
          btnName={!isPassShow ? "Show" : "Hide"}
        />
      </div>

      <div className="flex justify-between my-3">
        <label htmlFor="sex">Sex:</label>
        <select
          name="sex"
          onChange={changeHandler}
          value={sex}
          className="bg-slate-700 text-slate-50 px-4 py-2 rounded-md outline-none "
          required
        >
          <option value="">Choose your sex:</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="flex justify-between my-3">
        <input
          className="cursor-pointer w-full px-4 py-2 bg-slate-700 rounded-md"
          type="file"
          name="img"
          onChange={changeHandler}
          required
        />
      </div>
    </div>
  );

  const clearField = () =>{
    setUserData({
      firstName: "",
      surname: "",
      email: "",
      password: "",
      sex: "",
      img: null,
    })
  }

  return (
    <div>
      <Form
        title="Open a user account"
        formParts={formField}
        className="md:max-w-xl max-w-sm mx-auto md:mt-0 mt-3"
        encType="multipart/form-data"
        url="http://localhost:5005/api/users_Data"
        payload={data}
        onClearField={clearField}
      />
    </div>
  );
}
