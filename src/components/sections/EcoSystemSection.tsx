"use client";

import { Button } from "@/components/ui/button";

export function EcoSystemSection() {
  return (
    <section
      className="relative w-full min-h-[442px] flex items-center justify-center 
                 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background_eco_system.png')" }}
    >
      {/* Overlay mờ để chữ rõ hơn */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div
        className="relative flex flex-col items-center justify-center 
                      text-center max-w-[1260px] px-4 gap-10"
      >
        {/* Title + Description */}
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-white text-[32px] md:text-[40px] lg:text-[56px] leading-[130%]">
            Hệ sinh thái AI Antco
          </h1>
          <p className="text-[#C2D9FF] text-sm md:text-base lg:text-[20px] leading-[160%]">
            Antco cung cấp dịch vụ chuyển đổi số và giải pháp AI toàn diện, được
            thiết kế tùy chỉnh theo đặc thù từng lĩnh vực. Các giải pháp của
            chúng tôi giúp đơn vị nâng cao trải nghiệm người dùng, tối ưu quy
            trình vận hành, tích hợp trí tuệ nhân tạo để tự động hóa thông minh,
            và giảm thiểu chi phí quản lý một cách hiệu quả và bền vững.
          </p>
        </div>

        {/* CTA Button */}
        <Button
          withArrow
          className="px-6 py-4 h-auto text-[#112639] bg-white hover:bg-white/90 text-neutral-1 
                     rounded-full font-semibold text-sm md:text-base lg:text-[16px] leading-6"
        >
          Tìm hiểu thêm
        </Button>
      </div>
    </section>
  );
}
