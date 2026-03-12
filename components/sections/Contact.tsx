"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, CheckCircle } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useLanguage } from "@/components/contexts/LanguageContext";

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const { t } = useLanguage();
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

  const contactLabels = [
    "harold.delacroix@gmail.com",
    "github.com/HaroldSid",
    "linkedin.com/in/harold-delacroix",
  ];
  return (
    <SectionWrapper
      id="contact"
      label={t.contact.label}
      heading={t.contact.heading}
      subheading={t.contact.subheading}
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
              <h3 className="font-heading text-xl font-semibold text-slate-800 dark:text-zinc-100">
                {t.contact.form.successTitle}
              </h3>
              <p className="text-slate-600 text-sm">
                {t.contact.form.successMessage}
              </p>
              <Button variant="ghost" size="sm" onClick={() => setFormState("idle")}>
                {t.contact.form.sendAnother}
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-slate-600 dark:text-zinc-400">
                    {t.contact.form.name}
                  </label>
                  <input
                    id="name" name="name" type="text" required
                    placeholder={t.contact.form.placeholderName}
                    value={form.name} onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-slate-600 dark:text-zinc-400">
                    {t.contact.form.email}
                  </label>
                  <input
                    id="email" name="email" type="email" required
                    placeholder={t.contact.form.placeholderEmail}
                    value={form.email} onChange={handleChange}
                    className="input-field"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-medium text-slate-600 dark:text-zinc-400">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message" name="message" rows={6} required
                  placeholder={t.contact.form.placeholderMessage}
                  value={form.message} onChange={handleChange}
                  className="input-field resize-none"
                />
              </div>

              {formState === "error" && (
                <p className="text-sm text-red-500">
                  {t.contact.form.error}
                </p>
              )}

              <Button
                type="submit" variant="primary" size="md"
                disabled={formState === "loading"}
                className="self-start"
              >
                {formState === "loading" ? t.contact.form.sending : t.contact.form.send}
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
          <div className="rounded-2xl border border-slate-300/70 bg-blue-50 shadow-sm
                          dark:border-white/[0.07] dark:bg-white/[0.02] dark:shadow-none p-7">
            <h3 className="font-heading text-base font-semibold text-slate-800 dark:text-zinc-200 mb-4">
              {t.contact.sidebarTitle}
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                { href: SOCIAL_LINKS.email, Icon: Mail, label: contactLabels[0], external: false },
                { href: SOCIAL_LINKS.github, Icon: Github, label: contactLabels[1], external: true },
                { href: SOCIAL_LINKS.linkedin, Icon: Linkedin, label: contactLabels[2], external: true },
              ].map(({ href, Icon, label, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-accent transition-colors group"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg
                                     border border-black/[0.07] bg-black/[0.04]
                                     dark:border-white/[0.07] dark:bg-white/[0.04]
                                     group-hover:border-accent/30 group-hover:bg-accent/10
                                     transition-all text-slate-600 group-hover:text-accent">
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
              {t.contact.fastResponse}
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
