/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_FB_PIXEL_ID: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
    FB_ACCESS_TOKEN: process.env.FB_ACCESS_TOKEN,
  }
};

module.exports = nextConfig;
