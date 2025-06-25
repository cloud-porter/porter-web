
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  History, 
  Search, 
  Filter, 
  Download, 
  RefreshCw,
  Calendar as CalendarIcon,
  FileText,
  ChevronDown,
  ChevronRight
} from "lucide-react";

const TransferHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRecord, setExpandedRecord] = useState<number | null>(null);

  // 模擬傳輸紀錄數據
  const transferRecords = [
    {
      id: 1,
      taskName: "Daily-Database-Backup",
      startTime: "2024-06-25 02:00:00",
      endTime: "2024-06-25 02:15:32",
      duration: "15分32秒",
      status: "success",
      sourceFiles: 1247,
      transferredFiles: 1247,
      failedFiles: 0,
      totalSize: "2.3 GB",
      sourcePath: "/data/database/",
      targetPath: "s3://backup-bucket/database/2024-06-25/",
      errorMessage: null,
      details: [
        { file: "users.sql", size: "145 MB", status: "success" },
        { file: "products.sql", size: "892 MB", status: "success" },
        { file: "orders.sql", size: "1.2 GB", status: "success" }
      ]
    },
    {
      id: 2,
      taskName: "Hourly-Log-Archive",
      startTime: "2024-06-25 14:00:00",
      endTime: "2024-06-25 14:03:45",
      duration: "3分45秒",
      status: "success",
      sourceFiles: 89,
      transferredFiles: 89,
      failedFiles: 0,
      totalSize: "156 MB",
      sourcePath: "/var/log/application/",
      targetPath: "s3://logs-bucket/archive/2024-06-25-14/",
      errorMessage: null,
      details: [
        { file: "app.log", size: "89 MB", status: "success" },
        { file: "error.log", size: "34 MB", status: "success" },
        { file: "access.log", size: "33 MB", status: "success" }
      ]
    },
    {
      id: 3,
      taskName: "Weekly-Media-Sync",
      startTime: "2024-06-23 00:00:00",
      endTime: "2024-06-23 00:45:12",
      duration: "45分12秒",
      status: "failed",
      sourceFiles: 1456,
      transferredFiles: 1234,
      failedFiles: 222,
      totalSize: "8.7 GB",
      sourcePath: "/media/uploads/",
      targetPath: "s3://media-bucket/uploads/2024-06-23/",
      errorMessage: "部分檔案因權限問題無法讀取",
      details: [
        { file: "image001.jpg", size: "2.3 MB", status: "success" },
        { file: "video002.mp4", size: "156 MB", status: "failed" },
        { file: "document003.pdf", size: "1.2 MB", status: "success" }
      ]
    },
    {
      id: 4,
      taskName: "Manual-Backup-User-Data",
      startTime: "2024-06-24 16:30:00",
      endTime: "2024-06-24 16:32:18",
      duration: "2分18秒",
      status: "success",
      sourceFiles: 45,
      transferredFiles: 45,
      failedFiles: 0,
      totalSize: "67 MB",
      sourcePath: "/home/user/documents/",
      targetPath: "s3://personal-bucket/backup/2024-06-24/",
      errorMessage: null,
      details: [
        { file: "report.docx", size: "12 MB", status: "success" },
        { file: "presentation.pptx", size: "34 MB", status: "success" },
        { file: "data.xlsx", size: "21 MB", status: "success" }
      ]
    }
  ];

  const filteredRecords = transferRecords.filter(record =>
    record.taskName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.sourcePath.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.targetPath.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return <Badge className="bg-emerald-700 text-white">成功</Badge>;
      case "failed":
        return <Badge className="bg-red-700 text-white">失敗</Badge>;
      case "running":
        return <Badge className="bg-blue-700 text-white">執行中</Badge>;
      case "partial":
        return <Badge className="bg-amber-700 text-white">部分成功</Badge>;
      default:
        return <Badge variant="secondary" className="bg-slate-600 text-white">未知</Badge>;
    }
  };

  const getFileStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <div className="h-2 w-2 rounded-full bg-emerald-600" />;
      case "failed":
        return <div className="h-2 w-2 rounded-full bg-red-600" />;
      default:
        return <div className="h-2 w-2 rounded-full bg-slate-500" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* 頁面標題與操作 */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">傳輸紀錄查詢</h1>
          <p className="text-slate-600">查看詳細的檔案傳輸歷史記錄與狀態</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-50">
            <Download className="h-4 w-4 mr-2" />
            匯出紀錄
          </Button>
          <Button variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-50">
            <RefreshCw className="h-4 w-4 mr-2" />
            重新整理
          </Button>
        </div>
      </div>

      {/* 搜尋與篩選 */}
      <Card className="bg-white/95 backdrop-blur-sm border-slate-200 shadow-sm">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
              <Input
                placeholder="搜尋任務名稱、來源或目標路徑..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-emerald-500"
              />
            </div>
            <Button variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-50">
              <CalendarIcon className="h-4 w-4 mr-2" />
              日期範圍
            </Button>
            <Button variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-50">
              <Filter className="h-4 w-4 mr-2" />
              進階篩選
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 紀錄列表 */}
      <div className="space-y-4">
        {filteredRecords.map((record) => (
          <Card key={record.id} className="bg-white/95 backdrop-blur-sm border-slate-200 hover:bg-white hover:shadow-md transition-all duration-200 shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedRecord(expandedRecord === record.id ? null : record.id)}
                    className="text-slate-500 hover:text-slate-700 hover:bg-slate-100 p-1"
                  >
                    {expandedRecord === record.id ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                  <div>
                    <CardTitle className="text-lg text-slate-800">{record.taskName}</CardTitle>
                    <CardDescription className="text-slate-600">
                      {record.startTime} - {record.endTime} ({record.duration})
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(record.status)}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* 基本統計資訊 */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-600">傳輸檔案</p>
                  <p className="text-sm text-slate-800">
                    {record.transferredFiles.toLocaleString()} / {record.sourceFiles.toLocaleString()}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-600">失敗檔案</p>
                  <p className={`text-sm ${record.failedFiles > 0 ? "text-red-600" : "text-emerald-600"}`}>
                    {record.failedFiles.toLocaleString()}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-600">總大小</p>
                  <p className="text-sm text-slate-800">{record.totalSize}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-600">執行時間</p>
                  <p className="text-sm text-slate-800">{record.duration}</p>
                </div>
              </div>

              {/* 路徑資訊 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-600">來源路徑</p>
                  <p className="text-sm text-slate-800 font-mono bg-slate-100 px-2 py-1 rounded border border-slate-200">
                    {record.sourcePath}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-600">目標路徑</p>
                  <p className="text-sm text-slate-800 font-mono bg-slate-100 px-2 py-1 rounded border border-slate-200">
                    {record.targetPath}
                  </p>
                </div>
              </div>

              {/* 錯誤訊息 */}
              {record.errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700">
                    <strong>錯誤訊息：</strong> {record.errorMessage}
                  </p>
                </div>
              )}

              {/* 展開的詳細資訊 */}
              {expandedRecord === record.id && (
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-4 w-4 text-slate-600" />
                    <h4 className="text-sm font-medium text-slate-800">檔案詳細列表</h4>
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {record.details.map((file, index) => (
                      <div key={index} className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded border border-slate-100">
                        <div className="flex items-center gap-3">
                          {getFileStatusIcon(file.status)}
                          <span className="text-sm text-slate-800 font-mono">{file.file}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-600">{file.size}</span>
                          <Badge 
                            variant={file.status === "success" ? "default" : "destructive"}
                            className={file.status === "success" ? "bg-emerald-700 text-white" : "bg-red-700 text-white text-xs"}
                          >
                            {file.status === "success" ? "成功" : "失敗"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 空狀態 */}
      {filteredRecords.length === 0 && (
        <Card className="bg-white/95 backdrop-blur-sm border-slate-200 shadow-sm">
          <CardContent className="py-12 text-center">
            <History className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-800 mb-2">找不到符合的傳輸紀錄</h3>
            <p className="text-slate-600 mb-6">請調整搜尋條件或選擇不同的日期範圍</p>
            <Button variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-50">
              <RefreshCw className="h-4 w-4 mr-2" />
              重新整理
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TransferHistory;
