"use client";

import { useState, useRef } from "react";
import {
  CloudLightningIcon,
  FileIcon,
  MoreHorizontalIcon,
  PlusIcon,
  RefreshCwIcon,
  SearchIcon,
  SendIcon,
  SettingsIcon,
  ShareIcon,
  Grid3X3Icon,
  StarIcon,
  XIcon,
  EditIcon,
  PanelRight,
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Logo } from "../shared/Logo";

export function FeaturesSection() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: inputValue }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Xin chào, tôi là Antco AI" },
      ]);
    }, 800);

    setInputValue("");
  };

  const handleClear = () => setMessages([]);

  const dataFiles = [
    { type: "file", name: "Nghị quyết 123 NQ/-CP" },
    { type: "recording", name: "Ghi âm cuộc họp lãnh đạo" },
    { type: "file", name: "Báo cáo tài chính Q3 2024" },
    { type: "file", name: "Phân tích thị trường AI" },
    { type: "recording", name: "Cuộc họp với khách hàng" },
  ];

  const tools = [
    { icon: "/images/report.svg", title: "Tạo báo cáo" },
    { icon: "/images/summarize.svg", title: "Tóm tắt" },
    { icon: "/images/cloud.svg", title: "Số hóa tài liệu" },
    { icon: "/images/record.svg", title: "Bóc băng ghi âm" },
    { icon: "/images/search.svg", title: "Phân tích tham mưu" },
    { icon: "/images/assistant.svg", title: "Tra cứu pháp luật" },
  ];

  const topNav = [SettingsIcon, ShareIcon, Grid3X3Icon];

  return (
    <section className="flex flex-col items-center w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-[100px] gap-12 md:gap-16">
      {/* Header */}
      <header className="flex flex-col items-center gap-5 text-center w-full">
        <h2 className="text-[28px] md:text-[40px] lg:text-[56px] font-semibold leading-[130%] text-[#0749AD]">
          Khám Phá Sức Mạnh Chatbot AI Cùng Antco
        </h2>
        <p className="max-w-[1106px] text-[14px] md:text-base lg:text-[20px] leading-[160%] text-[#7B849F]">
          Trợ lý ảo Antco kết hợp công nghệ NLP tiên tiến, giúp người dùng tương
          tác liền mạch với Trợ lý ảo Antco. Tham gia demo để chứng kiến sức
          mạnh của trí tuệ nhân tạo trong việc tối ưu hóa năng suất làm việc!
        </p>
      </header>

      {/* Content container */}
      <div className="w-full max-w-[1520px] bg-[#EEF2F8] border-4 lg:border-[16px] border-[#dfe5ee30] rounded-[10px] lg:rounded-[40px] overflow-hidden">
        {/* Top nav */}
        <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-4 border-b border-[#dee4ed30]">
          <Logo />
          <div className="flex items-center gap-2 md:gap-3">
            <Button className="bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] text-white rounded-full px-3 py-1.5 md:px-4 md:py-2 flex items-center gap-1.5 text-xs md:text-sm">
              <CloudLightningIcon className="w-4 h-4 md:w-5 md:h-5" />
              Nâng cấp
            </Button>
            {topNav.map((Icon, i) => (
              <Button
                key={i}
                size="sm"
                variant="ghost"
                className="rounded-full bg-black/5 backdrop-blur-md w-9 h-9 md:w-10 md:h-10 flex items-center justify-center"
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-1" />
              </Button>
            ))}
            <Avatar className="bg-primary-2 w-9 h-9 md:w-10 md:h-10">
              <AvatarFallback className="text-white font-semibold text-sm md:text-base">
                T
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[304px_1fr_304px] gap-4 lg:gap-6 p-4 md:p-6">
          {/* Left Sidebar */}
          <Card className="h-[300px] lg:h-[739px]">
            <Card.Content className="flex flex-col h-full p-3 lg:p-4 gap-3 lg:gap-4">
              <div className="flex justify-between items-center border-b pb-2 text-sm font-semibold text-neutral-1">
                Dữ liệu
                <PanelRight className="w-4 h-4" />
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 border-primary text-primary text-xs lg:text-sm"
                >
                  <PlusIcon className="w-4 h-4 mr-1" /> Thêm
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-primary text-primary text-xs lg:text-sm"
                >
                  <StarIcon className="w-4 h-4 mr-1" /> Khám phá
                </Button>
              </div>

              <div className="flex items-center gap-2 border px-2 py-1.5 rounded-md text-sm">
                <SearchIcon className="w-4 h-4 text-neutral-3" />
                <span className="text-neutral-3">Tìm kiếm</span>
              </div>

              <div className="flex flex-col gap-2 overflow-y-auto text-xs">
                {dataFiles.map((file, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border px-2 py-1.5 rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      {file.type === "file" ? (
                        <FileIcon className="w-4 h-4 text-neutral-1" />
                      ) : (
                        <Image
                          src="/images/recording.svg"
                          alt="Recording"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                      )}
                      <span className="text-neutral-1">{file.name}</span>
                    </div>
                    <XIcon className="w-4 h-4 text-neutral-3" />
                  </div>
                ))}
              </div>
            </Card.Content>
          </Card>

          {/* Chat Section */}
          <Card className="h-[400px] lg:h-[739px]">
            <Card.Content className="flex flex-col h-full">
              <div className="flex justify-between items-center border-b px-3 py-2 text-sm">
                <h3 className="font-semibold text-neutral-1">Chat</h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={handleClear}
                >
                  <RefreshCwIcon className="w-4 h-4 mr-1" /> Làm mới
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
                {messages.length === 0 ? (
                  <div className="flex flex-col flex-1 justify-center items-center gap-6 text-center">
                    {/* Welcome */}
                    <div className="flex flex-col items-center gap-4">
                      <Image
                        src="/images/logo_icon.svg"
                        alt="welcome"
                        width={64}
                        height={64}
                        className="w-16 h-16"
                      />
                      <span className="text-base md:text-lg font-semibold bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] bg-clip-text text-transparent">
                        Chào mừng đến với Antco AI!
                      </span>
                    </div>

                    {/* Input ngay dưới welcome */}
                    <div className="flex items-center gap-2 border rounded-lg px-3 py-2 w-full max-w-[600px] text-sm bg-white">
                      <Input
                        placeholder="Start typing..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        className="border-none focus:ring-0 text-sm flex-1"
                      />
                      <Button
                        size="sm"
                        onClick={handleSend}
                        disabled={!inputValue.trim()}
                        className={`rounded-full transition-colors ${
                          inputValue.trim()
                            ? "bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] text-white"
                            : "bg-black/5 text-neutral-3"
                        }`}
                      >
                        <SendIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    {messages.map((msg, i) => (
                      <div
                        key={i}
                        className={`max-w-[75%] text-[14px] leading-[20px] ${
                          msg.role === "user"
                            ? "ml-auto bg-[#EEF2F8] text-[#000] rounded-[12px_0px_12px_12px] px-4 py-3"
                            : "mr-auto bg-white text-[#000] border border-[#CFDBEB] rounded-[0px_12px_12px_12px] px-4 py-3"
                        }`}
                      >
                        {msg.text}
                      </div>
                    ))}
                    <div ref={chatEndRef} />
                  </>
                )}
              </div>

              {/* Input khi đã có chat */}
              {messages.length > 0 && (
                <div className="flex items-center gap-2 border rounded-lg px-3 py-2 mt-auto mx-3 mb-3 text-sm bg-white">
                  <Input
                    placeholder="Start typing..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    className="border-none focus:ring-0 text-sm flex-1"
                  />
                  <Button
                    size="sm"
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className={`rounded-full transition-colors ${
                      inputValue.trim()
                        ? "bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] text-white"
                        : "bg-black/5 text-neutral-3"
                    }`}
                  >
                    <SendIcon className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </Card.Content>
          </Card>

          {/* Right Sidebar */}
          <Card className="h-auto lg:h-[739px]">
            <Card.Content className="flex flex-col h-full p-0">
              {/* Header bar */}
              <div className="flex items-center justify-between w-full px-5 py-4 bg-white border-b border-[#CFDBEB]">
                <h3 className="font-semibold text-[14px] leading-[17px] text-[#112639]">
                  Công cụ
                </h3>
                <MoreHorizontalIcon className="w-5 h-5 text-[#112639]" />
              </div>

              {/* Tool list */}
              <div className="flex flex-col items-center w-full px-4 py-5 gap-6 bg-white">
                <div className="grid grid-cols-2 gap-3 w-full max-w-[272px]">
                  {tools.map((t, i) => (
                    <div
                      key={i}
                      className="relative flex flex-col items-start p-3 gap-2 w-full bg-white rounded-lg shadow-sm border border-[#F0F3F8]"
                    >
                      {/* Icon container */}
                      <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-sm">
                        <Image
                          src={t.icon}
                          alt={t.title}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                      </div>
                      {/* Title */}
                      <span className="text-[14px] font-semibold text-[#112639]">
                        {t.title}
                      </span>

                      {/* background blur accent */}
                      <div className="absolute -top-10 -left-10 w-[120px] h-[120px] bg-[#2B90FA12] blur-[40px] -z-10" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress section */}
              <div className="px-5 py-4 space-y-3 bg-white">
                <h4 className="font-semibold text-[14px] text-[#112639]">
                  Tiến trình (1)
                </h4>
                <div className="p-3 rounded-lg border border-[#1792ED0A] bg-white shadow-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <RefreshCwIcon className="w-4 h-4 text-[#1792ED]" />
                    <span className="font-semibold text-xs text-[#112639]">
                      Ghi âm cuộc họp lãnh đạo
                    </span>
                  </div>
                  <p className="text-xs text-[#112639]">Đang tạo báo cáo...</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full bg-[#ECF2F8] overflow-hidden">
                      <div className="h-1.5 w-[20%] bg-gradient-to-r from-[#2BA9FA] to-[#1851C1] rounded-full" />
                    </div>
                    <span className="text-xs text-[#112639]">20%</span>
                  </div>
                </div>
              </div>

              {/* Notes section */}
              <div className="px-5 py-4 space-y-2 bg-white">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-[14px] text-[#112639]">
                    Ghi chú
                  </h4>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="rounded-full p-1 w-8 h-8 bg-black/5"
                  >
                    <EditIcon className="w-4 h-4 text-[#112639]" />
                  </Button>
                </div>
                <span className="text-xs text-[#112639]">
                  Chưa có ghi chú nào
                </span>
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </section>
  );
}
