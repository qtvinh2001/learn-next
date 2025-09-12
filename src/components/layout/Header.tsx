"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giải pháp AI", href: "/#ai" },
  { label: "Chuyển đổi số", href: "/#digital-transformation" },
  {
    label: "Dịch vụ",
    href: "/#services",
    hasDropdown: true,
    submenu: [
      { label: "Trí tuệ nhân tạo AI", href: "/ai-solutions" },
      { label: "Giải pháp số hóa", href: "/digital-solutions" },
    ],
  },
  { label: "Liên hệ", href: "/consultant" },
];

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor:
          scrolled || mobileOpen
            ? "rgba(255,255,255,0.6)"
            : "rgba(255,255,255,0)",
        backdropFilter: scrolled || mobileOpen ? "blur(12px)" : "blur(0px)",
        boxShadow:
          scrolled || mobileOpen
            ? "0 4px 16px rgba(0,0,0,0.1)"
            : "0 0 0 rgba(0,0,0,0)",
        marginLeft: scrolled ? screenWidth * 0.05 : 0, // 5% thay vì 10%
        marginRight: scrolled ? screenWidth * 0.05 : 0,
        marginTop: scrolled ? "0.75rem" : "0rem",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${
      scrolled
        ? "rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2.5rem]"
        : "rounded-none"
    }`}
    >
      <motion.div
        className={`flex items-center justify-between h-[72px] lg:h-[96px]
      px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32
      ${scrolled ? "py-3 lg:py-4" : "py-4 lg:py-6"}
    `}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Logo */}
        <Logo className="h-8 lg:h-10 w-auto" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 md:gap-8 lg:gap-10 xl:gap-14">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              {item.hasDropdown ? (
                <button
                  type="button"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === index ? null : index)
                  }
                  className={`flex items-center gap-2 text-[16px] leading-6 whitespace-nowrap
            ${
              isActive(item.href)
                ? "font-semibold text-[#112639] border-b-2 border-[#112639] pb-2"
                : "font-normal text-[#112639] hover:text-[#1851C1]"
            }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      activeDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 text-[16px] leading-6 whitespace-nowrap
            ${
              isActive(item.href)
                ? "font-semibold text-[#112639] border-b-2 border-[#112639] pb-2"
                : "font-normal text-[#112639] hover:text-[#1851C1]"
            }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden lg:block">
          <Button className="h-12 xl:h-14 px-5 xl:px-6 rounded-full text-white text-sm xl:text-base font-semibold bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] hover:opacity-90">
            Khám phá ngay
          </Button>
        </div>

        {/* Mobile button giữ nguyên */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </motion.div>
    </motion.header>
  );
}
