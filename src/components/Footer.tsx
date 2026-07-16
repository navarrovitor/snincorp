import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.text}>© 2025 snINcorp</span>
      <span className={styles.text}>Arquitetura · Urbanismo · Gerenciamento</span>
    </footer>
  );
}
