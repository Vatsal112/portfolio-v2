import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent — I'll reply within a day.");
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-60" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
            <h2 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Let's Build <span className="text-gradient">Something Great</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Have a product in mind, or just want to chat about architecture? I read every message.
            </p>

            <form onSubmit={onSubmit} className="mt-10 grid gap-4 md:grid-cols-2">
              <input required name="name" placeholder="Your name" className="md:col-span-1 rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand" />
              <input required type="email" name="email" placeholder="Email" className="md:col-span-1 rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand" />
              <textarea required name="message" rows={5} placeholder="Tell me about your project…" className="md:col-span-2 resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand" />
              <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {[
                    { icon: Github, href: "#", label: "GitHub" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                  ].map((s) => (
                    <a key={s.label} aria-label={s.label} href={s.href} className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/60 text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground">
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
                <button disabled={sending} className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03] disabled:opacity-60">
                  {sending ? "Sending…" : "Send message"}
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© 2026 Alex Mercer. Built with care.</p>
          <p>Made with React, TypeScript & a lot of coffee.</p>
        </footer>
      </div>
    </section>
  );
}
