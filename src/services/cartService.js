import axios from "axios";

const API = "http://localhost:5000/api";


export const getCart = async (userId) => {

  const res = await axios.get(
    `${API}/cart/${userId}`
  );

  return res.data;

};


export const clearCart = async(userId)=>{

  const res = await axios.delete(
    `${API}/cart/clear/${userId}`
  );

  return res.data;

};