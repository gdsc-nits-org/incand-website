import React from "react";
import contStyle from "./SponsorCont.module.scss";
const SponsorCont = () => {
  return (
    <div>
      <div className={contStyle.contact}>
            <p>Contact Us</p>
        
        <div className={contStyle.contactbox}>
          <div className={contStyle.left}></div>

          <div className={contStyle.right}>
            
            <input type="text" className={contStyle.field} placeholder="Name" />
            <input type="email" className={contStyle.field} placeholder="Email" />
            <input type="text" className={contStyle.field} placeholder="Query" />
            <button>Send</button>
            
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default SponsorCont;
