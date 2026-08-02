import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../api";


const loadRazorpay = () => {

  return new Promise((resolve) => {

    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => resolve(true);

    script.onerror = () => resolve(false);

    document.body.appendChild(script);

  });

};



const Checkout = () => {


  const navigate = useNavigate();

  const location = useLocation();


  const user = JSON.parse(
    localStorage.getItem("user")
  );


  const buyNowItem = location.state?.buyNowItem;


  const [cartItems, setCartItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const [placingOrder, setPlacingOrder] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [shipping, setShipping] = useState(0);
const [shippingMessage, setShippingMessage] = useState("");



  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""

  });



  useEffect(() => {


    if (!user) {

      navigate("/login");

      return;

    }



    setFormData({

      name: user.name || "",

      email: user.email || "",

      phone: user.phone || "",

      address: "",
      city: "",
      state: "",
      pincode: ""

    });



    if (buyNowItem) {


      setCartItems([

        {

          ...buyNowItem,

          quantity: buyNowItem.quantity || 1,

          weight: buyNowItem.weight || "500g"

        }

      ]);


      setLoading(false);


    }

    else {


      fetchCart();


    }


  }, [buyNowItem, user?._id]);





  // ================= FETCH CART =================


  const fetchCart = async () => {


    try {


      const res = await API.get(
        "/cart",
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );


      setCartItems(
        res.data.items || []
      );



    }
    catch (error) {

      console.log(error);

      toast.error("Cart load failed");

    }
    finally {

      setLoading(false);

    }


  };





  const getPrice = (price, weight) => {


    if (weight === "250g") {

      return Math.round(price / 2);

    }


    return price;


  };
const subtotal = cartItems.reduce(

    (total, item) =>

      total +
      (
        getPrice(
          item.price,
          item.weight
        )
        *
        item.quantity
      ),

    0

  );




  const total = subtotal + shipping;

  const checkShipping = async (pin) => {

    if (pin.length !== 6) {
      setShipping(0);
      return;
    }
  
    try {
  
      const res = await API.post("/shipping/calculate", {
        pincode: pin,
      });
  
      if (res.data.serviceable) {
  
        setShipping(res.data.deliveryCharge);
        setShippingMessage("");
  
      } else {
  
        setShipping(0);
        setShippingMessage(res.data.message);
  
      }
  
    } catch (error) {
  
      console.log(error);
  
    }
  
  };



  const handleChange = (e) => {

    const { name, value } = e.target;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  
    if (name === "pincode") {
      checkShipping(value);
    }
  
  };






  // ================= SAVE ORDER =================

  console.log("User:", user);
  console.log("Token:", user?.token);
  const saveOrder = async (paymentId = null) => {


    try {
      console.log("cartItems:", cartItems);
      console.log("user:", user);
      console.log("orderData:", {
        items: cartItems.map((item) => ({
          productName: item.productName,
          price: getPrice(item.price, item.weight),
          quantity: item.quantity,
          weight: item.weight,
          image: item.image,
        })),
        address: formData,
        totalAmount: total,
        paymentMethod,
      });

      const orderData = {


        items: cartItems.map(item => ({


          productName: item.productName,

          price: getPrice(
            item.price,
            item.weight
          ),

          quantity: item.quantity,

          weight: item.weight,

          image: item.image


        })),



        address: formData,


        totalAmount: total,


        paymentMethod,


        paymentStatus:

          paymentMethod === "ONLINE"

            ?

            "PAID"

            :

            "PENDING",



        paymentId


      };
      const res = await API.post(
        "/orders",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (!buyNowItem) {
        try {
          await API.delete("/cart/clear", {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
        } catch (err) {
          console.log("Cart clear failed:", err);
        }
      }

      toast.success("Order Placed Successfully 🎉");
      navigate("/order-success", {
        state: { order: res.data.order },
      });
    }
    catch (error) {
      console.log("SAVE ORDER ERROR", error);
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);

      toast.error(error.response?.data?.message || "Order failed");
    }
  };
  // ================= PLACE ORDER =================
  const handlePlaceOrder = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.token) {
      toast.error("Please login to place your order");
      navigate("/login");
      return;
    }
    if (!cartItems.length) {


      toast.error(
        "Cart is empty"
      );


      navigate("/menu");

      return;

    }
    const {

      name,
      email,
      phone,
      address,
      city,
      state,
      pincode

    } = formData;





    if (

      !name ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !pincode

    ) {


      toast.error(
        "Please fill all details"
      );


      return;


    }





    try {


      setPlacingOrder(true);



      if (paymentMethod === "ONLINE") {


        await handleOnlinePayment();


      }

      else {
        await saveOrder();


      }
    }
    catch (error) {


      console.log(error);

      toast.error(
        "Something went wrong"
      );


    }
    finally {
      setPlacingOrder(false);
    }
  };
  // ================= ONLINE PAYMENT =================
  const handleOnlinePayment = async () => {


    const loaded = await loadRazorpay();



    if (!loaded) {

      toast.error(
        "Razorpay SDK failed"
      );

      return;

    }
    try {


      const response = await API.post(

        "/payment/create-order",

        {
          amount: total
        },

        {
          headers: {

            Authorization:
              `Bearer ${user.token}`

          }

        }

      );
      const razorpayOrder = response.data;
      const options = {


        key:
          import.meta.env.VITE_RAZORPAY_KEY_ID,



        amount:
          razorpayOrder.amount,



        currency: "INR",



        name: "Gayatri Namkeen",



        description:
          "Namkeen Order Payment",



        order_id:
          razorpayOrder.id,



        prefill: {


          name: formData.name,

          email: formData.email,

          contact: formData.phone


        },



        theme: {


          color: "#f97316"


        },




        handler: async function (paymentResponse) {


          try {


            const verify = await API.post(

              "/payment/verify-payment",

              {


                razorpay_order_id:
                  paymentResponse.razorpay_order_id,



                razorpay_payment_id:
                  paymentResponse.razorpay_payment_id,



                razorpay_signature:
                  paymentResponse.razorpay_signature


              },

              {

                headers: {

                  Authorization:
                    `Bearer ${user.token}`

                }

              }

            );






            if (verify.data.success) {


              await saveOrder(

                paymentResponse.razorpay_payment_id

              );


            }

            else {


              toast.error(
                "Payment verification failed"
              );


            }




          }

          catch (error) {


            console.log(error);


            toast.error(
              "Payment verification error"
            );


          }


        }


      };





      const razorpay =
        new window.Razorpay(options);



      razorpay.open();



    }

    catch (error) {


      console.log(error);


      toast.error(
        "Payment failed"
      );


    }


  };






  if (loading) {


    return (

      <div className="h-screen flex items-center justify-center">

        <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent">

        </div>

      </div>

    );


  }





  return (

    <div className="bg-[#fff8f1] min-h-screen">


      <Navbar />



      <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-10 text-center">


        <h1 className="text-4xl font-bold">

          Checkout 🧾

        </h1>


      </div>





      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 p-6">



        {/* DELIVERY DETAILS */}


        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">


          <h2 className="text-2xl font-bold mb-6">

            Delivery Details

          </h2>





          <div className="grid md:grid-cols-2 gap-4">


            {
              [
                "name",
                "email",
                "phone",
                "city",
                "state",
                "pincode"
              ]
                .map(field => (


                  <input

                    key={field}

                    name={field}

                    value={formData[field]}

                    onChange={handleChange}

                    placeholder={field.toUpperCase()}

                    type={
                      field === "email"
                        ?
                        "email"
                        :
                        "text"
                    }

                    className="border rounded-xl p-3"

                  />


                ))

            }


          </div>





          <textarea


            name="address"


            value={formData.address}


            onChange={handleChange}


            placeholder="Full Address"


            className="border rounded-xl p-3 w-full mt-4"


          />






          <h3 className="font-bold mt-6 mb-3">

            Payment Method

          </h3>




          <label className="mr-5">


            <input

              type="radio"

              value="COD"

              checked={
                paymentMethod === "COD"
              }

              onChange={
                e => setPaymentMethod(e.target.value)
              }

            />


            <span className="ml-2">

              Cash On Delivery

            </span>


          </label>
          <label>


            <input

              type="radio"

              value="ONLINE"

              checked={
                paymentMethod === "ONLINE"
              }

              onChange={
                e => setPaymentMethod(e.target.value)
              }

            />


            <span className="ml-2">

              Online Payment

            </span>


          </label>




        </div>








        {/* SUMMARY */}



        <div className="bg-white rounded-2xl shadow p-6 h-fit sticky top-24">


          <h2 className="text-2xl font-bold mb-5">

            Order Summary

          </h2>





          {
            cartItems.map((item, index) => (


              <div

                key={index}

                className="flex gap-4 border-b pb-4 mb-4"


              >



                <img

                  src={item.image}

                  alt={item.productName}

                  className="w-20 h-20 rounded-xl object-cover"

                />
                <div>


                  <h3 className="font-bold">

                    {item.productName}

                  </h3>



                  <p>

                    Qty : {item.quantity}

                  </p>




                  <p className="text-orange-600 font-bold">

                    ₹{getPrice(item.price, item.weight)}

                  </p>



                </div>



              </div>


            ))

          }






          <div className="flex justify-between">

            <span>
              Subtotal
            </span>


            <span>
              ₹{subtotal}
            </span>


          </div>






          <div className="flex justify-between">

            <span>
              Shipping
            </span>


            <span>
              ₹{shipping}
            </span>


          </div>
          {shippingMessage && (
  <p className="text-red-500 text-sm mt-2">
    {shippingMessage}
  </p>
)}






          <hr className="my-4" />






          <div className="flex justify-between text-xl font-bold">


            <span>

              Total

            </span>



            <span className="text-orange-600">

              ₹{total}

            </span>


          </div>







          <button


            onClick={handlePlaceOrder}


            disabled={placingOrder}



            className={`w-full mt-6 py-4 rounded-full font-bold text-white ${placingOrder

              ?

              "bg-gray-400 cursor-not-allowed"

              :

              "bg-orange-600 hover:bg-orange-700"

              }`}


          >


            {
              placingOrder

                ?

                "Processing..."

                :

                paymentMethod === "ONLINE"

                  ?

                  "Pay Securely 💳"

                  :

                  "Place Order 🛒"

            }


          </button>





        </div>





      </div>




      <Footer />


    </div>


  );


};



export default Checkout;