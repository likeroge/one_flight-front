import axios from "axios";

//sync with DB
export const dataToDB = async (data) => {
  await axios.post("/api/", data);
};

//get flights from API
export const getFlights = async (data) => {
  const flights = (await axios.post("/api/", data)).data;
  return flights;
};
