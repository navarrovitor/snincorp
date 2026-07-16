const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:studio@example.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-sm text-foreground/70 sm:flex-row sm:justify-between">
        <p>&copy; {year} Studio Núcleo. All rights reserved.</p>

        <ul className="flex gap-6">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="uppercase tracking-wide transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
