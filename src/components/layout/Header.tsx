"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
        marginLeft: scrolled ? screenWidth * 0.1 : 0, // 10% màn hình
        marginRight: scrolled ? screenWidth * 0.1 : 0,
        marginTop: scrolled ? "1rem" : "0rem", // cách top một chút
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 overflow-hidden transition-all duration-300
    ${
      scrolled
        ? "rounded-[1rem] sm:rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem]"
        : "rounded-none"
    } 
  `}
    >
      <motion.div
        className={`flex items-center justify-between py-4 lg:py-6 h-[72px] lg:h-[104px]
          ${
            scrolled
              ? "px-4 sm:px-6 lg:px-[100px] xl:px-[200px]"
              : "px-4 sm:px-6 lg:px-[200px]"
          } `}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Logo */}
        <Logo className="h-8 lg:h-10 w-auto" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-[56px]">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              {item.hasDropdown ? (
                <button
                  type="button"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === index ? null : index)
                  }
                  className={`flex items-center gap-2 text-[16px] leading-6 ${
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
                  className={`flex items-center gap-2 text-[16px] leading-6 ${
                    isActive(item.href)
                      ? "font-semibold text-[#112639] border-b-2 border-[#112639] pb-2"
                      : "font-normal text-[#112639] hover:text-[#1851C1]"
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown desktop with animation */}
              <AnimatePresence>
                {item.hasDropdown && activeDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[36px] left-0 w-[220px] rounded-xl border border-[#C2D9FF] bg-white shadow-md flex flex-col p-4 gap-3 z-50"
                  >
                    {item.submenu?.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        className="text-[#112639] text-[16px] leading-6 hover:text-[#1851C1]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden lg:block">
          <Button className="h-14 px-6 rounded-full text-white text-[16px] font-semibold leading-6 bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] hover:opacity-90">
            Khám phá ngay
          </Button>
        </div>

        {/* Mobile/Tablet button */}
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

      {/* Mobile + Tablet menu with animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <nav className="flex flex-col px-6 py-4">
              {navItems.map((item, index) => (
                <div key={index} className="flex flex-col">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === index ? null : index
                          )
                        }
                        className={`flex items-center justify-between py-3 text-[16px] ${
                          isActive(item.href)
                            ? "font-semibold text-[#112639]"
                            : "font-normal text-[#112639]"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 ml-2 mb-2 flex flex-col border-l border-[#C2D9FF]"
                          >
                            {item.submenu?.map((sub, i) => (
                              <Link
                                key={i}
                                href={sub.href}
                                className="py-2 text-[15px] text-[#112639] hover:text-[#1851C1]"
                                onClick={() => setMobileOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`py-3 text-[16px] ${
                        isActive(item.href)
                          ? "font-semibold text-[#112639]"
                          : "font-normal text-[#112639]"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
