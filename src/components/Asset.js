import styles from "./Asset.module.css"

function Asset({ image, link, title, description }) {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank")
    }
  }

  return (
    <div className={styles.asset}>
      <div className={styles.description}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.aboutAsset}>{description}</p>
      </div>
      <div className={styles.container} onClick={handleClick}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt="Imagem do Site" />
          <div className={styles.overlay}></div>
          <h1 className={styles.text}>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default Asset
