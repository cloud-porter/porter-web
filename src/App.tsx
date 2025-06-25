
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Schedules from "./pages/Schedules";
import TransferHistory from "./pages/TransferHistory";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // 模擬登入狀態，之後會改用 Context 或狀態管理
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100">
            <Routes>
              <Route 
                path="/login" 
                element={
                  isAuthenticated ? 
                  <Navigate to="/dashboard" replace /> : 
                  <Login onLogin={() => setIsAuthenticated(true)} />
                } 
              />
              <Route 
                path="/" 
                element={
                  isAuthenticated ? 
                  <Navigate to="/dashboard" replace /> : 
                  <Navigate to="/login" replace />
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  isAuthenticated ? 
                  <Layout><Dashboard /></Layout> : 
                  <Navigate to="/login" replace />
                } 
              />
              <Route 
                path="/schedules" 
                element={
                  isAuthenticated ? 
                  <Layout><Schedules /></Layout> : 
                  <Navigate to="/login" replace />
                } 
              />
              <Route 
                path="/history" 
                element={
                  isAuthenticated ? 
                  <Layout><TransferHistory /></Layout> : 
                  <Navigate to="/login" replace />
                } 
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
