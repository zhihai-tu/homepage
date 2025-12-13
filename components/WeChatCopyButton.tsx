"use client";

import { useState } from "react";

export default function WeChatCopyButton() {
  const [copied, setCopied] = useState(false);
  const wechatId = "tuzhihai";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(wechatId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
      aria-label={copied ? "微信号已复制" : "点击复制微信号"}
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {copied ? (
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        ) : (
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
        )}
      </svg>
      {copied ? "已复制!" : `WeChat: ${wechatId}`}
    </button>
  );
}
