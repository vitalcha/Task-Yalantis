import { useState, useEffect } from "react";

import { API } from "../constants/api";
import { normolizeNamesForMouth } from "../helper";
import { INITION_MONTHS } from "../constants/months";

export const useUsers = () => {
  const [months, setMonths] = useState(INITION_MONTHS);

  const getUsers = async () => {
    try {
      const responce = await fetch(API.USERS);

      if (responce.status !== 200) {
        throw new Error(responce.status);
      }

      const usersFromApi = await responce.json();
      const monthWithUsers = normolizeNamesForMouth(
        INITION_MONTHS,
        usersFromApi
      );

      setMonths(monthWithUsers);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    months,
  };
};