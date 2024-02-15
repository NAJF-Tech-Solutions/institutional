import styles from "./Employer.module.css"

function Employer({ image, name, office }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="Foto do Founder" loading="lazy"></img>
      <h1 className={styles.name}>{name}</h1>
      <h2>{office}</h2>
    </div>
  )
}

export default Employer
