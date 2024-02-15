import styles from "./Loading.module.css"

export const Loading = () => (
  <div className={styles.loadingContainer}>
    <div className={styles.loadingText}>
      Carregando<span className={styles.dot}>.</span><span className={styles.dot}>.</span><span className={styles.dot}>.</span>
    </div>
  </div>
)