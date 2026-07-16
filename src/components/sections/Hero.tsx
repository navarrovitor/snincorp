"use client";

export default function Hero() {
  const handleScrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-foreground text-background"
    >
      {/*
        Placeholder animated background. Replace with a <video autoPlay muted loop
        playsInline> pointing at /animations/hero-bg.webm once the final animation
        is exported from Claude Design, or swap this div for a canvas/Three.js scene.
      */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[length:400%_400%] opacity-60 [background-image:linear-gradient(120deg,theme(colors.foreground),theme(colors.background),theme(colors.foreground))] animate-[gradient-shift_12s_ease_infinite]"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Architecture, grounded in place.
        </h1>
        <p className="max-w-2xl text-base text-background/80 sm:text-lg">
          Studio Núcleo designs buildings and spaces shaped by their landscape,
          climate, and the people who use them.
        </p>

        <button
          type="button"
          onClick={handleScrollToProjects}
          className="mt-4 inline-flex items-center gap-2 border border-background px-6 py-3 text-sm uppercase tracking-wide transition-colors hover:bg-background hover:text-foreground"
        >
          View projects
          <span aria-hidden>↓</span>
        </button>
      </div>
    </section>
  );
}
