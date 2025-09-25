"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function EcoSystemSection() {
  return (
    <motion.section
      className="relative w-full min-h-[442px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background_eco_system.png')" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center max-w-[1260px] px-4 gap-10">
        {/* Title + Description */}
        <div className="flex flex-col gap-4">
          <motion.h1
            className="font-semibold text-white text-[32px] md:text-[40px] lg:text-[56px] leading-[130%]"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            Hệ sinh thái AI Antco
          </motion.h1>

          <motion.p
            className="text-[#C2D9FF] text-sm md:text-base lg:text-[20px] leading-[160%]"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
          >
            Antco cung cấp dịch vụ chuyển đổi số và giải pháp AI toàn diện, được
            thiết kế tùy chỉnh theo đặc thù từng lĩnh vực. Các giải pháp của
            chúng tôi giúp đơn vị nâng cao trải nghiệm người dùng, tối ưu quy
            trình vận hành, tích hợp trí tuệ nhân tạo để tự động hóa thông minh,
            và giảm thiểu chi phí quản lý một cách hiệu quả và bền vững.
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            withArrow
            className="px-6 py-4 h-auto text-[#112639] bg-white hover:bg-white/90 text-neutral-1 rounded-full font-semibold text-sm md:text-base lg:text-[16px] leading-6"
          >
            Tìm hiểu thêm
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
