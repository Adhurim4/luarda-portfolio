type CaseStudyImageZoneProps = {
  imageUrl?: string;
  alt?: string;
  className?: string;
};

function PhotoIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C17B5C"
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
 * 16:9 image zone. Shows the cover image (object-fit: cover) or a neutral
 * placeholder tile when no image has been uploaded.
 */
export function CaseStudyImageZone({
  imageUrl,
  alt = "",
  className = "rounded-t-[12px]",
}: CaseStudyImageZoneProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: "16 / 9" }}
    >
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageUrl} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center bg-stone-light"
          aria-hidden
        >
          <PhotoIcon />
        </div>
      )}
    </div>
  );
}
