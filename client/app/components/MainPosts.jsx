import { getCookie } from "cookies-next";
import { fetchingData } from "../service/fetching";
import MakePost from "./MakePost";

export default async function MainPosts() {
  const accessToken = getCookie('userAccessToken');

  const postsData = await fetchingData("http://localhost:5005/api/user_posts", {
    Authorization: `Bearer ${accessToken}`,
  });

  
  return (
    <div className="mt-4 text-base text-justify px-4 py-2 shadow shadow-gray-700 overflow-hidden hover:overflow-y-auto transition-all scroll-smooth h-screen ">
      <div className="md:block hidden">
        <MakePost />
      </div>
      <div>
        {postsData.data.map((value) => {
          const {_id, body, photo} = value;
          return (
            <div
              className="px-4 py-2 shadow shadow-gray-400 my-4 rounded-md"
              key={_id}
            >
              {photo != "" ? <div className="flex justify-center">
                <img src={photo} alt="image" width="w-[80%]" height="h-auto" />
              </div> : ""}
              <p>{body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
