import axios from "axios";


const API = "http://localhost:5000/api";


export const createPaymentOrder = async(amount)=>{

  const res = await axios.post(
    `${API}/payment/create-order`,
    {
      amount
    }
  );


  return res.data;

};