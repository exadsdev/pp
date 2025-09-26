/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.sexshop168.shop", // ✅ เปลี่ยนเป็น domain ของคุณ
  generateRobotsTxt: true, // ✅ สร้าง robots.txt ให้อัตโนมัติ
  sitemapSize: 5000, // แบ่งไฟล์ถ้ามี URL เกิน 5000 รายการ
  changefreq: "weekly", // แนะนำ search engine ว่าอัปเดตบ่อยแค่ไหน
  priority: 0.7, // ค่าความสำคัญเริ่มต้นของทุกหน้า
  exclude: ["/admin/*"], // ✅ ถ้าอยาก exclude หน้า admin ไม่ให้ index
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/admin/*", "/api/*"], // ปิดไม่ให้ bot เข้าถึงบาง path
      },
    ],
    additionalSitemaps: [
      "https://www.pgphone-store.com/sitemap.xml", // เพิ่ม sitemap อื่นถ้ามี
    ],
  },
};
