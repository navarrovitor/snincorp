export default function About() {
  const skills = [
    "Concept Design",
    "Master Planning",
    "Sustainable Design",
    "Interior Architecture",
    "3D Visualization",
    "Construction Documentation",
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_3fr] md:items-start">
        <div className="relative aspect-square w-full max-w-sm overflow-hidden bg-foreground/5">
          {/* Placeholder avatar/photo — replace with real image once available. */}
          <div className="flex h-full w-full items-center justify-center text-sm text-foreground/40">
            Photo placeholder
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">About</h2>

          <p className="text-foreground/80">
            Studio Núcleo is an architecture practice focused on designing
            buildings that respond directly to their site, climate, and
            community. Our work spans commercial, residential, and cultural
            programs across South America and Europe.
          </p>

          <p className="text-foreground/80">
            We believe good architecture is the product of careful listening —
            to clients, to context, and to the constraints that make a project
            unique. Every design starts from research, not a template.
          </p>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wide text-foreground/60">
              Specialties
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="border border-foreground/20 px-3 py-1 text-sm text-foreground/70"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wide underline underline-offset-4"
          >
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
