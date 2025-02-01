// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig =  {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
          port: '',
          pathname: '/**',
          search: '',
        },
      ],
    },
  }

module.exports = nextConfig;
