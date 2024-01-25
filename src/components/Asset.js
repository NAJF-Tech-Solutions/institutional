import styles from "./Asset.module.css"

function Asset({ image, link, title }) {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank")
    }
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt="Imagem do Site" />
        <div className={styles.overlay}></div>
        <h1 className={styles.text}>{title}</h1>
      </div>
    </div>
  )
}

export default Asset
