import styles from "./Header.module.css"
import logo from "../assets/logo-sem-fundo.png"

function Header() {
  return (
    <div className={styles.container}>
      <a href="#home" className={styles.navLink}>
        Home
      </a>
      <a href="#sobre" className={styles.navLink}>
        Quem somos?
      </a>

      <img className={styles.logo} src={logo} alt="Logo da NAJF" />

      <a href="#portfolio" className={styles.navLink}>
        Nossos Serviços
      </a>
      <a href="#contato" className={styles.navLink}>
        Contato
      </a>
    </div>
  )
}

export default Header
