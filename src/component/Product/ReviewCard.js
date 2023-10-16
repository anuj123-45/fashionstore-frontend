import React from 'react';
import { Rating } from "@material-ui/lab";
// import ReactStars from 'react-rating-stars-component'
import profile from "../../images/profile.png";

const ReviewCard = ({review}) => {

    const options={
      value:review.rating,
        color:"rgba(20,20,20,0.1)",
       readOnly:true,
       precision:0.5,
      };


  return (

    <div className="reviewCard">
      <img src={profile} alt="User" />
      <p>{review.name}</p>
      <Rating {...options} />
      <span className='reviewCardComment'>{review.comment}</span>
    </div>
  )
}

export default ReviewCard

