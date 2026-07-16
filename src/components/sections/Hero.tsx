"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  const handleScrollToProjects = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    document.querySelector("#projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.verticalRule} />

      <div className={styles.yearRow}>
        <span className={styles.yearLabel}>Est. 2010</span>
      </div>

      <div className={styles.headlineBlock}>
        <div className={styles.logoBg}>
          <svg viewBox="0 0 1040 984" width="100%" height="100%">
            <path d="M293,235 C289,340 296,470 291,600 C288,690 286,740 285,780" fill="none" stroke="#6E8A97" strokeWidth={24} pathLength={1} strokeDasharray={1} className={styles.draw0} />
            <path d="M195,196 C300,178 420,168 505,178 C610,190 680,188 725,184" fill="none" stroke="#6E8A97" strokeWidth={24} pathLength={1} strokeDasharray={1} className={styles.draw1} />
            <path d="M505,62 C517,190 483,285 500,410 C518,535 470,640 494,760 C505,825 490,880 497,928" fill="none" stroke="#F09419" strokeWidth={18} pathLength={1} strokeDasharray={1} className={styles.draw2} />
            <path d="M425,690 C423,770 424,850 423,925" fill="none" stroke="#F09419" strokeWidth={14} pathLength={1} strokeDasharray={1} className={styles.draw3} />
            <path d="M93,797 L367,792" fill="none" stroke="#1B1B1B" strokeWidth={17} pathLength={1} strokeDasharray={1} className={styles.draw4} />
            <path d="M168,838 L365,830" fill="none" stroke="#1B1B1B" strokeWidth={17} pathLength={1} strokeDasharray={1} className={styles.draw5} />
            <path d="M592,772 L975,758" fill="none" stroke="#1B1B1B" strokeWidth={20} pathLength={1} strokeDasharray={1} className={styles.draw6} />
            <path d="M592,812 L975,800" fill="none" stroke="#1B1B1B" strokeWidth={20} pathLength={1} strokeDasharray={1} className={styles.draw7} />
            <path d="M592,852 L975,845" fill="none" stroke="#1B1B1B" strokeWidth={20} pathLength={1} strokeDasharray={1} className={styles.draw8} />
            <path d="M592,905 L975,895" fill="none" stroke="#1B1B1B" strokeWidth={20} pathLength={1} strokeDasharray={1} className={styles.draw9} />
          </svg>
        </div>

        <div className={styles.wordmark}>
          <span>sn</span>
          <span className={styles.wordmarkAccent}>IN</span>
          <span>corp</span>
        </div>

        <div className={styles.taglineRow}>
          <div className={styles.taglineBar} />
          <span className={styles.taglineText}>
            Arquitetura, Urbanismo e Gerenciamento de Obras
          </span>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <p className={styles.locationText}>São Paulo · Brasil</p>

        <a href="#projetos" onClick={handleScrollToProjects} className={styles.cta}>
          <span>Ver Projetos</span>
          <span className={styles.ctaArrow}>
            <span className={styles.ctaLine} />↓
          </span>
        </a>
      </div>
    </section>
  );
}
