import React from "react";
import pstyle from "./SponsorPrev.module.scss";
const SponsorPrev = () => {
  return (
    <div>
      <div className={pstyle.grandparent}>
        <p>Previous Sponsors</p>
        <div className={pstyle.parent}>
          <div className={pstyle.child}>
            {" "}
            <img src="/logos/asus.png" alt="" />
          </div>
        </div>
        <div className={pstyle.parent2}>
          <div className={pstyle.child2}>
            {" "}
            <img src="/logos/asus.png" alt="" />
          </div>
          <div className={pstyle.child2}>
            <img src="/logos/asus.png" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorPrev;
