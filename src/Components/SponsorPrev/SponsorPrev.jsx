import React from "react";
import pstyle from "./SponsorPrev.module.scss";
const SponsorPrev = () => {
  return (
    <div className={pstyle.grandparent}>
      <p>Previous Sponsors</p>
      <div className={pstyle.parent}>
        <div className={pstyle.glass}>
          <img src="/logos/asus.png" alt="previous sponsors" className={pstyle.Spons} />
        </div>
      </div>
      <div className={pstyle.parent2}>
        <div className={pstyle.glass}>
          <img src="/logos/asus.png" alt="previous sponsors" className={pstyle.Spons} />
        </div>
        <div className={pstyle.glass}>
          <img src="/logos/asus.png" alt="previous sponsors" className={pstyle.Spons} />
        </div>
      </div>
    </div>
  );
};

export default SponsorPrev;
