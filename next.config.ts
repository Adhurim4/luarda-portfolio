import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Private portfolio: tell every crawler not to index any page or file.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive, noimageindex" },
        ],
      },
    ];
  },
};

export default nextConfig;
