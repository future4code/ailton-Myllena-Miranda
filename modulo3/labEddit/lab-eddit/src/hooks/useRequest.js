import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/BASE_URL";

export const useRequest = (url) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${url}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [url]);
  return data;
};
