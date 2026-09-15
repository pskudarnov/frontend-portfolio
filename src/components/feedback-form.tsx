"use client";

import { FormEvent, useState } from "react";
import { LoaderCircle, Send } from "lucide-react";

type FeedbackCopy = {
  title: string;
  description: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
};

export function FeedbackForm({ copy }: { copy: FeedbackCopy }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    ["name", "email", "message"].forEach((fieldName) => {
      const field = form.elements.namedItem(fieldName);
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
        field.value = field.value.trim();
      }
    });

    if (!form.checkValidity()) {
      setStatus("idle");
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      if (!response.ok) throw new Error("Feedback request failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const isSending = status === "sending";

  return (
    <form className="mx-auto mt-10 max-w-xl text-left" onSubmit={handleSubmit}>
      <div className="mb-5 text-center">
        <h3 className="text-lg font-medium text-zinc-100">{copy.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{copy.description}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-zinc-300">
          {copy.nameLabel}
          <input
            required
            name="name"
            minLength={2}
            maxLength={80}
            autoComplete="name"
            placeholder={copy.namePlaceholder}
            className="rounded-md border border-zinc-700 bg-black/30 px-3 py-2.5 text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30"
          />
        </label>
        <label className="grid gap-2 text-sm text-zinc-300">
          {copy.emailLabel}
          <input
            required
            name="email"
            type="email"
            maxLength={254}
            autoComplete="email"
            placeholder={copy.emailPlaceholder}
            className="rounded-md border border-zinc-700 bg-black/30 px-3 py-2.5 text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30"
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm text-zinc-300">
        {copy.messageLabel}
        <textarea
          required
          name="message"
          rows={5}
          minLength={10}
          maxLength={2000}
          placeholder={copy.messagePlaceholder}
          className="resize-y rounded-md border border-zinc-700 bg-black/30 px-3 py-2.5 text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30"
        />
      </label>

      <label className="sr-only" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="mt-5 flex flex-col items-center gap-3">
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex items-center gap-2 rounded-md bg-violet-500 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          {isSending ? <LoaderCircle className="size-4 animate-spin" /> : <Send className="size-4" />}
          {isSending ? copy.sending : copy.submit}
        </button>
        <p className="min-h-5 text-center text-sm" aria-live="polite">
          {status === "success" && <span className="text-emerald-400">{copy.success}</span>}
          {status === "error" && <span className="text-rose-400">{copy.error}</span>}
        </p>
      </div>
    </form>
  );
}
