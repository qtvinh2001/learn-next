"use client";

import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

type Step = {
  id: 1 | 2 | 3 | 4;
  title: string;
  description: string;
  icon: string;
};

export function ProcessSection() {
  const steps: Step[] = [
    {
      id: 1,
      title: "Xác định vấn đề",
      description:
        "Antco đề cao sự tương tác và thấu hiểu để xác định và tìm ra các thách thức mà đối tác đang gặp phải",
      icon: "/images/Solution.svg",
    },
    {
      id: 2,
      title: "Triển khai demo",
      description:
        "Dựa từ sự thấu hiểu, từ nền tảng công nghệ, Antco sẽ tạo ra những demo cho các giải pháp sáng tạo, phù hợp nhất cho từng sản phẩm.",
      icon: "/images/Solution-2.svg",
    },
    {
      id: 3,
      title: "Xây dựng giải pháp cộng tác",
      description:
        "Antco phối hợp để phát triển và tích hợp giải pháp liên tục giúp khách hàng dễ dàng theo dõi tiến độ và đưa ra phản hồi kịp thời, tối đa hoá chất lượng sản phẩm.",
      icon: "/images/Solution-1.svg",
    },
    {
      id: 4,
      title: "Phát triển đề xuất",
      description:
        "Antco xây dựng các đề xuất giải pháp chi tiết để đáp ứng và cải tiến sản phẩm theo sự đổi mới công nghệ cho đối tác.",
      icon: "/images/Solution-3.svg",
    },
  ];

  const StepCard = ({
    s,
    align = "left",
    className = "",
  }: {
    s: Step;
    align?: "left" | "right";
    className?: string;
  }) => (
    <Card
      className={[
        "bg-[#F5F8FF] border-2 border-white shadow-sm rounded-[16px] p-4",
        "md:rounded-[20px] md:p-5",
        "lg:rounded-[24px] lg:p-6",
        "lg:w-[426px]",
        className,
      ].join(" ")}
    >
      <div className={align === "right" ? "lg:text-right" : ""}>
        <h3 className="font-semibold text-[#112639] mb-2 text-[16px] leading-[22px] md:text-[20px] md:leading-[24px] lg:text-[24px] lg:leading-[32px]">
          {s.title}
        </h3>
        <p className="text-[#7B849F] text-[14px] leading-5 md:text-[14px] md:leading-[24px]">
          {s.description}
        </p>
      </div>
    </Card>
  );

  const IconBadge = ({ src, alt }: { src: string; alt: string }) => (
    <div
      className="flex items-center justify-center bg-white border-[6px] border-white/40 rounded-full shrink-0"
      style={{ width: "var(--icon)", height: "var(--icon)" }}
    >
      <Image src={src} alt={alt} width={34} height={34} />
    </div>
  );

  return (
    <section className="w-full bg-[#DEEAFB] pb-10 md:pb-12 lg:pb-0 overflow-x-hidden">
      <div className="mx-auto max-w-[1918px] px-4 md:px-6 relative">
        {/* Header */}
        <header className="text-center mx-auto max-w-[1006px] pt-8 md:pt-12 lg:pt-[100px] mb-8 md:mb-10 lg:mb-6">
          <h2 className="text-[#0749AD] font-semibold leading-[1.3] mb-3 md:mb-4 text-[28px] md:text-[40px] lg:text-[56px]">
            Quy trình phát triển 4 bước
          </h2>
          <p className="text-[#7B849F] mx-auto text-sm md:text-base lg:text-[20px] lg:leading-8">
            Antco cung cấp quy trình phát triển AI linh hoạt, giúp doanh nghiệp
            dễ dàng tích hợp AI vào các hệ thống hiện có như CRM, ERP và nền
            tảng thương mại điện tử.
          </p>
        </header>

        {/* Wrap image + cards */}
        <div
          className="
            relative mx-auto max-w-[1918px]
            [--d:380px] md:[--d:520px] lg:[--d:clamp(440px,42vw,680px)]
            [--card-w:min(426px,32vw)]
            [--gap-x:clamp(16px,2vw,24px)]
            [--icon-gap:clamp(10px,1.2vw,16px)]
            [--icon:clamp(60px,9vw,72px)]
            lg:h-[calc(var(--d)+100px)]
          "
        >
          {/* process.svg — 1 lần */}
          <Image
            src="/images/process.svg"
            alt="Process"
            priority
            width={680}
            height={680}
            className="block mx-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2"
            style={{
              width: "var(--d)",
              height: "var(--d)",
              top: "calc(50% - var(--d)/2 - min(40px, calc(var(--d)*0.0005)))",
            }}
          />

          {/* Mobile & Tablet */}
          <div className="lg:hidden mt-8 md:mt-10 space-y-5 md:space-y-6">
            {steps.map((s) => (
              <div
                key={s.id}
                className="flex items-start gap-[var(--icon-gap)]"
              >
                <IconBadge src={s.icon} alt={s.title} />
                <div className="flex-1">
                  <StepCard s={s} />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden lg:block">
            {/* Trái trên */}
            <div
              className="absolute max-w-full"
              style={{
                left: "calc(50% - var(--d)/2 - var(--gap-x))",
                top: "calc(50% - var(--d)/2 + calc(var(--d)*0.083))",
                width: "min(100%, var(--card-w))",
                transform: "translateX(-100%)",
              }}
            >
              <StepCard s={steps[0]} align="right" />
            </div>

            {/* Trái dưới */}
            <div
              className="absolute max-w-full"
              style={{
                left: "calc(50% - var(--d)/2 - var(--gap-x))",
                top: "calc(50% - var(--d)/2 + calc(var(--d)*0.73))",
                width: "min(100%, var(--card-w))",
                transform: "translateX(-100%)",
              }}
            >
              <StepCard s={steps[2]} align="right" />
            </div>

            {/* Phải trên */}
            <div
              className="absolute max-w-full"
              style={{
                left: "calc(50% + var(--d)/2 + var(--gap-x))",
                top: "calc(50% - var(--d)/2 + calc(var(--d)*0.069))",
                width: "min(100%, var(--card-w))",
              }}
            >
              <StepCard s={steps[1]} align="left" />
            </div>

            {/* Phải dưới */}
            <div
              className="absolute max-w-full"
              style={{
                left: "calc(50% + var(--d)/2 + var(--gap-x))",
                top: "calc(50% - var(--d)/2 + calc(var(--d)*0.73))",
                width: "min(100%, var(--card-w))",
              }}
            >
              <StepCard s={steps[3]} align="left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
