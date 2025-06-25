import React from "react";

const navItems = [
  { label: "Dashboard", icon: "🏠", active: true },
  { label: "File Transfers", icon: "📁" },
  { label: "Task Scheduler", icon: "🗓️" },
  { label: "Alerts", icon: "🔔" },
  { label: "Logs & Reports", icon: "📄" },
  { label: "Analytics", icon: "📊" },
  { label: "Settings", icon: "⚙️" },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-slate-900 text-white flex flex-col px-6 py-8 gap-4 shadow-2xl border-r border-slate-800">
      <div className="mb-8 flex flex-col items-start gap-1">
        <div className="text-3xl font-extrabold tracking-tight text-white">
          CloudPoter{" "}
          <span className="text-blue-400">Pro</span>
        </div>
        <div className="text-xs text-slate-400 mt-1">File Transfer Hub</div>
      </div>
      <div className="border-b border-slate-700 mb-4"></div>
      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-left transition font-medium text-base group ${
              item.active
                ? "bg-blue-600 text-white shadow-lg"
                : "hover:bg-slate-800 text-slate-200"
            }`}
          >
            <span
              className={`text-xl ${
                item.active
                  ? ""
                  : "text-blue-400 group-hover:text-blue-300"
              }`}
            >
              {item.icon}
            </span>
            <span>{item.label}</span>
            {item.active && (
              <span className="ml-auto w-2 h-2 bg-blue-300 rounded-full"></span>
            )}
          </button>
        ))}
      </nav>
      <div className="mt-auto text-xs text-slate-500 pt-6 border-t border-slate-800">
        © 2025 CloudPoter
      </div>
    </aside>
  );
}
