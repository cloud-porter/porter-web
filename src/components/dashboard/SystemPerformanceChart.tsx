
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Activity } from "lucide-react";

const SystemPerformanceChart = () => {
  const data = [
    { time: "10:00", cpu: 45, memory: 62, network: 38 },
    { time: "12:00", cpu: 52, memory: 68, network: 45 },
    { time: "14:00", cpu: 38, memory: 55, network: 52 },
    { time: "16:00", cpu: 68, memory: 75, network: 68 },
    { time: "18:00", cpu: 42, memory: 58, network: 35 },
    { time: "20:00", cpu: 35, memory: 48, network: 28 },
  ];

  const chartConfig = {
    cpu: {
      label: "CPU 使用率",
      color: "#059669",
    },
    memory: {
      label: "記憶體使用率",
      color: "#3b82f6",
    },
    network: {
      label: "網路使用率",
      color: "#8b5cf6",
    },
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-sm">
      <CardHeader>
        <CardTitle className="text-emerald-900 flex items-center gap-2">
          <Activity className="h-5 w-5" />
          系統效能監控
        </CardTitle>
        <CardDescription className="text-emerald-700">
          即時系統資源使用率 (%)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <XAxis 
                dataKey="time" 
                stroke="#059669"
                fontSize={12}
              />
              <YAxis 
                stroke="#059669"
                fontSize={12}
                domain={[0, 100]}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="cpu"
                stackId="1"
                stroke="#059669"
                fill="#059669"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="memory"
                stackId="1"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="network"
                stackId="1"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default SystemPerformanceChart;
