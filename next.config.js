/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // อนุญาตให้ next/image โหลดรูปจากโดเมนภายนอกที่ใช้อยู่
    domains: ["myadsdevs.shop", "www.myadsdevs.shop"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "myadsdevs.shop",
        port: "",
        pathname: "/img/phone/**",
      },
      {
        protocol: "https",
        hostname: "www.myadsdevs.shop",
        port: "",
        pathname: "/img/phone/**",
      },
    ],
  },
};

module.exports = nextConfig;
