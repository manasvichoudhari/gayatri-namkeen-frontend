import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import API from "../utils/api"; 


const TrackOrder = () => {

  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [expandedOrder, setExpandedOrder] = useState(null);


  useEffect(() => {

    const getOrders = async () => {

      try {

        const user = JSON.parse(
          localStorage.getItem("user")
        );


        if (!user?._id) {
          navigate("/login");
          return;
        }


        const res = await API.get(
          `/orders/my-orders/${user._id}`
        );


        setOrders(
          Array.isArray(res.data)
          ? res.data
          : []
        );


      } catch(error) {

        console.log(
          "Fetch Orders Error:",
          error
        );

        setOrders([]);

      }

    };


    getOrders();

  }, [navigate]);





  const activeOrders = orders.filter(
    (order) =>
      order?.orderStatus !== "DELIVERED"
  );



  const completedOrders = orders.filter(
    (order) =>
      order?.orderStatus === "DELIVERED"
  );





  const getStep = (status) => {

    const statusSteps = {
      PLACED:1,
      CONFIRMED:2,
      PACKED:3,
      SHIPPED:4,
      DELIVERED:5
    };


    return statusSteps[status] || 1;

  };






  const OrderCard = ({order}) => {


    const isExpanded =
      expandedOrder === order._id;


    const step =
      getStep(order?.orderStatus);



    const items =
      Array.isArray(order?.items)
      ? order.items
      : [];



    return (

      <div className="
      bg-white rounded-3xl
      shadow-lg
      border border-orange-100
      p-6 mb-8
      ">


        {/* Header */}

        <div className="
        flex justify-between
        items-center
        border-b pb-4
        ">


          <div>

            <h2 className="font-bold text-lg">

              Order #
              {
                order?._id
                ? order._id.slice(-6)
                : "N/A"
              }

            </h2>


            <p className="text-sm text-gray-500">

              {
                order?.createdAt
                ?
                new Date(
                  order.createdAt
                ).toLocaleDateString()
                :
                "Date unavailable"
              }

            </p>


          </div>




          <span className="
          bg-orange-100
          text-orange-700
          px-4 py-2
          rounded-full
          font-bold text-sm
          ">

            {order?.orderStatus}

          </span>



        </div>





        {/* Payment */}


        <div className="
        grid md:grid-cols-2
        gap-4 mt-6
        ">


          <div className="
          bg-orange-50 p-4
          rounded-xl
          ">

            <p className="text-gray-500 text-sm">
              Payment Method
            </p>


            <b>
              {order?.paymentMethod || "COD"}
            </b>

          </div>



          <div className="
          bg-orange-50 p-4
          rounded-xl
          ">


            <p className="text-gray-500 text-sm">
              Payment Status
            </p>


            <b>
              {order?.paymentStatus || "PENDING"}
            </b>


          </div>


        </div>





        {/* Items */}


        <button

        onClick={() =>
          setExpandedOrder(
            isExpanded
            ? null
            : order._id
          )
        }

        className="
        mt-6 w-full
        bg-orange-100
        hover:bg-orange-200
        py-3 rounded-xl
        font-semibold
        "

        >

          {
            isExpanded
            ?
            "▲ Hide Items"
            :
            `▼ View Items (${items.length})`
          }


        </button>





        {
          isExpanded && (

            <div className="
            mt-6 space-y-4
            ">


              {
                items.map((item,index)=>(

                  <div
                  key={index}
                  className="
                  flex gap-4
                  border rounded-xl
                  p-3
                  "
                  >


                    <img

                    src={
                      item?.image ||
                      "/no-image.png"
                    }

                    alt={
                      item?.productName ||
                      "Product"
                    }

                    className="
                    w-24 h-24
                    rounded-xl
                    object-cover
                    "

                    />


                    <div>

                      <h3 className="font-bold">
                        {item?.productName}
                      </h3>


                      <p>
                        Quantity:
                        {item?.quantity}
                      </p>


                      <p className="
                      text-orange-600
                      font-bold
                      ">
                        ₹{item?.price}
                      </p>


                    </div>


                  </div>


                ))
              }


            </div>

          )
        }





        {/* Timeline */}


        <div className="mt-8">

          <h3 className="font-bold mb-5">
            Order Progress
          </h3>


          <div className="
          flex items-center
          justify-between
          ">


          {
            [
              "PLACED",
              "CONFIRMED",
              "PACKED",
              "SHIPPED",
              "DELIVERED"
            ].map((status,index)=>(


              <React.Fragment key={status}>


                <div className="text-center">

                  <div className={`
                  w-5 h-5
                  rounded-full
                  mx-auto
                  ${
                    step >= index+1
                    ?
                    "bg-orange-500"
                    :
                    "bg-gray-300"
                  }
                  `}></div>


                  <p className="text-xs mt-2">
                    {status}
                  </p>


                </div>



                {
                  index < 4 &&
                  <div
                  className={`
                  flex-1 h-1
                  ${
                    step > index+1
                    ?
                    "bg-orange-500"
                    :
                    "bg-gray-300"
                  }
                  `}
                  ></div>
                }


              </React.Fragment>


            ))
          }


          </div>


        </div>





        {/* Total */}


        <div className="
        mt-8 border-t pt-5
        flex justify-between
        ">


          <div>

            <p className="text-gray-500">
              Total Amount
            </p>

            <p className="
            text-2xl
            font-bold
            text-orange-600
            ">

              ₹{order?.totalAmount || 0}

            </p>


          </div>



          <div>

            <p className="text-gray-500">
              Items
            </p>

            <p className="font-bold">
              {items.length}
            </p>

          </div>



        </div>




      </div>

    );

  };







  return (

    <div className="
    bg-orange-50
    min-h-screen
    ">


      <Navbar />



      <div className="
      max-w-5xl
      mx-auto
      px-4 py-10
      ">



        <h1 className="
        text-4xl
        font-bold
        text-center
        mb-10
        ">

          📦 Track Your Orders

        </h1>





        {
          orders.length === 0

          ?

          <div className="
          bg-white
          rounded-3xl
          shadow-lg
          p-10
          text-center
          ">


            <h2 className="text-2xl font-bold">
              No Orders Yet
            </h2>


            <p className="text-gray-500">
              You haven't placed any order.
            </p>


          </div>


          :

          <>


          {
            activeOrders.length > 0 &&

            <>

            <h2 className="
            text-2xl
            font-bold
            text-orange-700
            mb-6
            ">
              🔥 Active Orders
            </h2>


            {
              activeOrders.map(order=>(

                <OrderCard
                key={order._id}
                order={order}
                />

              ))
            }

            </>

          }





          {
            completedOrders.length > 0 &&

            <>

            <h2 className="
            text-2xl
            font-bold
            text-green-700
            mt-12 mb-6
            ">
              ✅ Completed Orders
            </h2>


            {
              completedOrders.map(order=>(

                <OrderCard
                key={order._id}
                order={order}
                />

              ))
            }


            </>

          }



          </>

        }



      </div>


    </div>

  );

};


export default TrackOrder;