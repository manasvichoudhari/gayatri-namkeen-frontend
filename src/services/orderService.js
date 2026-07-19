import axios from "axios";

const API = "http://localhost:5000/api";


export const createOrder = async (data) => {

  const res = await axios.post(
    `${API}/orders`,
    data
  );

  return res.data;

};