import React, { Fragment, useEffect } from "react";
import { CgScrollV } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData.js";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Fashion Finesse"} />
          <div className="banner">
            {/* <p>WELCOME TO SC</p> */}
            <br/> <br/> <br/>
            <h1>FIND AMAZING PRODUCTS HERE</h1>

            <a href="#container">
              <button>
                Scroll<CgScrollV></CgScrollV>
              </button>
            </a>
          </div>
          <div className="big_container">
            <h2 className="Home_Heading">FEATURED PRODUCTS</h2>
            <div className="container" id="container">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
