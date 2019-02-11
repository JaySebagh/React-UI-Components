import React from 'react';
import './Footer.css';
import img from './footer.png'

const Footer= () => {
    return (
      <div>
          <img className="footer" src={img} alt={"LambdaSchool"}></img>
      </div>
    );
  };
  
  export default Footer;