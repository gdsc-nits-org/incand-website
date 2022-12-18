import React from 'react'
import heroStyles from "./Hero.module.scss"

const Hero = () => {
  return (
    <>
        <div className={heroStyles.heroSection}>
            <div className={heroStyles.socialHandle}>
                <div className={heroStyles.socialIcon}>
                  <img src="/logos/linkedin.svg" alt="linkedin" />
                </div>
                <div className={heroStyles.socialIcon}>
                  <img src="/logos/facebook.svg" alt="facebook" />
                </div>
                <div className={heroStyles.socialIcon}>
                  <img src="/logos/instagram.svg" alt="instagram" />
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