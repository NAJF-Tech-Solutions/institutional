import styles from "./Header.module.css"
import logo from "../assets/logo-sem-fundo.png"

export function Header() {
  return (
    <nav className={styles.container}>
      <a href="#home" className={styles.navLink}>
        Home
      </a>
      <a href="#sobre" className={styles.navLink}>
        Quem somos?
      </a>

      <img className={styles.logo} src={logo} alt="Logo da NAJF" loading="lazy" />

      <a href="#portfolio" className={styles.navLink}>
        Nossos Serviços
      </a>
      <a href="#contato" className={styles.navLink}>
        Contato
      </a>
    </nav>
  )
}
