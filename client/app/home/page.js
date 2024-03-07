import InitialUserInfo from "../components/InitialUserInfo";
import MainPosts from "../components/MainPosts";
import TrendingPosts from "../components/TrendingPosts";

export default function page() {
  
  return (
    <div>
      
      <div className="grid xl:grid-cols-4 md:grid-cols-3 gap-4 h-svh overflow-hidden ">
        <div className="md:hidden  xl:block xl:col-span-1 hidden ">
          <InitialUserInfo />
        </div>
        <div className="xl:hidden md:flex md:flex-col hidden">
          <InitialUserInfo />
          <TrendingPosts />
        </div>

        <div className="md:col-span-2  ">
          <MainPosts />
        </div>
        <div className="md:hidden xl:block xl:col-span-1 hidden">
          <TrendingPosts />
        </div>
      </div>
    </div>
  );
}
