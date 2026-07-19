import React from "react";

import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {

  const navigate = useNavigate();

  // Add To Cart

  const handleAddToCart = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    // User Not Logged In

    if (!user) {

      alert("Please Login First");

      navigate("/login");

      return;
    }

    // Existing Cart

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    // Add Product

    const updatedCart = [...existingCart, product];

    // Save Cart

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    alert(`${product.name} added to cart ❤️`);
  };

  // Buy Now

  const handleBuyNow = () => {

    console.log(product);

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/signup");
      return;
    }

    navigate("/checkout", {
      state: {
        buyNowItem: {
          productName: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
        },
      },
    });
  };

  return (

    <div className="bg-white rounded-[35px] shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition duration-500 border border-orange-100">

      {/* Product Image */}

      <div
        onClick={() => 
          {
            console.log(product); 
          
        navigate(`/product/${product.id}`)}}
        className="overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-60 w-full object-cover hover:scale-110 transition duration-700"
        />
      </div>

      {/* Product Details */}

      <div className="p-6">

        {/* Product Name */}

        <h2
          onClick={() => navigate(`/product/${product.id}`)}
          className="text-2xl font-bold text-gray-800 cursor-pointer hover:text-orange-600 transition"
        >
          {product.name}
        </h2>

        {/* Description */}

        <p className="text-gray-500 text-sm mt-3 leading-relaxed">

        {product.shortDescription}

        </p>

        {/* Price */}

        <div className="flex items-center justify-between mt-5">

          <p className="text-3xl font-extrabold text-orange-600">
            ₹{product.price}
          </p>

        </div>

        {/* Buttons */}

        <div className="flex gap-3 mt-7">

          {/* Add To Cart */}

          <button
            onClick={handleAddToCart}
            className="w-1/2 bg-orange-100 text-orange-700 py-3 rounded-full font-semibold hover:bg-orange-200 transition"
          >

            Add Cart

          </button>

          {/* Buy Now */}

          <button
            onClick={handleBuyNow}
            className="w-1/2 bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition shadow-md"
          >

            Buy Now

          </button>


        </div>

      </div>

    </div>
  );
};

export default ProductCard;