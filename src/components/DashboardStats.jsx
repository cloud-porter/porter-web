import React from "react";

export default function DashboardStats({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
      {stats.map((item) => (
        <div key={item.label} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-2 min-w-[180px] border border-gray-100 hover:shadow-2xl transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500 font-semibold tracking-wide">{item.label}</span>
            {item.icon && <span className="text-2xl text-blue-500">{item.icon}</span>}
          </div>
          <div className="text-4xl font-extrabold text-gray-900">{item.value}</div>
          {item.trend && (
            <div className={`text-xs font-semibold ${item.trend > 0 ? "text-green-600" : "text-red-600"}`}>
              {item.trend > 0 ? `+${item.trend}% from last month` : `${item.trend}% from last month`}
            </div>
          )}
          {item.sub && <div className="text-xs text-orange-500 font-bold mt-1">{item.sub}</div>}
        </div>
      ))}
    </div>
  );
}
