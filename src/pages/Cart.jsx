import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import API from "../api";


const Cart = () => {


  const navigate = useNavigate();

  const rawUser = localStorage.getItem("user");

  console.log("RAW USER =", rawUser);

  const user = rawUser ? JSON.parse(rawUser) : null;

  console.log("USER =", user);
  console.log("TOKEN =", user?.token);

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("useEffect user =", user);
    if (!user || !user.token) {
      console.log("Redirecting to login...");
      toast.error("Please login first");
      navigate("/login");
      return;
    }
    console.log("FETCHING CART");

    fetchCart();

  }, [navigate]);
  const fetchCart = async () => {

    try {

      setLoading(true);

      const res = await API.get("/cart", {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });


      setCartItems(res.data.items || []);


    } catch (error) {
      console.log("Cart Error:", error);
      console.log("Status:", error.response?.status);
      console.log("Response:", error.response?.data);
    
      toast.error(error.response?.data?.message || "Unable to load cart");
    }
    finally {

      setLoading(false);

    }

  };





  const increaseQty = async (id) => {

    try {

      await API.put(
        `/cart/increase/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );


      fetchCart();


    } catch (error) {

      console.log(error);
      toast.error("Quantity update failed");

    }

  };
  const decreaseQty = async (id, qty) => {


    if (qty <= 1) return;


    try {

      await API.put(
        `/cart/decrease/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );


      fetchCart();


    } catch (error) {

      console.log(error);
      toast.error("Quantity update failed");

    }

  };




  const removeItem = async (id) => {

    try {


      const res = await API.delete(
        `/cart/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );



      if (res.data.success) {

        toast.success(res.data.message);

        fetchCart();

      }



    } catch (error) {

      console.log(error);

      toast.error("Remove failed");

    }


  };
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * Number(item.quantity),
    0
  );


  const delivery = subtotal > 0 ? 40 : 0;

  const total = subtotal + delivery;

  if (loading) {

    return (
      <div className="text-center py-20 text-xl">
        Loading Cart...
      </div>
    );

  }
  return (

    <div className="bg-[#fff8f1] min-h-screen">

      <Navbar />
      <div className="bg-gradient-to-r from-orange-500 to-yellow-400 py-14 text-center text-white">

        <h1 className="text-4xl font-bold">
          Your Cart 🛒
        </h1>

      </div>
      {
        cartItems.length === 0 ?
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold">
              Cart is Empty 😔
            </h2>
            <button

              onClick={() => navigate("/menu")}

              className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full"

            >Continue Shopping

            </button></div> :

          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 p-6">
            <div className="lg:col-span-2 space-y-5">


              {
                cartItems.map(item => (


                  <div

                    key={item._id}

                    className="bg-white p-5 rounded-2xl shadow flex gap-5 items-center"

                  >


                    <img
                      src={item.image}
                      onError={(e) => {
                        e.target.src = "/products/default.jpg";
                      }}

                      alt={item.productName}

                      className="w-24 h-24 rounded-xl object-cover"

                    />



                    <div className="flex-1">


                      <h2 className="text-xl font-semibold">

                        {item.productName}

                      </h2>


                      <p className="text-orange-600 font-bold">

                        ₹{item.price}

                      </p>



                      <div className="flex items-center gap-3 mt-3">


                        <button

                          onClick={() => decreaseQty(item._id, item.quantity)}

                          className="px-3 py-1 bg-gray-200 rounded"

                        >
                          -
                        </button>


                        <span>
                          {item.quantity}
                        </span>


                        <button

                          onClick={() => increaseQty(item._id)}

                          className="px-3 py-1 bg-orange-500 text-white rounded"

                        >
                          +
                        </button>


                      </div>



                    </div>



                    <button

                      onClick={() => removeItem(item._id)}

                      className="text-red-500"

                    >

                      <FaTrash />

                    </button>



                  </div>


                ))
              }



            </div>
            <div className="bg-white p-6 rounded-2xl shadow h-fit">


              <h2 className="text-xl font-bold mb-4">

                Price Details

              </h2>



              <div className="flex justify-between">

                <span>
                  Subtotal
                </span>

                <span>
                  ₹{subtotal}
                </span>

              </div>

              <hr className="my-3" />
              <div className="flex justify-between font-bold text-lg text-orange-600">

                <span>
                  Total
                </span>


                <span>
                  ₹{total}
                </span>


              </div>
              <button
                onClick={() => {

                  const user = JSON.parse(localStorage.getItem("user"));

                  if (!user || !user.token) {
                    toast.error("Please login first");
                    navigate("/login");
                    return;
                  }

                  navigate("/checkout");
                }}

                disabled={cartItems.length === 0}

                className={`w-full mt-6 py-3 rounded-full text-white ${cartItems.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600"
                  }`}

              >
                Checkout

              </button>
            </div>
          </div>
      }
      <Footer />
    </div>
  );
};


export default Cart;