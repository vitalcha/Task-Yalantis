import moment from "moment";

export const normolizeNamesForMouth = (months = [], users = []) =>
  months.map((mounth) => {
    const userForMounth = users.filter(
      (user) => Number(moment(user.dob).format("M")) === mounth.id
    );

    return {
      ...mounth,
      users: [...userForMounth],
    };
  });
