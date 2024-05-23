import React, { useState } from 'react'
import reviews from './data';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Review() {
   const [index, setIndex] = useState(0);
   const {id,name,job,image,text}=reviews[index];
   const suprise = () => {
     let number = Math.floor(Math.random() * reviews.length - 1);
     if(number==index){
      number=number+1;
     }
     setIndex(checkNumber(number));
   };
   const checkNumber=(number)=>{
    if(number<0){
      return reviews.length-1;
    }
    if(number>reviews.length-1){
      return 0;
    }
    return number;
   }
  const next=()=>{
    setIndex((index)=>{
      let newIndex=index+1;
      return checkNumber(newIndex);
    })

  }
  const prev=()=>{
    setIndex((index)=>{
      let newIndex=index-1;
      return checkNumber(newIndex);
    })
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="" className='person-img'/>
        <span className="quote-icon"></span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prev} >
          <FaAngleLeft />
        </button>
        <button className="next-btn" onClick={next}>
          <FaAngleRight />
        </button>
      </div>

      <button className="random-btn" onClick={suprise}>Suprise me</button>
    </article>
  );
}

export default Review