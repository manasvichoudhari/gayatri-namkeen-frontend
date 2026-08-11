import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { products } from "../data/products";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../api";

const categories = {
  Sev: [
    "Ujjaini Sev", "Ratlami Sev", "Single Long Sev", "Double Long Sev",
    "Lahsan Sev", "Hing Sev", "Poha Sev", "Medium Sev", "Aloo Bhujia",
    "Marwadi Sev", "Fikki Sev",
  ],
  Mixture: [
    "Tej Hing Mixture", "Khatta Mitha Mixture", "Poha Chivda",
    "Kashmiri Mix", "Corn Spicy Mixture", "Daal Moth Mixture",
  ],
  Danthal: ["Lahsan Danthal", "Marwadi Danthal", "Pudina Danthal"],
  Gathiya: ["Star Gathiya", "Bhavnagri Gathiya"],
  Falahari: [
    "Kali Mirchi Falahari", "Sabudana Falahari", "Lal Mirchi Sabudana Falahari",
    "Kali Mirchi Dana", "Lal Mirchi Dana", "Salted Dana", "Lal Mirchi Dana Bold",
  ],
  Chips: [
    "Salted Chips", "Kali Mirchi Chips", "Khatti Mithi Chips", "Lal Mirch Chips",
  ],
  Boondi: ["Lal Mirchi Boondi", "Fikki Boondi"],
  Peanuts: [
    "Tasty Peanut", "Kali Mirchi Peanut", "Lal Mirchi Peanut",
    "Bold Lal Mirchi Peanut", "Salted Peanut",
  ],
  Daal: ["Hing Chana Dal", "Moong Dal", "Daal Moth", "Pudina Chana Dal"],
  Papdi: ["Masala Papdi", "Fikki Papdi"],
  "Best Seller": [
    "Ujjaini Sev", "Ratlami Sev", "Khatta Mitha Mixture", "Aloo Bhujia",
  ],
};

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const selectedItem = queryParams.get("item") || "";

  const [selectedCategory, setSelectedCategory] = useState("Sev");
  const [searchTerm, setSearchTerm] = useState("");

  // FILTER PRODUCTS
  const filteredProducts = products.filter((item) => {
    // search filter
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    // url params filter
    const matchSelected = selectedItem
      ? item.name.toLowerCase().includes(selectedItem.toLowerCase())
      : true;

    // category filter (checks both if item has a category prop, or if it exists in the categories map)
    const matchCategory = selectedItem
  ? true
  : searchTerm.length > 0
    ? true
    : item.category === selectedCategory ||
      (categories[selectedCategory] &&
        categories[selectedCategory].includes(item.name));

    return matchSelected && matchSearch && matchCategory;
  });

  // Add To Cart
  const handleAddCart = async (item) => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    console.log("ADD CART USER:", user);


    if ( !user.token) {
      toast.error("please login first")
      navigate("/login");
      return;
    }



    try {
      const res = await API.post("/cart/add", {
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
      } catch (err) {
        console.log(err.response?.data);
        toast.error("Failed to add cart");
      }
    };
        

    

  // Buy Now
  const handleBuyNow = (item) => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (!user?.token) {
      toast.error("Please login first");
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
    <div className="bg-[#fff8f1] min-h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Crispy Namkeen Menu 🍿
          </h1>
          <p className="mt-4 text-white/90 text-lg">
            Fresh • Crunchy • Authentic Taste
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Search Bar */}
          <div className="mb-8 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search for namkeen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 rounded-full border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
            />
          </div>

          {/* Categories */}
          <div className="mb-14 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 min-w-max px-1 py-2 justify-start lg:justify-center">
              {Object.keys(categories).map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSearchTerm(""); // Reset search when category is clicked
                  }}
                  className={`whitespace-nowrap px-6 py-3 rounded-full font-medium transition ${selectedCategory === category && searchTerm === ""
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-orange-100 hover:bg-orange-50"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <div
                  key={item._id || item.name}
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-orange-100"
                >
                  {/* Product Image */}
                  <div
                    className="overflow-hidden cursor-pointer"
                    onClick={() => navigate(`/product/${encodeURIComponent(item.name)}`)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                      {item.shortDescription}
                    </p>

                    {/* Price */}
                    <div className="mt-4">
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
                        onClick={() => handleBuyNow(item)}
                        className="w-1/2 py-3 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <h2 className="text-3xl font-bold text-gray-700">
                  No Product Found 😔
                </h2>
                <p className="mt-3 text-gray-500">
                  Try searching another namkeen item.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Menu;