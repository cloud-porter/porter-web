import React from "react";

export default function TransferActivity() {
  // 這裡可串接圖表元件，如 Recharts/ApexCharts，暫以靜態 SVG 佔位
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex-1 min-w-[300px] border border-gray-100 flex flex-col">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Transfer Activity</h3>
      <div className="flex flex-col items-center justify-center h-44">
        {/* 靜態圖表佔位 */}
        <svg width="200" height="90">
          <polyline
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            points="10,70 40,60 70,50 100,40 130,30 180,20"
          />
          <polyline
            fill="none"
            stroke="#22c55e"
            strokeWidth="3"
            points="10,75 40,70 70,65 100,60 130,55 180,50"
          />
          <circle cx="180" cy="20" r="5" fill="#3b82f6" />
          <circle cx="180" cy="50" r="5" fill="#22c55e" />
        </svg>
        <div className="flex gap-6 mt-6 text-base">
          <span className="flex items-center gap-2"><span className="inline-block w-4 h-4 bg-blue-500 rounded-full"></span>Uploads</span>
          <span className="flex items-center gap-2"><span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>Downloads</span>
        </div>
      </div>
    </div>
  );
}
