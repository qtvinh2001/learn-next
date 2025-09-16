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
      { label: "Trí tuệ nhân tạo AI", href: "/#ai-solutions" },
      { label: "Giải pháp số hóa", href: "/#digital-solutions" },
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
            ? "rgba(255,255,255,1)"
            : "rgba(255,255,255,0)",
        backdropFilter: scrolled || mobileOpen ? "blur(12px)" : "blur(0px)",
        boxShadow:
          scrolled || mobileOpen
            ? "0 4px 16px rgba(0,0,0,0.1)"
            : "0 0 0 rgba(0,0,0,0)",
        marginLeft: scrolled ? screenWidth * 0.02 : 0,
        marginRight: scrolled ? screenWidth * 0.02 : 0,
        marginTop: scrolled ? "0.75rem" : "0rem",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${
      mobileOpen
        ? "rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl lg:rounded-[2.5rem]"
        : "rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2.5rem]"
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
        <nav className="hidden lg:flex items-center gap-6 md:gap-8 lg:gap-10 xl:gap-14 relative">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              {item.hasDropdown ? (
                <>
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

                  {/* Submenu */}
                  {activeDropdown === index && (
                    <ul
                      className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-50 border-[1px] border-[#C2D9FF]"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.submenu?.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2 text-[#112639] hover:bg-[#F5F8FF] hover:text-[#1851C1]"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
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

        {/* Mobile button */}
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

      {/* Mobile Navigation */}
      {mobileOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg rounded-b-xl"
        >
          <ul className="flex flex-col p-4 gap-3">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.hasDropdown ? (
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer py-2 px-2 text-[#112639]">
                      {item.label}
                      <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="pl-4 mt-1 flex flex-col gap-2">
                      {item.submenu?.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="block py-1 text-[#112639] hover:text-[#1851C1]"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-2 px-2 rounded-md ${
                      isActive(item.href)
                        ? "font-semibold text-[#112639]"
                        : "font-normal text-[#112639]"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}
