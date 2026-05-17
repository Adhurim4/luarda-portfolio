type SectionWaveDividerProps = {
  /** Small caps label + rule line below the wave (editorial style) */
  label?: string;
  /** Flip the curve for section-to-section direction */
  flip?: boolean;
  className?: string;
};

/**
 * Terracotta wavy section divider — accent-primary (#9A5C40) from the brief.
 */
export function SectionWaveDivider({
  label,
  flip = false,
  className = "",
}: SectionWaveDividerProps) {
  return (
    <div
      className={`w-full ${className || "bg-cream"}`}
      aria-hidden={label ? undefined : true}
    >
      <div
        className={`text-accent-primary ${flip ? "rotate-180" : ""}`}
      >
        <svg
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          className="block h-10 w-full md:h-14"
          role="presentation"
        >
          <path
            d="M0,34 C280,6 520,48 760,26 C1000,10 1220,44 1440,28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {label ? (
        <div className="mx-auto max-w-6xl px-5 pb-6 pt-2 md:pb-8">
          <p className="type-label text-charcoal">{label}</p>
          <hr className="mt-3 border-0 border-t border-rule" />
        </div>
      ) : (
        <div className="h-4 md:h-6" />
      )}
    </div>
  );
}
