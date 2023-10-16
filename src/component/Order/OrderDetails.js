// import React, { Fragment, useEffect,useState } from "react";
// import "./orderDetails.css";
// import { useSelector, useDispatch } from "react-redux";
// import MetaData from "../layout/MetaData";
// import { Link,useParams} from "react-router-dom";
// import { Typography } from "@material-ui/core";
// import { clearErrors } from "../../actions/orderAction";
// import { getOrderDetails } from "../../actions/orderAction";
// import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";



// const OrderDetails = () => {
  
// let {id }= useParams();
  
  
// const { loading, error, order} = useSelector((state) => state.orderDetails);
// const dispatch = useDispatch();
//   const alert = useAlert();
  
//    let{ user} = useSelector((state) => state.user);
//  [user]=useState('')
//   // const [productId, setProductId] = useState("");

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }

//       dispatch(getOrderDetails(id));
      
//   }, [dispatch, alert,error,id]);
      
  
//   return (
//     <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>

//           <MetaData title="orderDetails"/>
//           <div className="orderDetailsPage">
//             <div className="orderDetailsContainer">
//               <Typography component="h1">
//                 Order #{order && order._id}
//               </Typography>
//               <Typography>Shipping Info</Typography>
//               <div className="orderDetailsContainerBox">
//                 <div>
//                   <p>Name:</p>
//                   <span>{order && order.user}</span>
//                 </div>
//                 <div>
//                   <p>Phone:</p>
//                   <span>
//                     {order && order.shippingInfo && order.shippingInfo.phoneNo}
//                   </span>
//                 </div>
//                 <div>
//                   <p>Address:</p>
//                   <span>
//                     {order && order.shippingInfo &&
//                       `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
//                   </span>
//                 </div>
//               </div>
//               <Typography>Payment</Typography>
//               <div className="orderDetailsContainerBox">
//                 <div>
//                   <p
//                     className={
//                       order && order.paymentInfo &&
//                       order.paymentInfo.status === "succeeded"
//                         ? "greenColor"
//                         : "redColor"
//                     }
//                   >
//                     {order && order.paymentInfo &&
//                     order.paymentInfo.status === "succeeded"
//                       ? "PAID"
//                       : "NOT PAID"}
//                   </p>
//                 </div>

//                 <div>
//                   <p>Amount:</p>
//                   <span>{order && order.totalPrice && order.totalPrice}</span>
//                 </div>
//               </div>

//               <Typography>Order Status</Typography>
//               <div className="orderDetailsContainerBox">
//                 <div>
//                   <p
//                     className={
//                      order && order.orderStatus && order.orderStatus === "Delivered"
//                         ? "greenColor"
//                         : "redColor"
//                     }
//                   >
//                     {order && order.orderStatus && order.orderStatus}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="orderDetailsCartItems">
//               <Typography>Order Items:</Typography>
//               <div className="orderDetailsCartItemsContainer">
//                 {order &&order.orderItems &&
//                   order.orderItems.map((item) => (
//                     <div key={item.product}>
//                       <img src={item.image} alt="Product" />
//                       <Link to={`/product/${item.product}`}>
//                         {item.name}
//                       </Link>{" "}
//                       <span>
//                         {item.quantity} X ₹{item.price} ={" "}
//                         <b>₹{item.price * item.quantity}</b>
//                       </span>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// export default OrderDetails;




 

import React, { Fragment, useEffect } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Link, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const OrderDetails = ({ match }) => {
  const {id}=useParams();
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(id));
  }, [dispatch, alert, error,id]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Order Details" />
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1">
                Order #{order && order._id}
              </Typography>
              <Typography>SHIPPING INFORMATION</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>Name:</p>
                  <span>{order.user && order.user.name}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>
                    {order && order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                  </span>
                </div>
              </div>
              <Typography>PAYMENT</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.paymentInfo &&
                    order.paymentInfo.status === "succeeded"
                      ? "PAID"
                      : "NOT PAID"}
                  </p>
                </div>


                <div>
                  <p>Amount:</p>
                  <span>{order.totalPrice && order.totalPrice}</span>
                </div>
              </div>

              <Typography>ORDER STATUS</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.orderStatus && order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.orderStatus && order.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <Typography>ORDER ITEMS:</Typography>
              <div className="orderDetailsCartItemsContainer">
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X ₹{item.price} ={" "}
                        <b>₹{item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;
