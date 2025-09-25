"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

type Member = {
  title: string;
  name: string;
  description: string;
  image: string;
};

const members: Member[] = [
  {
    title: "GIÁM ĐỐC ĐIỀU HÀNH",
    name: "Phan Đức Chiến",
    description: "Chuyên gia tư vấn phần mềm & giải pháp chuyển đổi số",
    image: "/images/members/member_1.png",
  },
  {
    title: "TIẾN SĨ",
    name: "Nguyễn Anh Việt",
    description: "Chuyên gia trí tuệ nhân tạo và dữ liệu",
    image: "/images/members/member_2.png",
  },
  {
    title: "PGS.TS",
    name: "Lê Thanh Hương",
    description: "Tiến sĩ Khoa học Máy tính, cố vấn chuyên môn",
    image: "/images/members/member_3.png",
  },
  {
    title: "KỸ SƯ",
    name: "Nguyễn Anh Minh",
    description: "Chuyên gia an toàn thông tin & bảo mật",
    image: "/images/members/member_4.png",
  },
];

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

export function MembersSection() {
  return (
    <section
      className="
        flex flex-col items-center
        px-4 md:px-12 lg:px-[200px]
        py-8 md:py-16 lg:py-[100px]
        gap-[40px] lg:gap-[60px]
      "
    >
      {/* Header */}
      <div className="max-w-[1006px] mx-auto flex flex-col items-center gap-3 md:gap-5">
        <h2
          className="
            text-center font-semibold
            text-[28px] leading-[36px]
            md:text-[40px] md:leading-[52px]
            lg:text-[56px] lg:leading-[73px]
            text-[#0749AD]
          "
        >
          Đội ngũ của chúng tôi
        </h2>

        <p
          className="
            text-center text-[#7B849F]
            text-[14px] leading-[20px]
            md:text-[18px] md:leading-[28px]
            lg:text-[20px] lg:leading-[32px]
            max-w-[1006px]
          "
        >
          Antco cung cấp quy trình phát triển AI linh hoạt, giúp doanh nghiệp dễ
          dàng tích hợp AI vào các hệ thống hiện có như CRM, ERP và nền tảng
          thương mại điện tử.
        </p>
      </div>

      {/* Grid + animation */}
      <motion.div
        className="
    grid gap-4 md:gap-6 lg:gap-8
    grid-cols-2 xl:grid-cols-4
    w-full max-w-[1520px]
  "
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {members.map((m, idx) => (
          <motion.article
            key={m.name}
            variants={itemVariants}
            transition={{
              duration: 0.55,
              ease: EASE_OUT,
              delay: idx * 0.03,
            }}
            className="
              flex flex-col items-center gap-3 md:gap-6
              w-full
              max-w-[220px] sm:max-w-[260px] md:max-w-[300px]
              lg:max-w-[320px] xl:max-w-[356px]
              mx-auto
            "
            whileHover={{ y: -4 }}
          >
            {/* Card */}
            <div
              className="
                relative w-full
                h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] xl:h-[458px]
                rounded-[16px] md:rounded-[24px] xl:rounded-[32px]
                overflow-hidden
                bg-gradient-to-br from-[#EAF6FF] via-[#F9FCFF] to-white
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute -left-[159px] -top-[178px]
                  w-[405px] h-[405px] rounded-full
                  bg-[#2B90FA12] blur-[102px]
                  md:-left-[286px] md:-top-[348px]
                  md:w-[792px] md:h-[792px] md:blur-[200px]
                "
              />
              <Image
                src={m.image}
                alt={m.name}
                fill
                sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, (max-width: 1280px) 25vw, 356px"
                className="object-contain p-2 md:p-3"
              />
            </div>

            {/* Texts */}
            <div className="w-full flex flex-col items-center gap-2 md:gap-3">
              {/* Title */}
              <div
                className="
                  text-center text-[#0749AD]
                  text-[14px] leading-[20px] font-normal
                  md:text-[16px] md:leading-6
                "
              >
                {m.title}
              </div>

              {/* Name */}
              <div
                className="
                  text-center text-[#112639]
                  text-[18px] leading-[22px] font-semibold
                  md:text-[24px] md:leading-8
                "
              >
                {m.name}
              </div>

              {/* Desc */}
              <p
                className="
                  text-center text-[#7B849F]
                  text-[14px] leading-[20px]
                  md:text-[16px] md:leading-6
                "
              >
                {m.description}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
