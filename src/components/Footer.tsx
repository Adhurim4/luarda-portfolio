import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_MAILTO, LINKEDIN_URL } from "@/config/site";
const YEAR = new Date().getFullYear();

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-rule bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:gap-12">
        <div className="space-y-3">
          <p className="type-page-headline text-2xl md:text-[1.75rem]">
            Luarda Gjata
          </p>
          <p className="type-caption">
            Digital PR Specialist
          </p>
          <p className="type-caption">
            <span className="text-charcoal">Email:</span>{" "}
            <a
              href={CONTACT_MAILTO}
              className="transition-colors hover:text-charcoal"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="type-caption">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-charcoal"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <nav
          className="flex flex-col gap-3 md:items-end md:text-right"
          aria-label="Footer"
        >
          <p className="type-label text-stone">
            Navigate
          </p>
          <ul className="flex flex-col gap-2 md:items-end">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="type-nav text-stone transition-colors hover:text-charcoal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-rule bg-white">
        <p className="type-caption mx-auto max-w-6xl px-5 py-6 text-center">
          © {YEAR} Luarda Gjata. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
