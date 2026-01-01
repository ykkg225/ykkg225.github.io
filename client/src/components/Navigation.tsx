import { Button } from "@/components/ui/button";
import { Moon, Sun, BookOpen, FileText, Home, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isDark, setIsDark] = useState(false);
  const [, setLocation] = useLocation();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const sections = [
    { id: 'home', label: '首頁', icon: Home },
    { id: 'diary', label: '日記', icon: BookOpen },
    { id: 'notes', label: '筆記', icon: FileText },
  ];

  const handleChatClick = () => {
    setLocation('/chat');
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-card-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-2 overflow-x-auto flex-1">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  size="sm"
                  className="rounded-full whitespace-nowrap hover-elevate active-elevate-2"
                  onClick={() => onSectionChange(section.id)}
                  data-testid={`button-nav-${section.id}`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {section.label}
                </Button>
              );
            })}
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full whitespace-nowrap hover-elevate active-elevate-2"
              onClick={handleChatClick}
              data-testid="button-nav-chat"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              聊天室
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover-elevate active-elevate-2 flex-shrink-0"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
}

