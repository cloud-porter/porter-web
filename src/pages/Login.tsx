
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Shield, ArrowRight } from "lucide-react";

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // 模擬登入過程
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-emerald-400 via-green-300 to-teal-400">
      <div className="w-full max-w-md space-y-8">
        {/* Logo 和標題 */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <Cloud className="h-8 w-8 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Cloud Porter</h1>
          <p className="text-emerald-100">上班一條龍 下班黑客鬆</p>
        </div>

        {/* 登入表單 */}
        <Card className="backdrop-blur-lg bg-white/90 border-white/30 shadow-2xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-emerald-800 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              安全登入
            </CardTitle>
            <CardDescription className="text-emerald-600">
              請輸入您的帳號密碼以存取系統
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-emerald-800">電子信箱</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="relax@cloudporter.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/70 border-emerald-200 text-emerald-900 placeholder:text-emerald-400 focus:border-emerald-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-emerald-800">密碼</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white/70 border-emerald-200 text-emerald-900 placeholder:text-emerald-400 focus:border-emerald-500"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-200 group shadow-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    驗證中...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    登入系統
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* 功能預告 */}
        <div className="text-center text-sm text-emerald-100">
          {/* <p>即將整合 AWS Cognito 身分驗證</p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
