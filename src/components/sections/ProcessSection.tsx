"use client";

import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useInView } from "framer-motion";

type Step = {
  id: 1 | 2 | 3 | 4;
  title: string;
  description: string;
  icon: string;
};

function Typewriter({
  text,
  startDelay = 0,
  speed = 30,
  className = "",
  as: Tag = "span",
}: {
  text: string;
  startDelay?: number;
  speed?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = React.useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    let timer: number | NodeJS.Timeout;
    let raf: number | NodeJS.Timeout;
    const start = () => {
      timer = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(timer);
            return c;
          }
          return c + 1;
        });
      }, speed);
    };
    if (startDelay > 0) {
      raf = setTimeout(start, startDelay);
    } else {
      start();
    }
    return () => {
      clearInterval(timer);
      clearTimeout(raf);
    };
  }, [inView, startDelay, speed, text.length]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}
    >
      {text.slice(0, count)}
      {count < text.length && (
        <span className="inline-block w-[1px] align-baseline animate-pulse h-[1em] translate-y-[2px] bg-[#112639] ml-[2px]" />
      )}
    </Tag>
  );
}

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
    delay = 0,
  }: {
    s: Step;
    align?: "left" | "right";
    className?: string;
    delay?: number;
  }) => {
    const titleSpeed = 25;
    const descSpeed = 12;
    const descDelay = delay + s.title.length * titleSpeed + 200;

    return (
      <Card
        className={[
          "bg-[#F5F8FF] border-2 border-white shadow-sm",
          "rounded-[12px] p-3",
          "sm:rounded-[14px] sm:p-4",
          "md:rounded-[16px] md:p-5",
          "lg:rounded-[20px] lg:p-6",
          "xl:rounded-[24px] xl:p-8",
          "overflow-hidden w-full",
          className,
        ].join(" ")}
      >
        <div className={align === "right" ? "xl:text-right" : ""}>
          <Typewriter
            as="h3"
            text={s.title}
            startDelay={delay}
            speed={titleSpeed}
            className="font-semibold text-[#112639] mb-2 text-[16px] leading-[22px] md:text-[20px] md:leading-[24px] lg:text-[24px] lg:leading-[32px]"
          />
          <Typewriter
            as="p"
            text={s.description}
            startDelay={descDelay}
            speed={descSpeed}
            className="
              text-[#7B849F]
              text-[13px] leading-5
              md:text-[14px] md:leading-6
              lg:text-[15px] lg:leading-[22px]
              xl:text-[16px] xl:leading-[24px]
            "
          />
        </div>
      </Card>
    );
  };

  const IconBadge = ({ src, alt }: { src: string; alt: string }) => (
    <div
      className="flex items-center justify-center bg-white border-[6px] border-white/40 rounded-full shrink-0"
      style={{ width: "var(--icon)", height: "var(--icon)" }}
    >
      <Image src={src} alt={alt} width={34} height={34} />
    </div>
  );

  const delayFor = (id: number) => (id - 1) * 250;

  return (
    <section className="w-full bg-[#DEEAFB] pb-10 md:pb-12 xl:pb-0 overflow-x-hidden">
      <div className="mx-auto max-w-[1918px] px-4 md:px-6 relative">
        {/* Header */}
        <header className="text-center mx-auto max-w-[1006px] pt-8 md:pt-12 xl:pt-[100px] mb-8 md:mb-10 xl:mb-6">
          <h2 className="text-[#0749AD] font-semibold leading-[1.3] mb-3 md:mb-4 text-[28px] md:text-[40px] xl:text-[56px]">
            Quy trình phát triển 4 bước
          </h2>
          <p className="text-[#7B849F] mx-auto text-sm md:text-base xl:text-[20px] xl:leading-8">
            Antco cung cấp quy trình phát triển AI linh hoạt, giúp doanh nghiệp
            dễ dàng tích hợp AI vào các hệ thống hiện có như CRM, ERP và nền
            tảng thương mại điện tử.
          </p>
        </header>

        {/* Wrap image + cards */}
        <div
          className="
            relative mx-auto max-w-[1918px]
            [--d:380px] md:[--d:520px] xl:[--d:clamp(440px,42vw,680px)]
            [--card-w:min(426px,32vw)]
            [--gap-x:clamp(16px,2vw,24px)]
            [--icon-gap:clamp(10px,1.2vw,16px)]
            [--icon:clamp(60px,9vw,72px)]
            xl:h-[calc(var(--d)+100px)]
          "
        >
          {/* process.svg */}
          <Image
            src="/images/process.svg"
            alt="Process"
            priority
            width={680}
            height={680}
            className="block mx-auto xl:absolute xl:left-1/2 xl:-translate-x-1/2"
            style={{
              width: "var(--d)",
              height: "var(--d)",
              top: "calc(50% - var(--d)/2 - min(40px, calc(var(--d)*0.0005)))",
            }}
          />

          {/* Mobile & Tablet */}
          <div className="xl:hidden mt-8 md:mt-10 space-y-5 md:space-y-6">
            {steps.map((s) => (
              <div
                key={s.id}
                className="flex items-start gap-[var(--icon-gap)]"
              >
                <IconBadge src={s.icon} alt={s.title} />
                <div className="flex-1">
                  <StepCard s={s} delay={delayFor(s.id)} />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden xl:block">
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
              <StepCard s={steps[0]} delay={delayFor(1)} align="right" />
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
              <StepCard s={steps[2]} delay={delayFor(3)} align="right" />
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
              <StepCard s={steps[1]} delay={delayFor(2)} align="left" />
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
              <StepCard s={steps[3]} delay={delayFor(4)} align="left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
