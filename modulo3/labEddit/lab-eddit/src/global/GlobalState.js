import React from "react";
import { GlobalContext } from "./GlobalContext";
import { goToLoginPage } from "../routes/coordinator";
import { useRequest } from "../hooks/useRequest";



export default function GlobalState(props) {
  const Provider = GlobalContext.Provider;
  const Posts = useRequest(`/posts`) 
  console.log(Posts)  
  const logout = (navigate) => {
    localStorage.setItem("token", "");
    goToLoginPage(navigate);
  };
  const values = { logout, Posts };
  return <Provider value={values}>{props.children}</Provider>;
}
