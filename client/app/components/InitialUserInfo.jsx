import { cookies } from "next/headers";
import { fetchingData } from "../service/fetching";
import { timeFormater } from "../service/helperFun";
import Logout from "./Logout";


export default async function InitialUserInfo() {
  const cookie = cookies();

  const token = cookie.get("userAccessToken").value;
  const userId = cookie.get("userId").value;

  const user = await fetchingData(
    `http://localhost:5005/api/users_Data/${userId}`,
    {
      Authorization: `Bearer ${token}`,
    }
  );
  console.log(user);
  const { firstName, surname, email, sex, photo, createdAt } =
    user.data ;

  
  return (
    <div className="mt-4 text-2xl shadow shadow-gray-700 xl:h-[100%] md:h-[50%] h-[100%] overflow-y-auto px-4 py-2">
      <span className="text-xl ">
        {firstName} {surname}
      </span>
      <ul className="text-sm">
        <li className="mt-3">
          <div className="ring-2 ring-blue-600 rounded-md ">
            <img src={photo} alt="#" className="rounded-md" width="w-[100%]" height='h-auto' />
          </div>
        </li>
        <li className="mt-3">Email: {email}</li>

        <li className="mt-3">Sex: {sex}</li>

        <li className="mt-3">{`Joined Adda on: ${timeFormater(createdAt)}`}</li>
      </ul>
      <Logout />
    </div>
  );
}
