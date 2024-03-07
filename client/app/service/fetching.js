
  export const fetchingData = async (url, headers={}) => {
    const response = await fetch(url, {
      method: "GET",
      headers,
    });
    const responseData = await response.json();
    return responseData;
  };



  export const fetchingPost = async (url, payload, headers={}) => {
    console.log(payload)
    const response = await fetch(url, {
        method: "POST",
        body: payload,
        headers,
    });
    return response;
  };
