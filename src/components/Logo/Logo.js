import React from "react";
import Tilt from "react-tilt";
import face from "./face.png";
import "./Logo.css";
const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt
        className='Tilt pointer br2 shadow-2'
        options={{ max: 45 }}
        style={{ height: 150, width: 150 }}>
        <div className='Tilt-inner'>
          {" "}
          <img src={face} alt='face-logo' />
          👽{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
