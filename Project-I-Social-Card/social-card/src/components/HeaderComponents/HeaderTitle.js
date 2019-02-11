import React from 'react';
import './Header.css';

const HeaderTitle= () => {
    return (
        <div className="header">
            <div className="textWrapper">
                <h1 className="name">Lambda School</h1>
                <h2 className="date">@LambdaSchool - 26 Jan</h2>
            </div>
            <div className="text">
                <p classaName="tweet">Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
            </div>
        </div>
    );
  };
  
  export default HeaderTitle;
  