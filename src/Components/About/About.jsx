import React from 'react'
import aboutStyles from "./About.module.scss"

const About = () => {
  return (
    <>
        <div className={aboutStyles.aboutIncand}>
            <div className={aboutStyles.aboutUs}>
                <div className={aboutStyles.aboutHeading}>About Us</div>
                <div className={aboutStyles.aboutDesc}>Lorem ipsum dolor sit amet consectetur. Tincidunt cras quis amet habitasse ut velit accumsan. Suspendisse fringilla condimentum id id felis venenatis amet congue. Lorem ipsum dolor sit amet consectetur. Tincidunt cras quis amet habitasse ut velit accumsan. Suspendisse fringilla condimentum id id felis venenatis amet congue.</div>
            </div>
            <div className={aboutStyles.aboutNIT}>
                <div className={aboutStyles.aboutHeading}>About NIT Silchar</div>
                <div className={aboutStyles.aboutDesc}>Lorem ipsum dolor sit amet consectetur. Tincidunt cras quis amet habitasse ut velit accumsan. Suspendisse fringilla condimentum id id felis venenatis amet congue. Lorem ipsum dolor sit amet consectetur. Tincidunt cras quis amet habitasse ut velit accumsan. Suspendisse fringilla condimentum id id felis venenatis amet congue.</div>
            </div>
        </div>
    </>
  )
}

export default About