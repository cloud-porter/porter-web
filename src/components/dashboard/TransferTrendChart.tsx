
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

const TransferTrendChart = () => {
  const data = [
    { time: "00:00", success: 120, failed: 5 },
    { time: "04:00", success: 180, failed: 3 },
    { time: "08:00", success: 280, failed: 8 },
    { time: "12:00", success: 320, failed: 12 },
    { time: "16:00", success: 450, failed: 7 },
    { time: "20:00", success: 380, failed: 4 },
  ];

  const chartConfig = {
    success: {
      label: "成功傳輸",
      color: "#10b981",
    },
    failed: {
      label: "失敗傳輸", 
      color: "#ef4444",
    },
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-sm">
      <CardHeader>
        <CardTitle className="text-emerald-900 flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          24小時傳輸趨勢
        </CardTitle>
        <CardDescription className="text-emerald-700">
          今日各時段傳輸成功與失敗統計
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis 
                dataKey="time" 
                stroke="#059669"
                fontSize={12}
              />
              <YAxis 
                stroke="#059669"
                fontSize={12}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="success" 
                stroke="#10b981" 
                strokeWidth={2}
                dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="failed" 
                stroke="#ef4444" 
                strokeWidth={2}
                dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default TransferTrendChart;
