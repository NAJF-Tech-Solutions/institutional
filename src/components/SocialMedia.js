import styles from "./SocialMedia.module.css"

function SocialMedia({ image, link }) {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank")
    }
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <img className={styles.image} src={image} alt="Imagem da Rede Social" loading="lazy"></img>
    </div>
  )
}

export default SocialMedia
