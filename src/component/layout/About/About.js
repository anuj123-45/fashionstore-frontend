import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import { CgMail } from "react-icons/cg";


const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
       <center><h1>About Us</h1></center>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dejox8otp/image/upload/v1697264386/F_frp5h8.png"
              alt="Founder"
            />
            <Typography>Fashion Finesse</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              Founded in 2023 ,Our agenda is to provide your essential product with good quality and feasible price. <br></br>
             <span>"Our goal is to provide you with the best and happiest products around"
        </span> 
              
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2"></Typography>
            <a
              href="mailto:yadavsuman2803@gmail.com"
              target="blank"
            >
              <CgMail className="CgMailSvgIcon" />
              
            </a>

            <a href="https://instagram.com" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>

           

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;