"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, CheckCircle } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { SOCIAL_LINKS } from "@/lib/constants";

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <SectionWrapper
      id="contact"
      label="Get in touch"
      heading="Contact Me"
      subheading="Have a project in mind? Let's talk. I typically reply within 24 hours."
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="lg:col-span-3"
        >
          {formState === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center gap-4 rounded-2xl
                         border border-accent/20 bg-accent/5 p-12 text-center"
            >
              <CheckCircle size={40} className="text-accent" />
              <h3 className="font-heading text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Message sent!
              </h3>
              <p className="text-zinc-500 text-sm">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <Button variant="ghost" size="sm" onClick={() => setFormState("idle")}>
                Send another
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    Your name
                  </label>
                  <input
                    id="name" name="name" type="text" required
                    placeholder="John Smith"
                    value={form.name} onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    Email address
                  </label>
                  <input
                    id="email" name="email" type="email" required
                    placeholder="you@example.com"
                    value={form.email} onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  Message
                </label>
                <textarea
                  id="message" name="message" rows={6} required
                  placeholder="Tell me about your project…"
                  value={form.message} onChange={handleChange}
                  className="input-field resize-none"
                />
              </div>

              {formState === "error" && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <Button
                type="submit" variant="primary" size="md"
                disabled={formState === "loading"}
                className="self-start"
              >
                {formState === "loading" ? "Sending…" : "Send Message"}
                <Send size={14} />
              </Button>
            </form>
          )}
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          <div className="rounded-2xl border border-black/[0.07] bg-white shadow-sm
                          dark:border-white/[0.07] dark:bg-white/[0.02] dark:shadow-none p-7">
            <h3 className="font-heading text-base font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
              Or reach out directly
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                { href: SOCIAL_LINKS.email, Icon: Mail, label: "hello@harolddelacroix.dev" },
                { href: SOCIAL_LINKS.github, Icon: Github, label: "github.com/harolddelacroix", external: true },
                { href: SOCIAL_LINKS.linkedin, Icon: Linkedin, label: "linkedin.com/in/harolddelacroix", external: true },
              ].map(({ href, Icon, label, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-3 text-sm text-zinc-500 hover:text-accent transition-colors group"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg
                                     border border-black/[0.07] bg-black/[0.04]
                                     dark:border-white/[0.07] dark:bg-white/[0.04]
                                     group-hover:border-accent/30 group-hover:bg-accent/10
                                     transition-all text-zinc-500 group-hover:text-accent">
                      <Icon size={16} />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-accent/10 bg-accent/5 px-5 py-4">
            <p className="text-xs text-accent/80 leading-relaxed">
              <span className="font-semibold text-accent">Fast response.</span>{" "}
              I typically reply within 24 hours. For urgent work, mention it in
              your message.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
