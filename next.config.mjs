/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ko",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
