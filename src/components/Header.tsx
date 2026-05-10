"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const EMAIL = "mailto:gjataluarda@gmail.com";

/** Order matches design concept wireframe: About · Services · Work · Contact */
const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "Contact", href: EMAIL },
] as const;

function NavUnderline({ active }: { active: boolean }) {
  return (
    <span
      className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left rounded-full bg-[var(--deep-terra)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{ transform: active ? "scaleX(1)" : "scaleX(0)" }}
      aria-hidden
    />
  );
}

type NavItemProps = {
  href: string;
  label: string;
  active: boolean;
  onMailtoClick?: () => void;
  onInternalClick?: () => void;
  variant: "desktop" | "mobile";
};

function NavItem({
  href,
  label,
  active,
  onMailtoClick,
  onInternalClick,
  variant,
}: NavItemProps) {
  const isMail = href.startsWith("mailto:");

  const desktopClass =
    "relative inline-block pb-1 text-sm font-medium text-[var(--stone)] transition-colors hover:text-[var(--charcoal)]";
  const mobileClass =
    "relative inline-block w-fit rounded-[5px] px-2 py-3 text-base font-medium text-[var(--stone)] transition-colors hover:bg-[var(--terra-tint)] hover:text-[var(--charcoal)]";

  const className = variant === "desktop" ? desktopClass : mobileClass;

  if (isMail) {
    return (
      <a
        href={href}
        className={className}
        onClick={() => {
          onMailtoClick?.();
        }}
      >
        <span className="relative z-0">{label}</span>
        <NavUnderline active={active} />
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        onInternalClick?.();
      }}
    >
      <span className="relative z-0">{label}</span>
      <NavUnderline active={active} />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setContactActive(false);
  }

  function isItemActive(href: string): boolean {
    if (contactActive) {
      return href.startsWith("mailto:");
    }
    if (href.startsWith("mailto:")) {
      return false;
    }
    return pathname === href;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--stone-light)] bg-[color-mix(in_srgb,var(--cream)_93%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-[var(--charcoal)] [font-family:var(--font-cormorant),serif]"
        >
          Luarda Gjata
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main"
        >
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              href={item.href}
              label={item.label}
              active={isItemActive(item.href)}
              variant="desktop"
              onMailtoClick={() => setContactActive(true)}
              onInternalClick={() => setContactActive(false)}
            />
          ))}
        </nav>

        <a
          href={EMAIL}
          className="hidden rounded-[5px] bg-[var(--terracotta)] px-4 py-2.5 text-sm font-medium text-[var(--white)] transition-colors hover:bg-[var(--deep-terra)] md:inline-flex"
        >
          Get in touch
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-[5px] border border-[var(--stone-light)] bg-[var(--white)] px-3 py-2 text-sm font-medium text-[var(--charcoal)] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--stone-light)] bg-[var(--cream)] md:hidden">
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4"
            aria-label="Mobile"
          >
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                href={item.href}
                label={item.label}
                active={isItemActive(item.href)}
                variant="mobile"
                onMailtoClick={() => {
                  setContactActive(true);
                  setOpen(false);
                }}
                onInternalClick={() => {
                  setContactActive(false);
                  setOpen(false);
                }}
              />
            ))}
            <a
              href={EMAIL}
              className="mt-2 rounded-[5px] bg-[var(--terracotta)] px-4 py-3 text-center text-sm font-medium text-[var(--white)] transition-colors hover:bg-[var(--deep-terra)]"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
