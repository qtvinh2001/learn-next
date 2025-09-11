// app/components/sections/footer.tsx
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
      <div className="w-full bg-white">
        <div
          className="
            mx-auto w-full max-w-[1920px]
            px-4 sm:px-6
            py-8 sm:py-10
            lg:px-10 lg:py-12
            2xl:px-0 2xl:py-0
            relative
            2xl:h-[396px]
          "
        >
          {/* === MOBILE FLOW (giữ nguyên) === */}
          <div className="lg:hidden flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <Logo className="h-14 w-auto mr-auto" />
              <p className="max-w-[318px] text-[#7B849F] text-sm sm:text-base leading-6">
                Nền tảng AI của Antco giúp doanh nghiệp khai thác tối đa trí tuệ
                nhân tạo với giải pháp tùy chỉnh
              </p>
              <div className="flex items-center gap-4">
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
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-10">
              <div>
                <h3 className="text-[#112639] font-semibold text-2xl leading-8">
                  {cols[0].title}
                </h3>
                <ul className="mt-4 flex flex-col gap-4">
                  {cols[0].links.map((l) => (
                    <li
                      key={l}
                      className="text-[#7B849F] text-base leading-6 hover:text-[#1792ED] cursor-pointer"
                    >
                      {l}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[#112639] font-semibold text-2xl leading-8">
                  {cols[1].title}
                </h3>
                <ul className="mt-4 flex flex-col gap-4">
                  {cols[1].links.map((l) => (
                    <li
                      key={l}
                      className="text-[#7B849F] text-base leading-6 hover:text-[#1792ED] cursor-pointer"
                    >
                      {l}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2">
                <h3 className="text-[#112639] font-semibold text-2xl leading-8">
                  {cols[2].title}
                </h3>
                <ul className="mt-4 flex flex-col gap-4">
                  {cols[2].links.map((l) => (
                    <li
                      key={l}
                      className="text-[#7B849F] text-base leading-6 hover:text-[#1792ED] cursor-pointer"
                    >
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* === LG & XL: GRID (responsive, chữ nhỏ hơn) === */}
          <div className="hidden lg:grid 2xl:hidden grid-cols-1 lg:grid-cols-[minmax(0,360px)_1fr] gap-12">
            {/* Left block */}
            <div className="flex flex-col gap-6">
              <Logo className="h-12 w-auto" />
              <p className="max-w-[360px] text-[#7B849F] text-[15px] lg:text-[15px] xl:text-[15px] leading-6">
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

            {/* Right columns */}
            <div className="grid grid-cols-3 gap-x-12 gap-y-10">
              {cols.map((col) => (
                <div key={col.title} className="min-w-0">
                  <h3
                    className="text-[#112639] font-semibold leading-7
                                  text-[18px] lg:text-[20px] xl:text-[22px]"
                  >
                    {col.title}
                  </h3>
                  <ul className="mt-4 flex flex-col gap-3">
                    {col.links.map((l) => (
                      <li
                        key={l}
                        className="text-[#7B849F] leading-6
                                   text-[14px] lg:text-[14.5px] xl:text-[15px]
                                   hover:text-[#1792ED] cursor-pointer"
                      >
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* === 2XL: ABSOLUTE THEO FIGMA (font đúng 24/16) === */}
          {/* Logo block (Frame 170) */}
          <div className="hidden 2xl:block 2xl:absolute 2xl:left-[200px] 2xl:top-[82px]">
            <Logo className="h-14 w-auto" />
          </div>

          {/* Description */}
          <p className="hidden 2xl:block 2xl:absolute 2xl:left-[200px] 2xl:top-[164.83px] 2xl:w-[318px] text-[#7B849F] text-[16px] leading-6">
            Nền tảng AI của Antco giúp doanh nghiệp khai thác tối đa trí tuệ
            nhân tạo với giải pháp tùy chỉnh
          </p>

          {/* Social icons row (Frame 161) */}
          <div className="hidden 2xl:flex 2xl:absolute 2xl:left-[200px] 2xl:top-[274px] gap-4">
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

          {/* Right columns container (Frame 245) */}
          <div className="hidden 2xl:flex 2xl:absolute 2xl:left-[976px] 2xl:top-[82px] 2xl:w-[716px] 2xl:h-[232px] 2xl:gap-[100px]">
            {/* Col 1: Sản phẩm */}
            <div className="flex flex-col gap-4 min-w-[115px]">
              <h3 className="text-[#112639] font-semibold text-[24px] leading-8">
                {cols[0].title}
              </h3>
              <ul className="flex flex-col gap-4">
                {cols[0].links.map((l) => (
                  <li
                    key={l}
                    className="text-[#7B849F] text-[16px] leading-6 hover:text-[#1792ED] cursor-pointer"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Về công ty */}
            <div className="flex flex-col gap-4 min-w-[124px]">
              <h3 className="text-[#112639] font-semibold text-[24px] leading-8">
                {cols[1].title}
              </h3>
              <ul className="flex flex-col gap-4">
                {cols[1].links.map((l) => (
                  <li
                    key={l}
                    className="text-[#7B849F] text-[16px] leading-6 hover:text-[#1792ED] cursor-pointer"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Dành cho dev */}
            <div className="flex flex-col gap-4 min-w-[277px]">
              <h3 className="text-[#112639] font-semibold text-[24px] leading-8">
                {cols[2].title}
              </h3>
              <ul className="flex flex-col gap-4">
                {cols[2].links.map((l) => (
                  <li
                    key={l}
                    className="text-[#7B849F] text-[16px] leading-6 hover:text-[#1792ED] cursor-pointer"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] px-4 sm:px-6 lg:px-[170px] py-4 lg:py-6">
        <div className="mx-auto max-w-[1920px] flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-white text-sm">
            © 2025 Antco, Inc. | All rights reserved
          </p>
          <div className="flex items-center gap-6 text-white text-sm">
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
