"use server";
import { cookies } from "next/headers";
import { permanentRedirect } from "next/navigation";


import { deleteCookie, setCookie } from "cookies-next";
import { fetchingPost } from "../service/fetching";

export async function SubmitHandler(prevState, formData) {

  const cookie = cookies();

    const email = formData.get("email");
    const password = formData.get("password");
    const payload = {
      email,
      password,
    };
    const postData = await fetchingPost(
      "http://localhost:5005/api/userLogin",
      JSON.stringify(payload),
      {
        "Content-type": "application/json; charset=UTF-8",
      }
    );

    const result = await postData.json();
    console.log(result);
    if (result.success) {
      const token = postData.headers
        .getSetCookie()[0]
        .split("=")[1]
        .split(";")[0];
      console.log("Loginpage" + " " + token);
      const userId = result.message.id;
      
      setCookie('userAccessToken', token, {cookies})
      setCookie('userId', userId, {cookies})

      permanentRedirect('/home', 'replace')
  
    }
    else if(result.errors.length > 0){
      return {
        message: result.errors[0].msg
      }
    } else if(result.success === false){
      return {
        message: "Something went wrong"
      }
    }
}

export async function LogoutFun(){
  const accessToken = cookies().get('userAccessToken').value;
  const userId = cookies().get('userId').value;
  const response = await fetch("http://localhost:5005/api/userLogout",{
    method: "GET",
    headers: {
      Authorization : `Bearer ${accessToken}`

    }
  })
  const responseData = await response.json();
  if(responseData.success){
    deleteCookie('userAccessToken', {cookies})
    deleteCookie('userId', {cookies})
    permanentRedirect('/', 'replace')
    console.log('logout')
  }else{
    console.log('Something went wrong!')
  }
}
