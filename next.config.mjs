import { withContentCollections } from "@content-collections/next";

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ required for GitHub Pages (static hosting)
  output: "export",

  // ✅ GitHub Pages can't optimize Next/Image server-side
  images: { unoptimized: true },

  // ✅ required because your site lives at /portfolio
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",

  async headers() {
    return [
      {
        // NOTE: basePath-aware; Next will handle it correctly
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
