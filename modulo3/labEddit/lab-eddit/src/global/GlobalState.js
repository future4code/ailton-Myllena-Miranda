import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { goToLoginPage } from "../routes/coordinator";
import { useRequest } from "../hooks/useRequest";

export default function GlobalState(props) {
  const [state, setState] = useState(0);
  const [pagination, setPagination] = useState(1);
  const Provider = GlobalContext.Provider;
  const Posts = useRequest(`/posts?page=${pagination}&size=20`, state, pagination);
  const logout = (navigate) => {
    localStorage.setItem("token", "");
    goToLoginPage(navigate);
  };
  
  const values = { logout, Posts, setState, state, pagination, setPagination };
  return <Provider value={values}>{props.children}</Provider>;
}
