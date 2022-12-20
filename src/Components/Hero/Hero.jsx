import React, { useState, useEffect, useRef } from 'react'
import heroStyles from "./Hero.module.scss"
import HALO from 'vanta/dist/vanta.halo.min.js'
import * as THREE from 'three'

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(HALO({
        el: myRef.current,
        backgroundColor: 0x0c0e1d,
        THREE
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div ref={myRef}>
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
    </div>
  )
}

export default Hero