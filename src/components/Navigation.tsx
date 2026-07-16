"use client";

import styles from "./Navigation.module.css";

const NAV_LINKS = [
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Navigation() {
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>
        <span>sn</span>
        <span className={styles.logoAccent}>IN</span>
        <span>corp</span>
      </span>

      <div className={styles.links}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(event) => handleLinkClick(event, link.href)}
            className={styles.link}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
