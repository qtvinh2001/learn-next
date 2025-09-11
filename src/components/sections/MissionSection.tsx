// app/components/sections/mission-section.tsx
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

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
    <section
      className="
        bg-white
        /* Figma: padding 100px 200px → responsive bằng clamp */
        py-[clamp(48px,8vw,100px)]
      "
    >
      <div
        className="
          mx-auto w-full
          max-w-[1920px]
          /* Figma: px=200 → responsive với clamp */
          px-[clamp(16px,8vw,200px)]
        "
      >
        <div
          className="
            flex flex-col lg:flex-row items-center
            justify-center
            gap-[clamp(32px,8vw,162px)]
            /* Figma height 750: dùng min-h để co giãn */
            min-h-[clamp(560px,70vh,750px)]
          "
        >
          <div className="w-full lg:max-w-[743px] flex flex-col gap-10">
            <h2
              className="
                text-[#0749AD] font-semibold leading-[130%]
                text-[32px] md:text-[40px] lg:text-[56px]
              "
            >
              Sứ mệnh của Antco <br className="hidden xl:block" />
              về công nghệ
            </h2>

            <div className="flex flex-col gap-3">
              <p className="text-[#112639] font-bold text-[20px] leading-[32px]">
                Sứ mệnh của Antco kiến tạo tương lai nền công nghệ Việt Nam, trở
                thành cường quốc thế giới trong lĩnh vực công nghệ số.
              </p>
              <p className="text-[#7B849F] font-normal text-[20px] leading-[32px]">
                Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi mang đến
                những giải pháp công nghệ thông minh, giúp chính phủ &amp; doanh
                nghiệp nâng cao hiệu suất, bảo mật dữ liệu và phát triển bền
                vững trong thời đại số.
              </p>

              {/* Badges (Frame 251/252) */}
              <div className="flex flex-wrap gap-3 pt-1">
                {features.map((f) => (
                  <Badge
                    key={f.text}
                    className="
                      flex items-center gap-2 px-3 py-1.5
                      bg-[#D8EFFF] text-[#0749AD] border-0 rounded-full
                    "
                  >
                    <Image src={f.icon} alt={f.text} width={24} height={24} />
                    <span className="text-[16px] leading-[24px]">{f.text}</span>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-start gap-4 pt-2">
              <Button
                className="
                  h-14 min-w-[127px] px-6 rounded-full text-white
                  bg-[linear-gradient(96.96deg,#2BA9FA_0.85%,#1851C1_97.4%)]
                  hover:opacity-90
                  text-[16px] font-semibold leading-[24px]
                "
              >
                Xem thêm
              </Button>

              <Button
                variant="ghost"
                className="
                  h-14 min-w-[184px]
                  px-6 rounded-full
                  font-inter font-semibold text-[16px] leading-6
                  text-[#1792ED] border border-[#1792ED] bg-white
                "
              >
                Nhận tư vấn ngay
              </Button>
            </div>
          </div>

          {/* RIGHT – Group 633103: 541x541, grid 2x2 */}
          <div className="w-full lg:max-w-[541px] mx-auto lg:mx-0">
            <div className="grid grid-cols-2 gap-6 aspect-square">
              {techItems.map((item) => (
                <div
                  key={item.label}
                  className="relative overflow-hidden aspect-square"
                >
                  {/* Union tile + overlay (giữ object-cover để giống mask Figma) */}
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />

                  {/* Donut ring border 28, ~56% kích thước ô */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[56%] aspect-square rounded-full border-[28px] border-white" />
                  </div>

                  {/* Label – Commissioner 26.9 ~ 27px, 130% */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-[Commissioner] font-medium text-[#112639] text-[clamp(18px,2vw,27px)] leading-[130%]">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </section>
  );
}
