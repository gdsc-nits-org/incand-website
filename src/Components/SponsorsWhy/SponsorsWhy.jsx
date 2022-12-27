import React from 'react'
import styles from './SponsorsWhy.module.scss'
const SponsorsWhy = () => {
  return (
    <section className={styles.container}>
        <div className={styles.text}>
            <p>Why sponsors us?</p>
        </div>
        <div className={styles.body}>
            <div className={styles.row}>
                <img src="/logos/adver.svg" alt="advertisement" className={styles.imgs}/>
                <p>Publicity through social media, banners,<br/> posters, etc.</p>
            </div>
            <div className={styles.row}>
                <p>Your name and logo on the official<br/>  website of incandescenese</p>
                <img src="/logos/webp.svg" alt="promotion by website" className={styles.imgs}/>
            </div>
            <div className={styles.row}>
                <img src="/logos/plat.svg" alt="good for launch" className={styles.imgs}/>
                <p>Ideal platform for launching new products<br/> and technologies.</p>
            </div>
        </div>
    </section>
  )
}

export default SponsorsWhy