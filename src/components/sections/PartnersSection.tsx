"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

const logos = [
  { name: "FPT", src: "/images/partners_logo/FPT_logo.png", w: 104, h: 64 },
  {
    name: "Viettel",
    src: "/images/partners_logo/Viettel_logo.png",
    w: 190,
    h: 38,
  },
  {
    name: "ChatGPT",
    src: "/images/partners_logo/chatgpt_logo.png",
    w: 62,
    h: 64,
  },
  { name: "Neo4j", src: "/images/partners_logo/neo4j_logo.png", w: 149, h: 52 },
  {
    name: "Qualcomm",
    src: "/images/partners_logo/Qualcomm_logo.png",
    w: 218,
    h: 40,
  },
  { name: "AWS", src: "/images/partners_logo/aws_logo.png", w: 56, h: 40 },
  {
    name: "Cloudflare",
    src: "/images/partners_logo/cloudFlare_logo.png",
    w: 82,
    h: 40,
  },
];

function LogoItem({
  name,
  src,
  w,
  h,
  onLoaded,
}: (typeof logos)[number] & { onLoaded: () => void }) {
  return (
    <div className="flex items-center justify-center shrink-0">
      <Image
        src={src}
        alt={name}
        width={w}
        height={h}
        className="
          object-contain
          h-6 sm:h-8 md:h-10 lg:h-12
          w-auto
        "
        onLoadingComplete={onLoaded}
      />
    </div>
  );
}

export function PartnersSection() {
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLDivElement>(null);
  const [segmentWidth, setSegmentWidth] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);

  const SPEED = 80;
  const duration = useMemo(
    () => (segmentWidth ? segmentWidth / SPEED : 20),
    [segmentWidth]
  );

  useEffect(() => {
    if (loadedCount < logos.length) return;
    const w = segmentRef.current?.scrollWidth ?? 0;
    if (w > 0) setSegmentWidth(w);
  }, [loadedCount]);

  useEffect(() => {
    if (!segmentWidth) return;
    controls.start({
      x: [-segmentWidth, 0],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls, duration, segmentWidth]);

  return (
    <section className="relative bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] py-10 sm:py-12 md:py-[40px]">
      <Container>
        <Heading
          level={2}
          className="text-center text-white text-[20px] leading-[32px] font-bold mb-10"
        >
          Hợp tác cùng chúng tôi
        </Heading>

        <div
          className="
            relative overflow-hidden rounded-xl
            [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
            [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          "
        >
          <motion.div
            ref={trackRef}
            animate={controls}
            className="flex w-max items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 whitespace-nowrap"
          >
            {/* Segment A */}
            <div
              ref={segmentRef}
              className="flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 pr-6"
            >
              {logos.map((logo) => (
                <LogoItem
                  key={`a-${logo.name}`}
                  {...logo}
                  onLoaded={() => setLoadedCount((c) => c + 1)}
                />
              ))}
            </div>

            {/* Segment B */}
            <div className="flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 pr-6">
              {logos.map((logo) => (
                <LogoItem
                  key={`b-${logo.name}`}
                  {...logo}
                  onLoaded={() => setLoadedCount((c) => c + 1)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
