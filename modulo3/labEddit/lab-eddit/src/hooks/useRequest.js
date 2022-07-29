import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/BASE_URL";
import { token } from "../constants/token";

export const useRequest = (url, state, pagination) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
  
    axios
      .get(`${BASE_URL}${url}`, {
        headers:{
          authorization: token
        }
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [url, state, pagination]);
  return data
};
