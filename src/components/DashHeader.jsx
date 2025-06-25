import React from "react";

export default function DashHeader() {
  return (
    <header className="flex flex-col gap-1 mb-8">
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-1">
        儀表板
      </h1>
      <div className="text-gray-500 text-lg font-medium">
        檔案傳輸活動總覽
      </div>
    </header>
  );
}
