import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaUserCircle,
  FaTruck,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import logo from "../assets/images/logo.png";


const Navbar = () => {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);


  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );


  const whatsappNumber =
    import.meta.env.VITE_WHATSAPP_NUMBER || "919407277299";


  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (

    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-orange-100">


      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">


        {/* LOGO */}

        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >

          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-orange-200">

            <img
              src={logo}
              alt="Gayatri Namkeen Logo"
              className="w-full h-full object-cover"
            />

          </div>



          <div>

            <h1 className="text-lg md:text-2xl font-bold text-orange-600">
              Gayatri Namkeen
            </h1>


            <p className="text-[10px] md:text-xs text-gray-500">
              Taste jo yaad Reh Jaae
            </p>


          </div>


        </div>




        {/* DESKTOP MENU */}

        <div className="hidden lg:flex gap-8 font-medium text-gray-700">


          <button
            onClick={() => navigate("/")}
            className="hover:text-orange-600 transition"
          >
            Home
          </button>


          <button
            onClick={() => navigate("/menu")}
            className="hover:text-orange-600 transition"
          >
            Menu
          </button>


          <button
            onClick={() => navigate("/about")}
            className="hover:text-orange-600 transition"
          >
            About Us
          </button>


          <button
            onClick={() => navigate("/contact")}
            className="hover:text-orange-600 transition"
          >
            Contact
          </button>



          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 transition"
          >
            Chat
          </a>


        </div>





        {/* ICONS */}

        <div className="flex items-center gap-4 text-xl text-orange-600">


          <FaTruck

            onClick={() => navigate("/orders")}

            className="cursor-pointer hover:scale-110 transition"

          />



          <FaShoppingCart

            onClick={() => navigate("/cart")}

            className="cursor-pointer hover:scale-110 transition"

          />



          <FaUserCircle

            onClick={() => {

              if(user){

                navigate("/profile");

              }
              else{

                navigate("/login");

              }

            }}

            className="cursor-pointer hover:scale-110 transition"

          />




          <button

            className="lg:hidden text-2xl"

            onClick={() => setMenuOpen(!menuOpen)}

          >

            {
              menuOpen
              ?
              <FaTimes/>
              :
              <FaBars/>
            }


          </button>



        </div>


      </div>






      {/* MOBILE MENU */}

      {
        menuOpen && (

          <div className="lg:hidden bg-white border-t border-orange-100 shadow-md">


            <div className="flex flex-col px-6 py-5 gap-5 text-gray-700 font-medium">


              <button
                onClick={()=>{
                  navigate("/");
                  closeMenu();
                }}
                className="text-left hover:text-orange-600"
              >
                Home
              </button>



              <button
                onClick={()=>{
                  navigate("/menu");
                  closeMenu();
                }}
                className="text-left hover:text-orange-600"
              >
                Menu
              </button>




              <button
                onClick={()=>{
                  navigate("/about");
                  closeMenu();
                }}
                className="text-left hover:text-orange-600"
              >
                About Us
              </button>




              <button
                onClick={()=>{
                  navigate("/contact");
                  closeMenu();
                }}
                className="text-left hover:text-orange-600"
              >
                Contact
              </button>




              <a

                href={`https://wa.me/${whatsappNumber}`}

                target="_blank"

                rel="noopener noreferrer"

                className="hover:text-orange-600"

              >

                Chat

              </a>
               </div>


          </div>

        )
      }



    </nav>

  );

};


export default Navbar;