import styles from "./Header.module.css"
import logo from "../assets/logo-pequeno.png"

function Header() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} />
    </div>
  )
}

export default Header
