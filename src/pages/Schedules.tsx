import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Calendar, 
  Edit, 
  Trash2, 
  Play, 
  Pause, 
  Search,
  Filter,
  MoreHorizontal
} from "lucide-react";
import AddScheduleDialog from "@/components/dashboard/AddScheduleDialog";

const Schedules = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 模擬排程數據
  const schedules = [
    {
      id: 1,
      name: "ccc-op-por-01",
      description: "ODS每日排程至 S3",
      source: "/nas/data/",
      target: "s3://ocpcprms01-prod-ods/data/",
      schedule: "0 2 * * *",
      scheduleText: "每日 02:00",
      enabled: true,
      lastRun: "2024-06-25 02:00:00",
      lastRunStatus: "success",
      nextRun: "2024-06-26 02:00:00",
      filesCount: 1247
    },
    {
      id: 2,
      name: "ccc-op-por-02",
      description: "每小時日誌檔案歸檔",
      source: "/var/log/application/",
      target: "s3://ocpcprms02-prod-log/archive/",
      schedule: "0 * * * *",
      scheduleText: "每小時",
      enabled: true,
      lastRun: "2024-06-25 14:00:00",
      lastRunStatus: "success",
      nextRun: "2024-06-25 15:00:00",
      filesCount: 89
    },
    {
      id: 3,
      name: "ccc-op-por-03",
      description: "每週檔案同步",
      source: "/sync/uploads/",
      target: "s3://ocpcprms03-prod-sync/uploads/",
      schedule: "0 0 * * 0",
      scheduleText: "每週日 00:00",
      enabled: false,
      lastRun: "2024-06-23 00:00:00",
      lastRunStatus: "failed",
      nextRun: "2024-06-30 00:00:00",
      filesCount: 0
    },
    // {
    //   id: 4,
    //   name: "Monthly-Report-Archive",
    //   description: "每月報表歸檔備份",
    //   source: "/reports/monthly/",
    //   target: "s3://reports-bucket/monthly/",
    //   schedule: "0 0 1 * *",
    //   scheduleText: "每月 1 日 00:00",
    //   enabled: true,
    //   lastRun: "2024-06-01 00:00:00",
    //   lastRunStatus: "success",
    //   nextRun: "2024-07-01 00:00:00",
    //   filesCount: 34
    // }
  ];

  const filteredSchedules = schedules.filter(schedule =>
    schedule.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    schedule.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return <Badge className="bg-emerald-700 text-white">成功</Badge>;
      case "failed":
        return <Badge className="bg-red-700 text-white">失敗</Badge>;
      case "running":
        return <Badge className="bg-blue-700 text-white">執行中</Badge>;
      default:
        return <Badge variant="secondary" className="bg-slate-600 text-white">未知</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* 頁面標題與操作 */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-emerald-900 mb-2">傳輸排程管理</h1>
          <p className="text-emerald-700">建立、編輯和管理您的資料傳輸排程任務</p>
        </div>
        {/* <AddScheduleDialog /> */}
        <AddScheduleDialog>
          <span className="inline-block px-4 py-2 border border-emerald-300 rounded text-emerald-700 font-semibold bg-white hover:bg-emerald-50 cursor-pointer transition">
            + 新增排程
          </span>
        </AddScheduleDialog>
      </div>

      {/* 搜尋與篩選 */}
      <Card className="bg-white/90 backdrop-blur-sm border-emerald-200 shadow-sm">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-emerald-500" />
              <Input
                placeholder="搜尋排程名稱或描述..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-emerald-200 text-emerald-900 placeholder:text-emerald-400 focus:border-emerald-500"
              />
            </div>
            <Button variant="outline" className="text-emerald-700 border-emerald-200 hover:bg-emerald-50">
              <Filter className="h-4 w-4 mr-2" />
              篩選
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 排程列表 */}
      <div className="space-y-4">
        {filteredSchedules.map((schedule) => (
          <Card key={schedule.id} className="bg-white/90 backdrop-blur-sm border-emerald-200 hover:bg-white/95 hover:shadow-md transition-all duration-200 shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${schedule.enabled ? "bg-emerald-600" : "bg-slate-400"}`} />
                  <div>
                    <CardTitle className="text-lg text-emerald-900">{schedule.name}</CardTitle>
                    <CardDescription className="text-emerald-600">
                      {schedule.description}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={schedule.enabled ? "default" : "secondary"} className={schedule.enabled ? "bg-emerald-600 text-white" : "bg-slate-400 text-white"}>
                    {schedule.enabled ? "啟用" : "停用"}
                  </Badge>
                  <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* 路徑資訊 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-emerald-600">來源路徑</p>
                  <p className="text-sm text-emerald-900 font-mono bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                    {schedule.source}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-emerald-600">目標路徑</p>
                  <p className="text-sm text-emerald-900 font-mono bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                    {schedule.target}
                  </p>
                </div>
              </div>

              {/* 排程與狀態資訊 */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-emerald-600">排程週期</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-emerald-600" />
                    <p className="text-sm text-emerald-900">{schedule.scheduleText}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-emerald-600">上次執行</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {getStatusBadge(schedule.lastRunStatus)}
                    <p className="text-xs text-emerald-600">{schedule.lastRun}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-emerald-600">下次執行</p>
                  <p className="text-sm text-emerald-900">{schedule.nextRun}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-emerald-600">檔案數量</p>
                  <p className="text-sm text-emerald-900">{schedule.filesCount.toLocaleString()} 個</p>
                </div>
              </div>

              {/* 操作按鈕 */}
              <div className="flex items-center justify-between pt-2 border-t border-emerald-100">
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="text-emerald-700 border-emerald-200 hover:bg-emerald-50"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    編輯
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className={schedule.enabled ? "text-amber-700 border-amber-200 hover:bg-amber-50" : "text-emerald-700 border-emerald-200 hover:bg-emerald-50"}
                  >
                    {schedule.enabled ? (
                      <>
                        <Pause className="h-4 w-4 mr-2" />
                        暫停
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        啟用
                      </>
                    )}
                  </Button>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="text-red-700 border-red-200 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  刪除
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 空狀態 */}
      {filteredSchedules.length === 0 && (
        <Card className="bg-white/90 backdrop-blur-sm border-emerald-200 shadow-sm">
          <CardContent className="py-12 text-center">
            <Calendar className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-emerald-900 mb-2">找不到符合的排程</h3>
            <p className="text-emerald-600 mb-6">請調整搜尋條件或建立新的排程任務</p>
            {/* <AddScheduleDialog /> */}
            <AddScheduleDialog>
              <span className="inline-block px-4 py-2 border border-emerald-300 rounded text-emerald-700 font-semibold bg-white hover:bg-emerald-50 cursor-pointer transition">
                + 新增排程
              </span>
            </AddScheduleDialog>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Schedules;
