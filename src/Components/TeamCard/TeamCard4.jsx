import React from "react";
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import Data from '../../Data/Team4.json'
import style from "./TeamCard.module.scss";
const TeamCard = () => {
  return (<div className={style.teamSection}>
  
      {
        Data.map(data => {
          return (
            <div className={style.teamCard} key={data.id}>
              <div className={style.coreMem}>
                <div className={style.cardImages}>
                  <img src={data.image} alt="" />
                </div>
                <h1 className={style.teamTitle}>{data.name}</h1>
              </div>
              <p className={style.core_mem_text}>{data.rank}</p>
              <div className={style.socialMedia}>
                <a href={data.fb} className={style.SocialLogo} label="#"><FaFacebook size={40}/></a>
                <a href={data.linkedln} className={style.SocialLogo} label="#"><FaLinkedin size={40}/></a>
                <a href={data.git} className={style.SocialLogo} label="#"><BsGithub size={40} /></a>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default TeamCard;
