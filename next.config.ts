import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
<<<<<<< HEAD
    return [
      {
        source: "/register",
        destination: "/pages/register",
      },
=======
    return [ 
>>>>>>> f725b2acd16fb484591e34d69d551b52edf75ee6
      {
        source: "/about",
        destination: "/pages/about",
      },
      {
<<<<<<< HEAD
        source: "/users",
        destination: "/pages/users",
      },
      {
=======
>>>>>>> f725b2acd16fb484591e34d69d551b52edf75ee6
        source: "/contact",
        destination: "/pages/contact",
      },
      {
<<<<<<< HEAD
        source: "/login",
        destination: "/pages/login",
      },
      {
        source: "/profile",
        destination: "/pages/profile",
=======
        source: "/register",
        destination: "/pages/register",
      },
      {
        source: "/users",
        destination: "/pages/users",
>>>>>>> f725b2acd16fb484591e34d69d551b52edf75ee6
      },
    ];
  },
};

export default nextConfig;
