import React, {  useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../data/products";
import toast from "react-hot-toast";
import API from "../api";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [weight, setWeight] = useState("500g");
  const product = products.find(
    (p) =>
      p.name.toLowerCase() ===
      decodeURIComponent(id).toLowerCase()
  );
  useEffect(() => {
    if (!product) {
      toast.error("Product not found");
      navigate("/menu", { replace: true });
    }
  }, [product, navigate]);
  if (!product) {
    return null;
  }
  const getPrice = () => {
    if (weight === "250g") {
      return Math.round(product.price / 2);
    }
    return product.price;
  };
  // ADD TO CART
  const handleAddCart = async () => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );
    if (!user) {
      navigate("/login");
      return;
    }
    try {

      await API.post("/cart/add", {
        productName: item.name,
        price: item.price,
        image: item.image,
        quantity: 1,
        weight: "500g",
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      toast.success("Added To Cart 🛒");
    }
    catch (error) {
      console.log(
        "Add Cart Error:",
        error.response?.data || error.message
      );
      toast.error("Failed to add cart");

    }
  };
  // BUY NOW

  const handleBuyNow = () => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );
    if (!user) {
      navigate("/login");
      return;
    }
    navigate("/checkout", {
      state: {
        buyNowItem: {
          productName: product.name,
          price: getPrice(),
          quantity: 1,
          image: product.image,
          weight: weight
        }
      }

    });
  };
  return (
    <div className="bg-[#fff8f1] min-h-screen">
      <Navbar />
      {/* Breadcrumb */}

      <div className="max-w-7xl mx-auto px-6 py-5">
        <span className="text-orange-600 font-medium">
          {product.name}
        </span>

      </div>
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* IMAGE */}
          <div className="bg-white rounded-[35px] shadow-lg p-8">
            <img
              src={product.image || "/products/default.jpg"}
              alt={product.name}
              className="w-full rounded-3xl hover:scale-105 transition duration-500"
            />
          </div>
          {/* DETAILS */}
          <div>
            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
              Freshly Prepared
            </span>
            <h1 className="text-5xl font-bold mt-6 text-gray-800">
              {product.name}
            </h1>
            <p className="text-orange-600 text-4xl font-bold mt-5">
              ₹{getPrice()}
            </p>
            {/* WEIGHT */}
            <div className="mt-6">
              <h3 className="font-semibold mb-3">
                Select Weight
              </h3>
              <div className="flex gap-3">
                {
                  ["250g", "500g"].map((w) => (
                    <button

                      key={w}

                      onClick={() => setWeight(w)}

                      className={`px-5 py-2 rounded-full border ${weight === w

                        ?

                        "bg-orange-500 text-white border-orange-500"

                        :

                        "bg-white border-gray-300"

                        }`}

                    >

                      {w}

                    </button>


                  ))
                }
              </div>
            </div>{/* INFORMATION */}
            <div className="mt-8 bg-white rounded-3xl shadow-md border border-orange-100 p-6">
              <h3 className="text-xl font-semibold mb-5">

                Product Information
              </h3>
              <div className="flex justify-between border-b py-3">

                <span className="text-gray-600">

                  Shelf Life

                </span>


                <span>

                  30 Days

                </span>


              </div>
              <div className="flex justify-between border-b py-3">


                <span className="text-gray-600">

                  Storage

                </span>


                <span>

                  Cool & Dry Place

                </span>
              </div>
              <div className="pt-5">
                <h4 className="text-xl font-semibold mb-4">

                  Description

                </h4>


                <p className="text-gray-600 leading-8 text-justify whitespace-pre-line">

                  {product.description}

                </p>


              </div>


            </div>





            {/* BUTTONS */}


            <div className="flex gap-4 mt-8">


              <button

                onClick={handleAddCart}

                className="w-1/2 py-4 rounded-full bg-orange-100 text-orange-700 font-semibold hover:bg-orange-200"

              >

                Add To Cart

              </button>





              <button

                onClick={handleBuyNow}

                className="w-1/2 py-4 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700"

              >

                Buy Now

              </button>


            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );

};
export default ProductDetails;