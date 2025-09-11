"use client";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Button } from "@/components/ui/button";
import { Header } from "../layout/Header";

export function CompanyIntro() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Email submitted:", email);
  };

  return (
    <div className="bg-[url('/images/company_intro_background.png')] order-0 bg-no-repeat bg-cover bg-[-100px_center]">
      {/* Header */}
      <div className="relative z-30">
        <Header />
      </div>

      <section
        className="
          relative z-10
          pt-28 sm:pt-32 md:pt-20
          pb-16 md:pb-32
        "
      >
        <Container>
          <div
            className="
              grid grid-cols-1
              md:grid-cols-[1.2fr_0.8fr]
              gap-12 md:gap-16 items-center
              min-h-[70vh]
              /* Tránh đẩy nội dung lệch ở mobile */
              xl:mr-36
            "
          >
            {/* Content Section */}
            <div className="space-y-8 mt-8 md:space-y-12">
              {/* Main Headings */}
              <div className="space-y-2">
                <Heading
                  level={1}
                  className="font-bold text-blue-600 uppercase tracking-wide leading-tight
                             text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                >
                  Đổi mới sáng tạo
                </Heading>
                <Heading
                  level={2}
                  className="font-bold text-gray-900 uppercase tracking-wide leading-tight whitespace-nowrap
                             text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                >
                  Kỷ nguyên vươn mình
                </Heading>
              </div>

              {/* Description */}
              <Paragraph
                className="text-gray-700 max-w-2xl
                           text-sm sm:text-base md:text-lg lg:text-xl
                           leading-relaxed"
              >
                Antco đồng hành cùng chính phủ và doanh nghiệp trên hành trình
                chuyển đổi số, mang đến các giải pháp công nghệ tùy chỉnh và
                tiên tiến. Chúng tôi tích hợp trí tuệ nhân tạo thông minh, điện
                toán đám mây, hạ tầng bảo mật và phân tích dữ liệu lớn để tối ưu
                hóa quy trình vận hành, nâng cao trải nghiệm người dùng và đảm
                bảo hiệu quả bền vững cho đối tác.
              </Paragraph>

              {/* Email Input Form */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <div
                  className="flex-1 flex items-center px-4 py-3
                                bg-white/40 border border-white rounded-full
                                backdrop-blur-md shadow-sm"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email"
                    className="flex-1 bg-transparent outline-none border-none
                               text-gray-800 placeholder-gray-500
                               text-sm sm:text-base md:text-lg"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  className="inline-flex items-center justify-center px-6 py-6 rounded-full
                             text-white font-medium shadow-md
                             bg-gradient-to-r from-sky-400 to-blue-700
                             hover:from-sky-300 hover:to-blue-600
                             transition-all duration-200 text-sm sm:text-base md:text-lg"
                >
                  Liên hệ ngay
                </Button>
              </div>
            </div>

            {/* (Nếu có cột phải/ảnh minh hoạ thì đặt ở đây) */}
          </div>
        </Container>
      </section>
    </div>
  );
}
