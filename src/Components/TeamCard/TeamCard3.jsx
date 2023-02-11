import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

import Data from "../../Data/Team3.json";

import style from "./TeamCard.module.scss";

const TeamCard = () => {
  return Data.map((d, i) => (
    <div className={style.teamSection} key={d[0].id}>
      <h1 className={style.heading}>
        {i === 0 ? "4th Years" : i === 1 ? "3rd Years" : "2nd Years"}
      </h1>
      {d.map((data) => (
        <div className={style.teamCard} key={data.id}>
          <div className={style.body}>
            <div className={style.cardImages}>
              <img src={data.image} alt="" />
            </div>
            <div className={style.teamTitle}>{data.name}</div>
          </div>
          <div className={style.core_mem_text}>{data.rank}</div>
          <div className={style.socialMedia}>
            <div className={style.SocialLogo}>
              <a href={data.fb} target="_blank" label="#">
                <FaFacebook size={35} />
              </a>
            </div>
            <div className={style.SocialLogo}>
              <a href={data.linkedln} target="_blank" label="#">
                <FaLinkedin size={35} />
              </a>
            </div>
            <div className={style.SocialLogo}>
              <a href={data.git} target="_blank" label="#">
                <BsGithub size={35} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  ));
};

export default TeamCard;
