import axios from "./axios";
import Cookies from "js-cookie";
import { redirect } from "react-router-dom";

export async function login(email, password) {
  try {
    const response = await axios.post("/user/token/", { email, password });
    console.log(response)
    if (response.status === 200) {
      Cookies.set("access_token", response.data.access);
      Cookies.set("refresh_token", response.data.refresh);
      return redirect("/");
    }
  } catch (error) {
    return alert(error.response.data.detail);
  }
}
