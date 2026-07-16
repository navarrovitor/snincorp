import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight">Get in touch</h2>
        <p className="mt-2 text-foreground/70">
          Have a project in mind? Send a message and we&apos;ll get back to you
          shortly.
        </p>
      </div>

      <ContactForm />
    </section>
  );
}
