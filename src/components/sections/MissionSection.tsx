// app/components/sections/mission-section.tsx
"use client";

import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const features = [
  {
    icon: "/images/message-notification-circle.svg",
    text: "Tư vấn chuyên sâu",
  },
  { icon: "/images/check-verified.svg", text: "Đảm bảo chất lượng" },
];

const techItems = [
  { label: "CRM", src: "/images/union/union.png" },
  { label: "AI", src: "/images/union/union-2.png" },
  { label: "DATA", src: "/images/union/union-3.png" },
  { label: "TRUST", src: "/images/union/union-1.png" },
];

export function MissionSection() {
  return (
    <motion.section
      className="bg-white py-[clamp(48px,8vw,100px)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-[1920px] px-[clamp(16px,8vw,200px)]">
        <div
          className="
            flex flex-col lg:flex-row items-center justify-center
            gap-[clamp(32px,8vw,162px)]
            min-h-[clamp(560px,70vh,750px)]
          "
        >
          {/* LEFT */}
          <div className="w-full lg:max-w-[743px] flex flex-col gap-10">
            <motion.h2
              className="text-[#0749AD] font-semibold leading-[130%] text-[32px] md:text-[40px] lg:text-[56px]"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Sứ mệnh của Antco <br className="hidden xl:block" />
              về công nghệ
            </motion.h2>

            <div className="flex flex-col gap-3">
              <motion.p
                className="text-[#112639] font-bold text-[20px] leading-[32px]"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              >
                Sứ mệnh của Antco kiến tạo tương lai nền công nghệ Việt Nam, trở
                thành cường quốc thế giới trong lĩnh vực công nghệ số.
              </motion.p>
              <motion.p
                className="text-[#7B849F] font-normal text-[20px] leading-[32px]"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi mang đến
                những giải pháp công nghệ thông minh, giúp chính phủ &amp; doanh
                nghiệp nâng cao hiệu suất, bảo mật dữ liệu và phát triển bền
                vững trong thời đại số.
              </motion.p>

              {/* Badges */}
              <div className="flex flex-col gap-3 pt-1">
                {features.map((f, i) => (
                  <motion.div
                    key={f.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.3 + i * 0.15,
                    }}
                  >
                    <Badge
                      className="flex w-fit items-center gap-2 px-3 py-1.5
                                 bg-[#D8EFFF] text-[#0749AD] border-0 rounded-full"
                    >
                      <Image src={f.icon} alt={f.text} width={24} height={24} />
                      <span className="text-[16px] leading-[24px]">
                        {f.text}
                      </span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap items-start gap-4 pt-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  withArrow
                  className="h-14 min-w-[127px] px-6 rounded-full text-white
                             bg-[linear-gradient(96.96deg,#2BA9FA_0.85%,#1851C1_97.4%)]
                             hover:opacity-90
                             text-[16px] font-semibold leading-[24px]"
                >
                  Xem thêm
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  withArrow
                  variant="ghost"
                  className="h-14 min-w-[184px] px-6 rounded-full
                             font-inter font-semibold text-[16px] leading-6
                             text-[#1792ED] border border-[#1792ED] bg-white"
                >
                  Nhận tư vấn ngay
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT – Tiles */}
          <div className="w-full lg:max-w-[541px] mx-auto lg:mx-0">
            <div className="grid grid-cols-2 gap-6 aspect-square">
              {techItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="relative overflow-hidden aspect-square"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.7 + i * 0.15,
                  }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[56%] aspect-square rounded-full border-[28px] border-white" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-[Commissioner] font-medium text-[#112639] text-[clamp(18px,2vw,27px)] leading-[130%]">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </motion.section>
  );
}
