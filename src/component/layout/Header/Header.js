import React from 'react';
import {ReactNavbar} from "overlay-navbar"
import newLogo1 from "../../../images/newLogo1.png"

import {MdAccountCircle } from "react-icons/md";
import {MdSearch } from "react-icons/md";
import {MdAddShoppingCart } from "react-icons/md";
import "../Header/Header.css";

const options ={
  burgerColor:"#FFAE42",
  
  burgerColorHover:"#ffae42",
  logo:newLogo1,
   logoWidth:"10vmax",
   link2Family: 'Roboto',
   link1Family:'Roboto',
   navColor1:"rgb(201,255,153)",
  logoHoverSize:"10px",
  logoHoverColor: "#000000",
  link1Text: "HOME",
  link2Text:"PRODUCTS",
  link3Text: "ABOUT",

  link4Text: "CONTACT",
  
  link1Url:"/",
  link2Url: "/products",
  link3Url: "/about",
  link4Url: "/contact",
  link1Size: "2.4vmax",
  link1Color: "rgb(76,153,0)",
  
  nav1justifyContent: "flex-start",
  nav2justifyContent:"flex-end",
  nav3justifyContent:"flex-start",
  nav4justifyContent:"flex-end",
  
  link1ColorHover: "",
  link1Margin:"1vmax",
 
  
  profileIconColor:"black",
  searchIconColor:"black",
  cartIconColor:"black",
  profileIconColorHover:"black",
  searchIconColorHover:"black",
  cartIconColorHover: "black",
  // cartIconMargin:"1vmax"   ,

  searchIcon:true,
  SearchIconElement:MdSearch,
  cartIcon:true,
  CartIconElement:MdAddShoppingCart,
  profileIcon:true,
  profileIconUrl :"/login",
  ProfileIconElement:MdAccountCircle,

  searchIconSize:	"3vmax",
  ProfileIconSize:	"3vmax",
  CartIconSize:	"3vmax",
  profileIconMargin:"2.3vmax",
  cartIconMargin:"2.3vmax",
  searchIconMargin:"2.3vmax",
  
}
const Header = () => {
  return (
    
   <ReactNavbar {...options}/>
  );
};
export default Header
