import React from 'react'
import { Link } from 'react-router-dom'
import heroStyles from "./Hero.module.scss"

const Hero = () => {
  return (
    <>
        <div className={heroStyles.heroSection}>
            <div className={heroStyles.socialHandle}>
                <div className={heroStyles.socialIcon}>
                  <a href="https://www.linkedin.com/company/incandescence23/" target="_blank"><img src="/logos/linkedin.svg" alt="linkedin" /></a>
                </div>
                <div className={heroStyles.socialIcon}>
                  <a href="https://www.facebook.com/incandescence.nits/" target="_blank"><img src="/logos/facebook.svg" alt="facebook" /></a>
                </div>
                <div className={heroStyles.socialIcon}>
                  <a href="https://www.instagram.com/incandescence_nitsilchar/" target="_blank"><img src="/logos/instagram.svg" alt="instagram" /></a>
                </div>
                <div className={heroStyles.verticalLine}></div>
            </div>

            <div className={heroStyles.heroAnim}>
              <img src="/logos/heroMainLogo.svg" alt="heroMainLogo" />
            </div>
        </div>
    </>
  )
}

export default Hero