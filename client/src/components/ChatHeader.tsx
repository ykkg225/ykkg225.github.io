import { Users, Moon, Sun, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

interface ChatHeaderProps {
  username: string;
  onlineCount: number;
}

export default function ChatHeader({ username, onlineCount }: ChatHeaderProps) {
  const [isDark, setIsDark] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="sticky top-0 z-50 h-16 px-6 flex items-center justify-between bg-gradient-to-r from-primary/10 via-background to-primary/10 backdrop-blur-sm border-b">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setLocation('/')}
          className="rounded-full hover-elevate active-elevate-2"
          title="返回首頁"
        >
          <Home className="w-4 h-4" />
        </Button>
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-chart-4 bg-clip-text text-transparent">
          ✨ 二次元聊天室
        </div>
        <Badge 
          variant="secondary" 
          className="gap-1.5 animate-pulse-glow"
          data-testid="badge-online-count"
        >
          <Users className="w-3 h-3" />
          <span>{onlineCount} 在線</span>
        </Badge>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
              {username.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-semibold" data-testid="text-username">
            {username}
          </span>
        </div>
        
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleTheme}
          data-testid="button-theme-toggle"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
      </div>
    </header>
  );
}
