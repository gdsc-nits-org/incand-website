import pstyle from "./SponsorPrev.module.scss";

import data from "../../Data/PreviousSponsors.json";

const SponsorPrev = () => {
  return (
    <div className={pstyle.grandparent}>
      <p>Previous Sponsors</p>
      <div className={pstyle.parent}>
        {data.map((d) => (
          <div key={d.id} className={pstyle.glass}>
            <img
              src={d.imgUrl}
              alt={`Previous Sponsor-${d.id}`}
              className={pstyle.Spons}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorPrev;
