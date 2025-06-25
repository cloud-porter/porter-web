
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Cloud, 
  LayoutDashboard, 
  Calendar, 
  History, 
  Menu, 
  X,
  User,
  Settings,
  LogOut 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    {
      name: "儀表板",
      href: "/dashboard",
      icon: LayoutDashboard,
      current: location.pathname === "/dashboard"
    },
    {
      name: "傳輸排程",
      href: "/schedules",
      icon: Calendar,
      current: location.pathname === "/schedules"
    },
    {
      name: "傳輸紀錄",
      href: "/history",
      icon: History,
      current: location.pathname === "/history"
    }
  ];

  return (
    <div className="min-h-screen flex">
      {/* 側邊欄 */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-emerald-900/95 backdrop-blur-lg border-r border-emerald-700/30 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-emerald-700/30">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Cloud className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Cloud Porter</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="lg:hidden text-white hover:bg-emerald-800/50"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* 導航 */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.current
                      ? "bg-emerald-600 text-white shadow-lg"
                      : "text-emerald-200 hover:text-white hover:bg-emerald-800/50"
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                  {item.current && (
                    <Badge variant="secondary" className="ml-auto bg-emerald-500 text-white">
                      •
                    </Badge>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 使用者資訊 */}
          <div className="px-4 py-4 border-t border-emerald-700/30">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-emerald-800/30">
              <div className="h-8 w-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">管理員</p>
                <p className="text-xs text-emerald-300 truncate">admin@company.com</p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex-1 text-emerald-200 hover:text-white hover:bg-emerald-800/50"
              >
                <Settings className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex-1 text-emerald-200 hover:text-white hover:bg-emerald-800/50"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 主要內容區域 */}
      <div className="flex-1 lg:pl-0">
        {/* 頂部導航 */}
        <div className="sticky top-0 z-40 bg-emerald-900/95 backdrop-blur-lg border-b border-emerald-700/30">
          <div className="flex items-center justify-between h-16 px-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className="lg:hidden text-white hover:bg-emerald-800/50"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-emerald-400 border-emerald-400">
                系統運行中
              </Badge>
            </div>
          </div>
        </div>

        {/* 頁面內容 */}
        <main className="flex-1 bg-gradient-to-br from-emerald-50/50 via-green-50/30 to-teal-50/50 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>

      {/* 行動版遮罩 */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;
