import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";
import { token } from "../constants/token";

export const useProtectedPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      goToLoginPage(navigate);
    }
  }, []);
};
