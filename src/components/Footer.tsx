import Link from "next/link";
import { LINKEDIN_URL } from "@/config/site";

const EMAIL = "mailto:gjataluarda@gmail.com";
const YEAR = new Date().getFullYear();

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "Contact", href: EMAIL },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--stone-light)] bg-[var(--cream)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:gap-12">
        <div className="space-y-3">
          <p className="text-2xl font-semibold text-[var(--charcoal)] [font-family:var(--font-cormorant),serif]">
            Luarda Gjata
          </p>
          <p className="text-sm text-[var(--stone)]">
            Freelance Digital PR Specialist
          </p>
          <p className="text-sm text-[var(--stone)]">
            <span className="text-[var(--charcoal)]">Email:</span>{" "}
            <a
              href={EMAIL}
              className="transition-colors hover:text-[var(--charcoal)]"
            >
              gjataluarda@gmail.com
            </a>
          </p>
          {LINKEDIN_URL ? (
            <p className="text-sm text-[var(--stone)]">
              <span className="text-[var(--charcoal)]">LinkedIn:</span>{" "}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--charcoal)]"
              >
                Profile
              </a>
            </p>
          ) : null}
        </div>

        <nav
          className="flex flex-col gap-3 md:items-end md:text-right"
          aria-label="Footer"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--stone)]">
            Navigate
          </p>
          <ul className="flex flex-col gap-2 md:items-end">
            {links.map((item) => (
              <li key={item.label}>
                {item.href.startsWith("mailto:") ? (
                  <a
                    href={item.href}
                    className="text-sm text-[var(--stone)] transition-colors hover:text-[var(--charcoal)]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--stone)] transition-colors hover:text-[var(--charcoal)]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-[var(--stone-light)] bg-[var(--white)]">
        <p className="mx-auto max-w-6xl px-5 py-6 text-center text-xs text-[var(--stone)]">
          © {YEAR} Luarda Gjata. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
