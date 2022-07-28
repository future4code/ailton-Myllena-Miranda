import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/BASE_URL";
import { token } from "../constants/token";

export const useRequest = (url) => {
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
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [url]);
  return data;
};
