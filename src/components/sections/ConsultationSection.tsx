"use client";

import { useState, useRef } from "react";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Button } from "@/components/ui/button";
import { Header } from "../layout/Header";
import { motion } from "framer-motion";

export function ConsultationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
  });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    const newErrors: { [k: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ và tên";
    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Số điện thoại phải có 10 chữ số";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email không hợp lệ";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // submit logic
    } else {
      if (errs.name) nameRef.current?.focus();
      else if (errs.phone) phoneRef.current?.focus();
      else if (errs.email) emailRef.current?.focus();
    }
  };

  return (
    <motion.section
      className="relative w-full h-[100vh] bg-[#F7F8F9] 
                 bg-[url('/images/company_intro_background.png')] 
                 bg-cover bg-center py-12 md:py-20 lg:py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <Header />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-20">
          {/* Text bên trái */}
          <div className="space-y-6 lg:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Heading
                level={1}
                className="text-[#112639] font-bold 
                           text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-[1.36]"
              >
                Nhận tư vấn miễn phí từ chúng tôi
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Paragraph
                className="text-[#7B849F] 
                           text-base sm:text-lg lg:text-[16px] leading-6 lg:leading-7
                           max-w-[480px]"
              >
                Antco đồng hành cùng chính phủ và doanh nghiệp trên hành trình
                chuyển đổi số, mang đến các giải pháp công nghệ tùy chỉnh và
                tiên tiến.
              </Paragraph>
            </motion.div>
          </div>

          {/* Form bên phải */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg 
                       w-full max-w-[615px] p-6 sm:p-8 lg:p-10 
                       flex flex-col gap-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-[#112639] text-xl sm:text-2xl font-semibold">
              Liên hệ với chúng tôi
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {[
                {
                  ref: nameRef,
                  type: "text",
                  name: "name",
                  placeholder: "Họ và tên",
                  value: formData.name,
                  error: errors.name,
                },
                {
                  ref: phoneRef,
                  type: "tel",
                  name: "phone",
                  placeholder: "Số điện thoại",
                  value: formData.phone,
                  error: errors.phone,
                },
                {
                  ref: emailRef,
                  type: "email",
                  name: "email",
                  placeholder: "Địa chỉ email",
                  value: formData.email,
                  error: errors.email,
                },
              ].map((field, i) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2 + i * 0.15,
                  }}
                  viewport={{ once: true }}
                >
                  <input
                    ref={field.ref as React.RefObject<HTMLInputElement>}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.name]: e.target.value })
                    }
                    className={`w-full rounded-xl px-4 py-3 bg-[#F4F9FF] border ${
                      field.error ? "border-red-400" : "border-[#DEEAFB]"
                    } focus:outline-none focus:ring-2 focus:ring-sky-400`}
                  />
                  {field.error && (
                    <p className="text-red-500 text-sm mt-1">{field.error}</p>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                viewport={{ once: true }}
              >
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={(e) =>
                    setFormData({ ...formData, topic: e.target.value })
                  }
                  className="w-full rounded-xl px-4 py-3 bg-[#F4F9FF] border border-[#DEEAFB] text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  <option value="">Nội dung cần tư vấn</option>
                  <option>Chuyển đổi số</option>
                  <option>Phát triển phần mềm</option>
                  <option>Tư vấn chiến lược</option>
                </select>
              </motion.div>

              <motion.p
                className="text-xs sm:text-sm text-[#7B849F]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                *Sau khi nhận được yêu cầu, chúng tôi sẽ liên hệ với bạn qua
                thông tin được cung cấp.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Button
                  type="submit"
                  className="w-full h-14 rounded-full text-white font-semibold 
                             bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] 
                             hover:opacity-90 transition"
                >
                  Gửi yêu cầu
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
