// import React, { Fragment } from "react";
 import { useSelector } from "react-redux";
import { Navigate,Outlet} from "react-router-dom";
//  import Loader from "../layout/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading,user,isAdmin } = useSelector((state) => state.user);
  if (loading === false)
    if (isAuthenticated === false) {
      return <Navigate to="/Login"/>;
    }

    if (isAdmin===true && user.role!=="admin") {
      return <Navigate to="/login" />;
    }
  
  return children ? children : <Outlet />;
};

export default PrivateRoute;




// const PrivateRoute = ({
//   // loading,
//   // isAuthenticated,
//   children,
//   // user,
//    isAdmin,
// }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
//   if(loading===false){
//       if (isAuthenticated===false) {
//         return <Navigate to="/login" />;
//       }
    
    
//       if (isAdmin === true && user.role !== "admin") {
//         return <Navigate to="/login" />;
//       }
    
//       return children ? children : <Outlet />;
//   }
// }


// export default PrivateRoute;



// const PrivateRoute = ({ isAdmin, component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);

//   return (
//     <Fragment>
//       {loading === false && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//               return <Redirect to="/login" />;
//             }

//             if (isAdmin === true && user.role !== "admin") {
//               return <Redirect to="/login" />;
//             }

//             return <Component {...props} />;
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };

// export default PrivateRoute;
