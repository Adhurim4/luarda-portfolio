/**
 * Small terracotta-tinted circles as background accents (design concept v3).
 */
export function DecorativeWarmCircles({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="absolute -right-8 top-8 h-48 w-48 rounded-full bg-[var(--terracotta)]/[0.06] blur-2xl md:right-[12%] md:top-12" />
      <div className="absolute -left-16 top-1/3 h-36 w-36 rounded-full bg-[var(--terra-tint)] blur-xl md:left-[8%]" />
      <div className="absolute bottom-8 right-1/4 h-24 w-24 rounded-full bg-[var(--terracotta)]/[0.08] blur-lg" />
    </div>
  );
}
