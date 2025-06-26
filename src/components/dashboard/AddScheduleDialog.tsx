import { ReactNode, useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";

const scheduleDefault = {
  name: "",
  description: "",
  source: "",
  target: "",
  schedule: "",
  scheduleText: "",
  enabled: true,
};

export default function AddScheduleDialog({ onSubmit: onSubmitProp, children }: { onSubmit?: (data: any) => void; children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: scheduleDefault });
  const onSubmit = (data: any) => {
    if (onSubmitProp) onSubmitProp(data);
    setOpen(false);
    reset(scheduleDefault);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ? children : (
          <Button className="h-20 bg-green-100 hover:bg-green-200 border border-green-200 flex flex-col gap-2 text-green-800 hover:text-green-900">
            <Plus className="h-6 w-6" />
            <span>新增排程</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>新增排程</DialogTitle>
          <DialogDescription>請輸入排程相關資訊</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            <Switch id="enabled" checked={true} {...register("enabled")} />
            <Label htmlFor="enabled">啟用</Label>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-emerald-700 text-white">送出</Button>
            <DialogClose asChild>
              <Button type="button" variant="outline">取消</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
