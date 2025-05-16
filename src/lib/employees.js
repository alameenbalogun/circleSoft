import axios from "axios";

export const USERS_PER_PAGE = 20;

export const fetchEmployees = async ({ queryKey }) => {
  const [_key, page] = queryKey;
  const skip = (page - 1) * USERS_PER_PAGE;
  const res = await axios.get(
    `https://dummyjson.com/users?limit=${USERS_PER_PAGE}&skip=${skip}`
  );
  return {
    ...res.data,
    limit: USERS_PER_PAGE,
  };
};

export const fetchAllEmployees = async () => {
  const res = await axios.get("https://dummyjson.com/users?limit=208");
  return res.data;
};
