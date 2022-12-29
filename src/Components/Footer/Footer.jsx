import React from 'react'
import footerStyles from "./Footer.module.scss"

const Footer = () => {
  return (
    <>
        <div className={footerStyles.footer}>
            <div className="footerLogo">
                <img src="/logos/footerLogo.svg" alt="" />
            </div>
        </div>
    </>
  )
}

export default Footer