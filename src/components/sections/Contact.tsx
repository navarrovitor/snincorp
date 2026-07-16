import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contato" className={styles.section}>
      <div className={styles.grid}>
        <div>
          <div className={styles.eyebrow}>Contato</div>
          <h2 className={styles.heading}>
            Vamos criar
            <br />
            <em>juntos.</em>
          </h2>
          <div className={styles.headingBar} />
        </div>

        <div className={styles.details}>
          <div>
            <div className={styles.label}>Email</div>
            <a href="mailto:contato@snincorp.com.br" className={styles.value}>
              contato@snincorp.com.br
            </a>
          </div>

          <div>
            <div className={styles.label}>Localização</div>
            <p className={`${styles.value} ${styles.valueMultiline}`}>
              São Paulo
              <br />
              Brasil
            </p>
          </div>

          <div>
            <div className={styles.label}>Instagram</div>
            <a href="#" className={styles.value}>
              @snincorp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
