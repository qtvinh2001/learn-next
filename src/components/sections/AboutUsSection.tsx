// app/components/sections/about-us-section.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AboutUsSection() {
  return (
    <section className="px-4 md:px-8 2xl:px-0">
      {/* Card gradient bo góc, cắt tràn (clip) đúng theo design */}
      <div
        className="
          relative mx-auto overflow-hidden isolate
          max-w-[1518px] rounded-[24px] md:rounded-[32px]
          bg-gradient-to-r from-[#2BA9FA] to-[#1851C1]
          p-6 md:p-8 lg:px-[60px] lg:py-[60px]
          h-[527px] md:h-auto lg:h-[404px]
        "
      >
        {/* Vector nền bên trái (decor) */}
        <Image
          src="/images/antco_mono_logo.png"
          alt=""
          width={630}
          height={630}
          priority={false}
          aria-hidden
          className="
            pointer-events-none select-none
            absolute -z-0
            left-24 md:left-32
            top-[-0%] md:top-[-0%]
            w-[50%] md:w-[35%] lg:w-[25%]
            h-auto opacity-100
          "
        />

        <div
          className="
          absolute z-10
          bottom-0 left-1/2 -translate-x-1/2
          w-[80%] max-w-[420px]
          sm:-bottom-32                          
          md:bottom-0
          lg:top-1/2 lg:-bottom-28 lg:right-10 lg:left-auto
          lg:-translate-y-1/2 lg:translate-x-0
          lg:w-[28%] lg:max-w-none
        "
        >
          <Image
            src="/images/cube.png"
            alt="Minh họa khối tinh thể"
            width={418}
            height={359}
            className="w-full h-auto object-contain"
            priority={false}
          />
        </div>

        {/* Nội dung chữ bên trái */}
        <div className="relative z-20 max-w-[812px]">
          <h2
            className="
              text-white font-semibold leading-[1.3]
              text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px]
            "
          >
            Khai mở ra giải pháp phù hợp nhất cho{" "}
            <br className="hidden md:block " />
            tổ chức của bạn
          </h2>

          <p
            className="
              mt-3 md:mt-4
              text-[#C2D9FF]
              text-[14px] md:text-[18px] lg:text-[20px]
              leading-[1.43] md:leading-[1.6] lg:leading-8
              max-w-[812px]
            "
          >
            Hệ sinh thái Antco cung cấp giải pháp chuyển đổi số và AI tùy chỉnh,
            giúp tổ chức tối ưu vận hành, nâng cao trải nghiệm người dùng và đạt
            hiệu quả bền vững.
          </p>

          <Button
            withArrow
            className="
              mt-5 md:mt-6 h-14 px-6 rounded-full
              bg-white text-[#112639] hover:bg-white/90
              w-full md:w-auto
            "
          >
            Tìm hiểu thêm
          </Button>
        </div>
      </div>
    </section>
  );
}
