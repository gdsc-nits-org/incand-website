import React from "react";
import pstyle from "./SponsorPrev.module.scss";
const SponsorPrev = () => {
  return (
    <div className={pstyle.grandparent}>
      <p>Previous Sponsors</p>
      <div className={pstyle.parent}>
        <img src="/logos/asus.png" alt="previous sponsors" className={pstyle.Spons} />
      </div>
      <div className={pstyle.parent2}>
        <img src="/logos/asus.png" alt="previous sponsors" className={pstyle.Spons} />
        <img src="/logos/asus.png" alt="previous sponsors" className={pstyle.Spons} />
      </div>
    </div>
  );
};

export default SponsorPrev;
