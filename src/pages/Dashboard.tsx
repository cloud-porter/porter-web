
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CloudUpload, 
  CheckCircle, 
  XCircle, 
  Clock, 
  TrendingUp,
  Calendar,
  History,
  Plus,
  RefreshCw
} from "lucide-react";

const Dashboard = () => {
  // 模擬數據
  const stats = [
    {
      title: "今日成功傳輸",
      value: "1,247",
      change: "+12%",
      icon: CheckCircle,
      color: "text-emerald-600"
    },
    {
      title: "傳輸失敗",
      value: "23",
      change: "-5%",
      icon: XCircle,
      color: "text-red-500"
    },
    {
      title: "進行中任務",
      value: "8",
      change: "即時",
      icon: Clock,
      color: "text-blue-500"
    },
    {
      title: "排程任務",
      value: "45",
      change: "活躍中",
      icon: Calendar,
      color: "text-purple-500"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "success",
      message: "排程任務 'Daily-Backup-001' 執行成功",
      time: "2 分鐘前",
      files: 156
    },
    {
      id: 2,
      type: "warning",
      message: "排程任務 'Log-Sync-002' 部分檔案傳輸失敗",
      time: "15 分鐘前",
      files: 12
    },
    {
      id: 3,
      type: "info",
      message: "新增排程任務 'Media-Archive-003'",
      time: "1 小時前",
      files: 0
    },
    {
      id: 4,
      type: "success",
      message: "手動補傳任務完成",
      time: "2 小時前",
      files: 89
    }
  ];

  const upcomingSchedules = [
    { id: 1, name: "Database-Backup", nextRun: "今天 18:00", enabled: true },
    { id: 2, name: "Log-Archive", nextRun: "今天 20:00", enabled: true },
    { id: 3, name: "Weekly-Report", nextRun: "明天 09:00", enabled: false },
    { id: 4, name: "Media-Sync", nextRun: "明天 12:00", enabled: true }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* 頁面標題 */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-emerald-900 mb-2">儀表板總覽</h1>
          <p className="text-emerald-700">監控您的雲端傳輸狀態與排程任務</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="text-emerald-700 border-emerald-200 hover:bg-emerald-50">
            <RefreshCw className="h-4 w-4 mr-2" />
            重新整理
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            新增任務
          </Button>
        </div>
      </div>

      {/* 統計卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-emerald-100 hover:bg-white/90 transition-all duration-200 shadow-sm hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-700">{stat.title}</p>
                    <p className="text-2xl font-bold text-emerald-900 mt-2">{stat.value}</p>
                    <p className="text-xs text-emerald-600 mt-1">{stat.change}</p>
                  </div>
                  <div className={`h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center ${stat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 最近活動 */}
        <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-sm">
          <CardHeader>
            <CardTitle className="text-emerald-900 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              最近活動
            </CardTitle>
            <CardDescription className="text-emerald-700">
              最新的傳輸任務與系統活動
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50/50 hover:bg-emerald-50 transition-colors">
                  <div className={`mt-1 h-2 w-2 rounded-full ${
                    activity.type === "success" ? "bg-emerald-500" :
                    activity.type === "warning" ? "bg-yellow-500" :
                    "bg-blue-500"
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-emerald-900">{activity.message}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <p className="text-xs text-emerald-600">{activity.time}</p>
                      {activity.files > 0 && (
                        <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700">
                          {activity.files} 個檔案
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
              <History className="h-4 w-4 mr-2" />
              查看完整紀錄
            </Button>
          </CardContent>
        </Card>

        {/* 即將執行的排程 */}
        <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-sm">
          <CardHeader>
            <CardTitle className="text-emerald-900 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              即將執行的排程
            </CardTitle>
            <CardDescription className="text-emerald-700">
              接下來 24 小時內的排程任務
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingSchedules.map((schedule) => (
                <div key={schedule.id} className="flex items-center justify-between p-3 rounded-lg bg-emerald-50/50 hover:bg-emerald-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`h-3 w-3 rounded-full ${schedule.enabled ? "bg-emerald-500" : "bg-gray-400"}`} />
                    <div>
                      <p className="text-sm font-medium text-emerald-900">{schedule.name}</p>
                      <p className="text-xs text-emerald-600">{schedule.nextRun}</p>
                    </div>
                  </div>
                  <Badge variant={schedule.enabled ? "default" : "secondary"} className={`text-xs ${
                    schedule.enabled ? "bg-emerald-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}>
                    {schedule.enabled ? "啟用" : "停用"}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
              <Calendar className="h-4 w-4 mr-2" />
              管理所有排程
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* 快速操作區 */}
      <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-sm">
        <CardHeader>
          <CardTitle className="text-emerald-900">快速操作</CardTitle>
          <CardDescription className="text-emerald-700">
            常用的系統操作與快捷功能
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 bg-emerald-100 hover:bg-emerald-200 border border-emerald-200 flex flex-col gap-2 text-emerald-800 hover:text-emerald-900">
              <CloudUpload className="h-6 w-6" />
              <span>手動補傳</span>
            </Button>
            <Button className="h-20 bg-green-100 hover:bg-green-200 border border-green-200 flex flex-col gap-2 text-green-800 hover:text-green-900">
              <Plus className="h-6 w-6" />
              <span>新增排程</span>
            </Button>
            <Button className="h-20 bg-teal-100 hover:bg-teal-200 border border-teal-200 flex flex-col gap-2 text-teal-800 hover:text-teal-900">
              <History className="h-6 w-6" />
              <span>查詢紀錄</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
