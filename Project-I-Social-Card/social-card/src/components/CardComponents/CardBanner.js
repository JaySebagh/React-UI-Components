import React from 'react';
import './Card.css';
import img from './CardImg.png'


const CardBanner = () => {
    return (
      <div>
        <img className="science" src={img} alt={"science"}></img>
      </div>
    );
  };
  
  export default CardBanner;