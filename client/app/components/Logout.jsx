"use client";
import { useFormStatus } from 'react-dom';

import Button from "../ReuseableComonents/Button";
import { LogoutFun } from "../serverAction/action";

export default function Logout() {
  const {pending} = useFormStatus();
  return (
    <div className="flex justify-center" >
      <Button
        btnName={ pending ? "Loading..." : "Logout"}
        type="button"
        onClick={()=>LogoutFun()}
        btnStyle="px-4 py-2 ring-1 rounded-md my-4 text-base text-green-600 hover:text-blue-500  "
      />
    </div>
  );
}
