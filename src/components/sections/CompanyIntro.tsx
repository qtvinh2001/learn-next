"use client";
import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Button } from "@/components/ui/button";
import { Header } from "../layout/Header";
import { motion } from "framer-motion";

export function CompanyIntro() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Email submitted:", email);
  };

  return (
    <div className="relative order-0 overflow-hidden">
      {/* Background Image với scale-in */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/company_intro_background.png"
          alt="Company Background"
          fill
          priority
          className="object-cover object-center md:object-[center_-80px] lg:object-[-320px_center]"
        />
      </motion.div>

      {/* Header */}
      <div className="relative z-30">
        <Header />
      </div>

      {/* Content */}
      <section className="relative z-10 pt-28 sm:pt-32 md:pt-20 pb-16 md:pb-32">
        <Container>
          <div
            className="
              grid grid-cols-1
              md:grid-cols-[1.2fr_0.8fr]
              gap-12 md:gap-16 items-center
              min-h-[70vh]
              xl:mr-36
            "
          >
            {/* Content Section */}
            <motion.div
              className="space-y-6 mt-3 md:space-y-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.2 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {/* Main Headings */}
              <motion.div
                className="space-y-2"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
              >
                <Heading
                  level={1}
                  className="font-semibold text-[#1792ED] uppercase tracking-wide leading-tight
                             text-2xl sm:text-3xl md:text-4xl lg:text-[56px]"
                >
                  Đổi mới sáng tạo
                </Heading>
                <Heading
                  level={2}
                  className="font-semibold text-[#112639] uppercase tracking-wide leading-tight whitespace-nowrap
                             text-2xl sm:text-3xl md:text-4xl lg:text-[56px]"
                >
                  Kỷ nguyên vươn mình
                </Heading>
              </motion.div>

              {/* Description */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
                }}
              >
                <Paragraph className="font-inter font-normal text-base leading-6 text-[#7B849F] max-w-2xl">
                  Antco đồng hành cùng chính phủ và doanh nghiệp trên hành trình
                  chuyển đổi số, mang đến các giải pháp công nghệ tùy chỉnh và
                  tiên tiến. Chúng tôi tích hợp trí tuệ nhân tạo thông minh,
                  điện toán đám mây, hạ tầng bảo mật và phân tích dữ liệu lớn để
                  tối ưu hóa quy trình vận hành, nâng cao trải nghiệm người dùng
                  và đảm bảo hiệu quả bền vững cho đối tác.
                </Paragraph>
              </motion.div>

              {/* Email Input Form */}
              <motion.div
                className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg mt-8"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 0.2 },
                  },
                }}
              >
                <div
                  className="flex-1 flex items-center px-4 py-3
                                bg-white/40 border border-white rounded-full
                                backdrop-blur-md shadow-sm w-full"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email"
                    className="flex-1 bg-transparent outline-none border-none
                     font-inter text-base leading-6 text-[#7B849F]
                     placeholder:text-[#7B849F]"
                  />
                </div>

                <Button
                  withArrow
                  onClick={handleSubmit}
                  className="inline-flex justify-center items-center px-6 py-4 gap-2 w-full sm:w-[165px] h-[56px]
                   font-inter font-semibold text-base leading-6 text-white
                   rounded-full bg-gradient-to-r from-[#2BA9FA] to-[#1851C1]"
                >
                  Liên hệ ngay
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
