import React from "react";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const lovedProducts = products.filter((product) =>
  [
    "Ujjaini Sev",
    "Ratlami Sev",
    "Khatta Mitha Mixture",
    "Aloo Bhujia",
    "Masala Papdi",
    "Salted Chips",
  ].includes(product.name)
);

const LovedSlider = () => {
  const navigate = useNavigate();

  // ADD TO CART
  const handleAddCart = (item) => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (!user) {
      navigate("/login");
      return;
    }

    toast.success(`${item.name} Added To Cart ❤️`);
  };

  // ORDER NOW
  const handleOrderNow = (item) => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (!user) {
      navigate("/login");
      return;
    }

    navigate("/checkout", {
      state: {
        buyNowItem: {
          productName: item.name,
          price: item.price,
          quantity: 1,
          image: item.image,
          weight: "500g",
        },
      },
    });
  };

  return (
    <section className="py-20 px-6 bg-[#fff8f1]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-14">

          <p className="text-orange-500 uppercase tracking-widest font-medium">
            Best Sellers
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mt-4">
            Our Most Loved Snacks ❤️
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-lg">
            Handpicked favourites loved by thousands of happy customers.
          </p>

        </div>

        {/* Products */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {lovedProducts.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-orange-100"
            >

              {/* Image */}

              <div
                className="overflow-hidden cursor-pointer"
                onClick={() =>
                  navigate(`/product/${encodeURIComponent(item.name)}`)
                }
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}

              <div className="p-6">


                <div className="flex items-center justify-between">

                  <h3
                    onClick={() => navigate(`/product/${encodeURIComponent(item.name)}`)}
                    className="text-2xl font-semibold text-gray-800 cursor-pointer hover:text-orange-600 transition"
                  >
                    {item.name}
                  </h3>

                  <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">
                    Fresh
                  </span>
                </div>

                <p className="text-gray-500 text-sm mt-3 leading-relaxed line-clamp-2">
                  {item.shortDescription}
                </p>

                <div className="mt-5">
                  <p className="text-3xl font-bold text-orange-600">
                    ₹{item.price}
                  </p>
                </div>

                {/* Buttons */}

                <div className="flex gap-3 mt-6">

                  <button
                    onClick={() => handleAddCart(item)}
                    className="w-1/2 py-3 rounded-full bg-orange-100 text-orange-700 font-medium hover:bg-orange-200 transition"
                  >
                    Add Cart
                  </button>

                  <button
                    onClick={() => handleOrderNow(item)}
                    className="w-1/2 py-3 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
                  >
                    Order Now
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default LovedSlider;