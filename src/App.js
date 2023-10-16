import Header from "./component/layout/Header/Header.js";
import "./App.css";
import Switch, { BrowserRouter } from "react-router-dom";

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import webfont from "webfontloader";
import React from "react";
import Home from "./component/Home/Home";
import Footer from "./component/layout/Footer/Footer";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
// import { userReducer } from './reducers/userReducer';

import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import PrivateRoute from "./component/Route/PrivateRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";

import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";

function App() {
  const {isAuthenticated,user}=useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey]=useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  React.useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
     getStripeApiKey();
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      
      <Header />
      {isAuthenticated && <UserOptions user={user} />}

    <Routes>
    <Route  element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
      
      {stripeApiKey && (
        <Route
     exact  path="/payment/process"
          element={
            <Elements stripe={loadStripe(stripeApiKey)}>
              <Payment />
            </Elements>
          }
        />
      )}
    </Route>


        <Route exact path="/" element={<Home/>} />
        <Route exact path="/product/:id" element={<ProductDetails/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/products/:keyword" element={<Products/>} />
        <Route exact path="/search" element={<Search/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/order/:id" element={<OrderDetails/>}></Route>
        <Route exact path="/*" element={<NotFound/>}></Route>

        
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route exact path="/account" element={<Profile />} />
          <Route exact path="/me/update" element={<UpdateProfile />} />
          <Route exact path="/password/update" element={<UpdatePassword />} />
        </Route>

        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        <Route exact path="/login" element={<LoginSignUp/>} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/shipping" element={<PrivateRoute> <Shipping /></PrivateRoute>}
 ></Route>
 <Route exact path="/success" element={<PrivateRoute> <OrderSuccess /></PrivateRoute>}
 ></Route>
        

        <Route
          exact
          path="/orders"
          element={
            <PrivateRoute>
              <MyOrders />
            </PrivateRoute>
          }
        ></Route>



<Route exact path ="/order/confirm" element={<PrivateRoute><ConfirmOrder/></PrivateRoute>}/>
<Route exact path="/order/:id" element={<PrivateRoute><OrderDetails/></PrivateRoute>}></Route>


 

 <Route exact path ="/admin/dashboard" element={<PrivateRoute> <Dashboard/></PrivateRoute>}
 ></Route>
        <Route element={<PrivateRoute isAdmin={true} />}>
          {/* <Route exact path="/admin/dashboard" element={<Dashboard />} /> */}
          <Route exact path="/admin/products" element={<ProductList />} />
          <Route exact path="/admin/product" element={<NewProduct/>} />
          <Route exact path="/admin/product/:id" element={<UpdateProduct />} />
          <Route exact path="/admin/orders" element={<OrderList />} />
          <Route exact path="/admin/order/:id" element={<ProcessOrder />} />
          <Route exact path="/admin/users" element={<UsersList />} />
          <Route exact path="/admin/user/:userId" element={<UpdateUser />} />
          <Route exact path="/admin/reviews" element={<ProductReviews />} />
        </Route>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
