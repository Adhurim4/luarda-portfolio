"use client";

import { useState } from "react";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/config/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
  body?: { message?: string };
};

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submitViaWeb3Forms(): Promise<{ ok: boolean; error?: string }> {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name,
        email,
        subject: `Website enquiry from ${name}`,
        message,
        botcheck: false,
      }),
    });

    const data = (await response.json()) as Web3FormsResponse;
    const apiMessage = data.message ?? data.body?.message;

    if (data.success) {
      return { ok: true };
    }

    return {
      ok: false,
      error:
        apiMessage ??
        "Could not send your message. Please try again or email gjataluarda@gmail.com directly.",
    };
  }

  async function submitViaApi(): Promise<{ ok: boolean; error?: string }> {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, website: "" }),
    });

    const data = (await response.json()) as { error?: string };

    if (response.ok) {
      return { ok: true };
    }

    return {
      ok: false,
      error:
        data.error ??
        "Something went wrong. Please email gjataluarda@gmail.com directly.",
    };
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const result = WEB3FORMS_KEY
        ? await submitViaWeb3Forms()
        : await submitViaApi();

      if (!result.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Could not send your message.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Could not send your message. Please try again or email gjataluarda@gmail.com directly.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="card-refined border-accent-mid/40 bg-accent-light">
        <p className="type-section-title text-lg">Thank you — message sent.</p>
        <p className="type-body mt-3">
          I&apos;ll get back to you as soon as I can. If it&apos;s urgent, you can
          also reach me at{" "}
          <a
            href={CONTACT_MAILTO}
            className="font-medium text-accent-primary hover:text-accent-hover"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-ghost mt-6 px-5 py-2.5"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="contact-name" className="type-label mb-2 block text-charcoal">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="contact-field"
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="type-label mb-2 block text-charcoal">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="contact-field"
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="type-label mb-2 block text-charcoal">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="contact-field resize-y min-h-[140px]"
          disabled={status === "submitting"}
        />
      </div>

      {status === "error" && errorMessage ? (
        <p className="type-caption text-accent-primary" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        className="btn-primary w-full px-6 py-3.5 sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
