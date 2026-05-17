type CaseStudyImageZoneProps = {
  imageUrl?: string;
  alt?: string;
};

function PhotoIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C4B49A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="M21 16l-5.5-5.5a2 2 0 0 0-2.8 0L3 18" />
    </svg>
  );
}

/**
 * 16:10 image zone — brief placeholder styling; not clickable (display only).
 */
export function CaseStudyImageZone({
  imageUrl,
  alt = "",
}: CaseStudyImageZoneProps) {
  return (
    <div
      className="group relative w-full overflow-hidden rounded-t-[12px]"
      style={{ aspectRatio: "16 / 10" }}
    >
      {imageUrl ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={alt}
            className="h-full w-full object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--charcoal)]/0 transition-colors duration-200 group-hover:bg-[var(--charcoal)]/45"
            aria-hidden
          >
            <span className="rounded-full bg-[var(--white)] px-4 py-2 text-xs font-medium text-[var(--charcoal)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Change image
            </span>
          </div>
        </>
      ) : (
        <div
          className="flex h-full w-full cursor-default items-center justify-center bg-[#F0EDE9] transition-colors duration-200 group-hover:bg-[#E8DDD4]"
          aria-hidden
        >
          <PhotoIcon />
        </div>
      )}
    </div>
  );
}
