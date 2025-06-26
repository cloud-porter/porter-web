import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export const scheduleDefault = {
  name: "",
  description: "",
  source: "",
  target: "",
  schedule: "",
  scheduleText: "",
  enabled: true,
};

export default function ScheduleForm({
  onSubmit: onSubmitProp,
  initialValues = scheduleDefault,
  submitText = "送出",
  className = "",
}: {
  onSubmit: (data: any) => void;
  initialValues?: typeof scheduleDefault;
  submitText?: string;
  className?: string;
}) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: initialValues });
  const onSubmit = (data: any) => {
    onSubmitProp(data);
    reset(initialValues);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-4 ${className}`}>
      <div>
        <Label htmlFor="name">排程名稱</Label>
        <Input id="name" {...register("name", { required: "必填" })} />
        {errors.name && <span className="text-red-500 text-xs">{errors.name.message as string}</span>}
      </div>
      <div>
        <Label htmlFor="description">描述</Label>
        <Textarea id="description" {...register("description")} />
      </div>
      <div>
        <Label htmlFor="source">來源路徑</Label>
        <Input id="source" {...register("source", { required: "必填" })} />
        {errors.source && <span className="text-red-500 text-xs">{errors.source.message as string}</span>}
      </div>
      <div>
        <Label htmlFor="target">目標路徑</Label>
        <Input id="target" {...register("target", { required: "必填" })} />
        {errors.target && <span className="text-red-500 text-xs">{errors.target.message as string}</span>}
      </div>
      <div>
        <Label htmlFor="schedule">Cron 排程</Label>
        <Input id="schedule" {...register("schedule", { required: "必填" })} placeholder="0 2 * * *" />
        {errors.schedule && <span className="text-red-500 text-xs">{errors.schedule.message as string}</span>}
      </div>
      <div>
        <Label htmlFor="scheduleText">排程說明</Label>
        <Input id="scheduleText" {...register("scheduleText")} placeholder="每日 02:00" />
      </div>
      <div className="flex items-center gap-2">
        <Switch id="enabled" defaultChecked={initialValues.enabled} {...register("enabled")} />
        <Label htmlFor="enabled">啟用</Label>
      </div>
      <Button type="submit" className="bg-emerald-700 text-white">{submitText}</Button>
    </form>
  );
}
