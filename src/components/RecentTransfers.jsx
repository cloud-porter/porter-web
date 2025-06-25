import React from "react";

const statusMap = {
  completed: "bg-green-100 text-green-700 border-green-200",
  failed: "bg-red-100 text-red-700 border-red-200",
  'in progress': "bg-blue-100 text-blue-700 border-blue-200",
};

const statusText = {
  completed: "已完成",
  failed: "失敗",
  'in progress': "進行中",
};

export default function RecentTransfers({ transfers }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 min-w-[300px] border border-gray-100 flex flex-col">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Recent Transfers</h3>
      <ul className="flex flex-col gap-4">
        {transfers.map((item) => (
          <li key={item.name} className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-gray-800 text-base">{item.name}</div>
              <div className="text-xs text-gray-400">{item.size} • {item.time}</div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold capitalize border ${statusMap[item.status]}`}>{statusText[item.status]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
