
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { HardDrive } from "lucide-react";

const DataVolumeChart = () => {
  const data = [
    { day: "週一", volume: 1.2 },
    { day: "週二", volume: 2.8 },
    { day: "週三", volume: 1.9 },
    { day: "週四", volume: 3.5 },
    { day: "週五", volume: 4.2 },
    { day: "週六", volume: 0.8 },
    { day: "週日", volume: 0.5 },
  ];

  const chartConfig = {
    volume: {
      label: "傳輸量 (GB)",
      color: "#059669",
    },
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 shadow-sm">
      <CardHeader>
        <CardTitle className="text-emerald-900 flex items-center gap-2">
          <HardDrive className="h-5 w-5" />
          本週傳輸量
        </CardTitle>
        <CardDescription className="text-emerald-700">
          每日資料傳輸容量統計 (GB)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis 
                dataKey="day" 
                stroke="#059669"
                fontSize={12}
              />
              <YAxis 
                stroke="#059669"
                fontSize={12}
              />
              <ChartTooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-3 border border-emerald-200 rounded-lg shadow-sm">
                        <p className="text-emerald-900 font-medium">{label}</p>
                        <p className="text-emerald-700">
                          傳輸量: {payload[0].value} GB
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar 
                dataKey="volume" 
                fill="#059669"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default DataVolumeChart;
