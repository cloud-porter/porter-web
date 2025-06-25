
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Cloud } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-emerald-400 via-green-300 to-teal-400">
      <Card className="backdrop-blur-lg bg-white/90 border-white/30 shadow-2xl max-w-md w-full">
        <CardContent className="p-8 text-center">
          <div className="mx-auto h-16 w-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
            <Cloud className="h-8 w-8 text-emerald-600" />
          </div>
          <h1 className="text-6xl font-bold text-emerald-800 mb-4">404</h1>
          <h2 className="text-xl font-semibold text-emerald-800 mb-2">頁面不存在</h2>
          <p className="text-emerald-600 mb-8">
            很抱歉，您要尋找的頁面不存在或已被移除。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={() => window.history.back()}
              variant="outline" 
              className="text-emerald-700 border-emerald-200 hover:bg-emerald-50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回上頁
            </Button>
            <Button 
              onClick={() => window.location.href = "/"}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <Home className="h-4 w-4 mr-2" />
              回到首頁
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
