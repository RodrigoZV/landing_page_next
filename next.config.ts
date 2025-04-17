import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/register",
        destination: "/pages/register",
      },
      {
        source: "/about",
        destination: "/pages/about",
      },
      {
        source: "/users",
        destination: "/pages/users",
      },
      {
        source: "/contact",
        destination: "/pages/contact",
      },
      {
        source: "/login",
        destination: "/pages/login",
      },
      {
        source: "/profile",
        destination: "/pages/profile",
      },
    ];
  },
};

export default nextConfig;
