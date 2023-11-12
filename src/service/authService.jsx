/* eslint-disable no-undef */
export async function login(authDetail) {
    const requestionOptions = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(authDetail),
    }
  
    const response = await fetch("http://localhost:8000/login", requestionOptions);
    if (!response.ok) {
      throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();
  
    if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }
    return data;
  }
  


  export async function register(authDetail) {
    const requestionOptions = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(authDetail),
    };
  
    const response = await fetch("http://localhost:8000/register", requestionOptions);
    if (!response.ok) {
      throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
  
    const data = await response.json();
    if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }
    return data;
  }
  
  //get Single user
  export async function getUser() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  
    const requestionOptions = {
      method: "GET",
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  
    const response = await fetch("", requestionOptions);
    if (!response.ok) {
      throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
  }


  
export function logout(){
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
}
  