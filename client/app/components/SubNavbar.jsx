import { cookies } from "next/headers";
import { fetchingData } from "../service/fetching";
import Logout from "./Logout";


export default async function SubNavbar() {
  
  const userData = await fetchingData(
    `http://localhost:5005/api/users_Data/${cookies().get('userAccessToken').value}`,
    {
      Authorization: `Bearer ${cookies().get('userAccessToken').value}`,
    }
  );
    

  return (
    <ul className="flex justify-between px-4 py-3">
      <li>
        {/* <span>{userData? userData.data.firstName : ''} {userData? userData.data.surname : ""}</span> */} Syed Shorif
      </li>

      <li>
        <Logout />
      </li>
    </ul>
  );
}
