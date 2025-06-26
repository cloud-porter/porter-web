import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";


const Gauge = ({ value, color }: { value: number; color: string }) => (
  <ResponsiveContainer width="100%" height={120}>
    <RadialBarChart
      cx="50%"
      cy="100%"
      innerRadius="70%"
      outerRadius="100%"
      barSize={18}
      data={[{ value }]}
      startAngle={180}
      endAngle={0}
    >
      <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
      <RadialBar
        background
        dataKey="value"
        cornerRadius={10}
        fill={color}
      />
    </RadialBarChart>
  </ResponsiveContainer>
);

const SystemPerformanceChart = () => {
  const [memory, setMemory] = useState(66);
  const [disk, setDisk] = useState(49);
  const [cpu, setCpu] = useState(58);

  useEffect(() => {
    const interval = setInterval(() => {
      setMemory(Math.floor(40 + Math.random() * 60)); // 40~100
      // setDisk(Math.floor(30 + Math.random() * 60));   // 30~90
      setCpu(Math.floor(30 + Math.random() * 70));    // 30~100
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getGaugeColor = (value: number) => {
    if (value <= 50) return "#34d399"; // 綠色
    if (value <= 80) return "#fbbf24"; // 黃色
    return "#f87171"; // 紅色
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
        <div className="flex flex-row items-end justify-center gap-16 w-full">
          {/* Memory Gauge */}
          <div className="flex flex-col items-center scale-125">
            <Gauge value={memory} color={getGaugeColor(memory)} />
            <div className="text-2xl font-bold text-gray-700 -mt-4">{memory} %</div>
            <div className="text-base text-gray-500 text-center">Memory Utilization</div>
          </div>
          {/* Disk Gauge */}
          <div className="flex flex-col items-center scale-125">
            <Gauge value={disk} color={getGaugeColor(disk)} />
            <div className="text-2xl font-bold text-gray-700 -mt-4">{disk} %</div>
            <div className="text-base text-gray-500 text-center">Disk Utilization</div>
          </div>
          {/* CPU Gauge */}
          <div className="flex flex-col items-center scale-125">
            <Gauge value={cpu} color={getGaugeColor(cpu)} />
            <div className="text-2xl font-bold text-gray-700 -mt-4">{cpu} %</div>
            <div className="text-base text-gray-500 text-center">CPU Utilization</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemPerformanceChart;
