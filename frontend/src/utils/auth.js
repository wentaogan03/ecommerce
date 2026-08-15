import axios from "./axios";
import Cookies from "js-cookie";
import { redirect } from "react-router-dom";

export async function login(email, password) {
  const response = await axios.post("/user/token/", { email, password });
  if (response.status === 401) {
    return response;
  }
  Cookies.set("access_token", response.data.access);
  Cookies.set("refresh_token", response.data.refresh);
  return redirect("/");
}
