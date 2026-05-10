import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 ${className}`}>
      {children}
    </section>
  );
}
