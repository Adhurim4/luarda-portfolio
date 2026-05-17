"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/** Order matches design concept wireframe: About · Services · Work · Contact */
const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

function NavUnderline({ active }: { active: boolean }) {
  return (
    <span
      className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left rounded-full bg-accent-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{ transform: active ? "scaleX(1)" : "scaleX(0)" }}
      aria-hidden
    />
  );
}

type NavItemProps = {
  href: string;
  label: string;
  active: boolean;
  onNavigate?: () => void;
  variant: "desktop" | "mobile";
};

function NavItem({ href, label, active, onNavigate, variant }: NavItemProps) {
  const desktopClass =
    "relative inline-block pb-1 text-[0.9375rem] leading-snug font-normal text-stone transition-colors hover:text-charcoal";
  const mobileClass =
    "relative inline-block w-fit rounded-[var(--radius-button)] px-2 py-3 text-[1rem] leading-snug font-normal text-stone transition-colors hover:bg-accent-light hover:text-charcoal";

  const className = variant === "desktop" ? desktopClass : mobileClass;

  return (
    <Link href={href} className={className} onClick={onNavigate}>
      <span className="relative z-0">{label}</span>
      <NavUnderline active={active} />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link
          href="/"
          className="type-page-headline text-2xl tracking-tight md:text-[1.75rem]"
        >
          Luarda Gjata
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              href={item.href}
              label={item.label}
              active={pathname === item.href}
              variant="desktop"
            />
          ))}
        </nav>

        <Link href="/contact" className="btn-primary hidden px-4 py-2.5 text-sm md:inline-flex">
          Get in touch
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-[var(--radius-button)] border border-rule bg-white px-3 py-2 text-[0.9375rem] font-normal text-charcoal md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="border-t border-rule bg-cream md:hidden">
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4"
            aria-label="Mobile"
          >
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                href={item.href}
                label={item.label}
                active={pathname === item.href}
                variant="mobile"
                onNavigate={closeMenu}
              />
            ))}
            <Link
              href="/contact"
              className="btn-primary mt-2 px-4 py-3 text-center text-sm"
              onClick={closeMenu}
            >
              Get in touch
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
