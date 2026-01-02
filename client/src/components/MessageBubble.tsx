import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: string;
  username: string;
  isOwn: boolean;
  timestamp: string;
}

export default function MessageBubble({ message, username, isOwn, timestamp }: MessageBubbleProps) {
  return (
    <div
      className={cn(
        "flex gap-3 animate-slide-up",
        isOwn ? "flex-row-reverse" : "flex-row"
      )}
      data-testid={`message-bubble-${isOwn ? 'own' : 'other'}`}
    >
      {!isOwn && (
        <Avatar className="w-10 h-10 flex-shrink-0">
          <AvatarImage src="/下載.svg" alt={`${username} avatar`} />
          <AvatarFallback className="bg-gradient-to-br from-chart-1 to-chart-4 text-white text-sm font-semibold">
            {username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className={cn("flex flex-col gap-1", isOwn ? "items-end" : "items-start")}>
        {!isOwn && (
          <span className="text-sm font-semibold text-foreground px-1" data-testid="text-sender-name">
            {username}
          </span>
        )}
        
        <div
          className={cn(
            "max-w-md px-4 py-3 shadow-md",
            isOwn
              ? "bg-gradient-to-br from-primary to-chart-3 text-primary-foreground rounded-2xl rounded-br-sm"
              : "bg-card rounded-2xl rounded-bl-sm"
          )}
          data-testid="text-message-content"
        >
          <p className="text-base break-words">{message}</p>
        </div>
        
        <span className="text-xs opacity-60 px-1" data-testid="text-timestamp">
          {timestamp}
        </span>
      </div>
    </div>
  );
}
