import styles from "./Header.module.css"
import logo from "../assets/logo-sem-fundo.png"

function Header() {
  return (
    <div className={styles.container}>
      <a href="#about" className={styles.navLink}>
        Home
      </a>
      <a href="#whoIs" className={styles.navLink}>
        Quem somos?
      </a>

      <img className={styles.logo} src={logo} alt="Logo da NAJF" />

      <a href="#assets" className={styles.navLink}>
        Nossos Serviços
      </a>
      <a href="#contact" className={styles.navLink}>
        Contato
      </a>
    </div>
  )
}

export default Header
