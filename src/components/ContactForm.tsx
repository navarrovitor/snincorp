"use client";

import { useState } from "react";
import type { ContactFormData, ContactFormStatus } from "@/types";

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

// Placeholder endpoint — swap for Formspree/Resend/API route once decided.
const CONTACT_ENDPOINT = "/api/contact";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [status, setStatus] = useState<ContactFormStatus>("idle");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setFormData(INITIAL_FORM_DATA);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm uppercase tracking-wide">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border-b border-foreground/30 bg-transparent py-2 outline-none focus:border-foreground"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm uppercase tracking-wide">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border-b border-foreground/30 bg-transparent py-2 outline-none focus:border-foreground"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm uppercase tracking-wide">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full border-b border-foreground/30 bg-transparent py-2 outline-none focus:border-foreground"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center border border-foreground px-6 py-3 text-sm uppercase tracking-wide transition-colors hover:bg-foreground hover:text-background disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <p role="status" className="text-sm text-foreground/70">
          Thanks — your message has been sent.
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
