
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { FolderOpen } from "lucide-react";

const FileTypeChart = () => {
  const data = [
    { name: "文件檔案", value: 35, color: "#10b981" },
    { name: "圖片檔案", value: 25, color: "#3b82f6" },
    { name: "影音檔案", value: 20, color: "#8b5cf6" },
    { name: "資料庫備份", value: 15, color: "#f59e0b" },
    { name: "其他", value: 5, color: "#6b7280" },
  ];

  const chartConfig = {
    documents: {
      label: "文件檔案",
      color: "#10b981",
    },
    images: {
      label: "圖片檔案",
      color: "#3b82f6",
    },
    media: {
      label: "影音檔案",
      color: "#8b5cf6",
    },
    backup: {
      label: "資料庫備份",
      color: "#f59e0b",
    },
    others: {
      label: "其他",
      color: "#6b7280",
    },
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-sm">
      <CardHeader>
        <CardTitle className="text-emerald-900 flex items-center gap-2">
          <FolderOpen className="h-5 w-5" />
          檔案類型分佈
        </CardTitle>
        <CardDescription className="text-emerald-700">
          本月傳輸檔案類型統計
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-2 border border-emerald-200 rounded-lg shadow-sm">
                        <p className="text-emerald-900 font-medium">{data.name}</p>
                        <p className="text-emerald-700">{data.value}%</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                formatter={(value, entry) => (
                  <span className="text-emerald-800 text-sm">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default FileTypeChart;
