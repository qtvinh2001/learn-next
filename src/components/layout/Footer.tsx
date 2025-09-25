"use client";

import Image from "next/image";
import { Logo } from "@/components/shared/Logo";

const socialIcons = [
  { src: "/images/facebook.svg", alt: "Facebook" },
  { src: "/images/youtube.svg", alt: "YouTube" },
  { src: "/images/linkedin.svg", alt: "LinkedIn" },
  { src: "/images/google.svg", alt: "Google" },
];

const cols = [
  {
    title: "Sản phẩm",
    links: ["Tính năng", "Tích hợp", "Giải pháp", "Mô hình", "Hệ sinh thái"],
  },
  {
    title: "Về công ty",
    links: ["Đội ngũ", "Giá trị", "Tầm nhìn", "Blog"],
  },
  {
    title: "Dành cho nhà phát triển",
    links: [
      "Nền tảng AI full stack",
      "Tài liệu hướng dẫn",
      "Tài nguyên",
      "Discord",
      "Hỗ trợ",
    ],
  },
];

const bottomLinks = ["Privacy Policy", "Term of Service", "Sitemap"];

export function Footer() {
  return (
    <footer className="w-full">
      {/* TOP AREA */}
      <div className="bg-white">
        <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-10 py-10 lg:py-12 relative">
          {/* GRID cho mobile–xl */}
          <div className="lg:grid 2xl:hidden grid-cols-1 lg:grid-cols-[360px_1fr] gap-12">
            {/* Left */}
            <div className="flex flex-col items-start gap-6">
              <Logo className="h-12 w-auto" />
              <p className="max-w-[360px] text-[#7B849F] text-[15px] leading-6">
                Nền tảng AI của Antco giúp doanh nghiệp khai thác tối đa trí tuệ
                nhân tạo với giải pháp tùy chỉnh
              </p>
              <div className="flex items-center gap-4">
                {socialIcons.map((icon) => (
                  <Image
                    key={icon.alt}
                    src={icon.src}
                    alt={icon.alt}
                    width={36}
                    height={36}
                    className="h-9 w-9"
                  />
                ))}
              </div>
            </div>
            {/* Right */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {cols.map((col) => (
                <div key={col.title} className="flex flex-col gap-4">
                  <h3 className="text-[#112639] font-semibold text-lg leading-7">
                    {col.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {col.links.map((l) => (
                      <li
                        key={l}
                        className="text-[#7B849F] text-sm leading-6 hover:text-[#1792ED]"
                      >
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 2XL absolute layout Figma (khóa ở 1920px) */}
          <div className="hidden 2xl:block relative w-full max-w-[1920px] h-[396px] mx-auto">
            {/* Logo */}
            <div className="absolute left-[200px] top-[82px]">
              <Logo className="h-14 w-auto" />
            </div>
            {/* Desc */}
            <p className="absolute left-[200px] top-[165px] max-w-[318px] text-[#7B849F] text-[16px] leading-6">
              Nền tảng AI của Antco giúp doanh nghiệp khai thác tối đa trí tuệ
              nhân tạo với giải pháp tùy chỉnh
            </p>
            {/* Social */}
            <div className="absolute left-[200px] top-[274px] flex gap-4">
              {socialIcons.map((icon) => (
                <Image
                  key={icon.alt}
                  src={icon.src}
                  alt={icon.alt}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              ))}
            </div>
            {/* Links */}
            <div className="absolute right-[200px] top-[82px] flex gap-[100px]">
              {cols.map((col) => (
                <div key={col.title} className="flex flex-col gap-4">
                  <h3 className="text-[#112639] font-semibold text-[24px] leading-8">
                    {col.title}
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {col.links.map((l) => (
                      <li
                        key={l}
                        className="text-[#7B849F] text-[16px] leading-6 hover:text-[#1792ED]"
                      >
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] py-4 lg:py-6">
        <div
          className="
      w-full max-w-[1920px] mx-auto
      px-4 sm:px-6 lg:px-10
      flex flex-col items-center justify-center gap-2
      text-center
      sm:flex-row sm:items-center sm:justify-between sm:text-left
    "
        >
          <p className="text-white text-sm">
            © 2025 Antco, Inc. | All rights reserved
          </p>
          <div className="flex items-center justify-center gap-6 text-white text-sm">
            {bottomLinks.map((l) => (
              <span key={l} className="cursor-pointer hover:underline">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
