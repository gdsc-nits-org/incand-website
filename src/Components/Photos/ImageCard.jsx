import styles from "./ImageCard.module.scss"

const Card = ({ src }) => {
    return(
        <img
        className={styles.image}
        src={src}
        draggable="false"
        alt="pictures"
      />
    )
}

export default Card