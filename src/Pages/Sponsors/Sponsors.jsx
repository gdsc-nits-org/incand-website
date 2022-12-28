import React from 'react'
import style from "./Sponsors.module.scss";


const Sponsors = () => {
  return (
    <div>

      {/* *********************       CONTACT US- STARTS      *******************/}
          <div className={style.contact}>
          <div className={style.contactus}>
            CONTACT US
          </div>
           <div className={style.contactbox}>
            <div className={style.left}></div>
            <div className={style.right}>
             <input type="text" className= {style.field} placeholder='Name'/>
             <input type="email" className= {style.field} placeholder='Email'/>
             <input type="text" className= {style.field} placeholder='Query'/>
             <button >Send</button>


            </div>
           </div>
          </div>

     {/* *********************          CONTACT US- ENDS       *******************/}


    </div>
  )
}

export default Sponsors