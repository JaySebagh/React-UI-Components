import React from 'react';
import './Header.css';
import img from './HeaderImg.png'

const ImageThumbnail= () => {
    return (
      <div>
          <img className="icon" src={img} alt={"LambdaSchool"}></img>
      </div>
    );
  };
  
  export default ImageThumbnail;
  