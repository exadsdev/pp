import React from "react";
import Image from "next/image";
import "./Main.css";

export default function Main() {
  const rawBase = process.env.NEXT_PUBLIC_IMG_BASE_URL ;
  const baseURL = String(rawBase || "").replace(/\/+$/, ""); // กัน null/undefined

  const images = ["001.gif", "002.gif", "003.gif", "004.gif", "005.gif"];

  return (
    <div className="main-images">
      {images.map((img, i) => {
        const file = typeof img === "string" ? img : "";
        const altText = file.endsWith(".png") ? file.slice(0, -4) : (file || "image");
        return (
          <a
            key={file || i}
            href={baseURL}
            className="image-wrapper"
            target="_blank"
          >
         <Image
  src={`${baseURL}/img/phone/${file}`}
  alt={altText}
  fill
  sizes="100vw"
  style={{ objectFit: "cover" }}
  unoptimized={true} // ปิดการ optimize ทำให้โหลดจากทุกโดเมนได้
/>

          </a>
        );
      })}
    </div>
  );
}
