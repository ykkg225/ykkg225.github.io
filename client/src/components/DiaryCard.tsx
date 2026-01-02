import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Link } from "wouter";
import { format } from "date-fns";
import type { Diary } from "@/types/content";

interface DiaryCardProps {
  entry: Diary;
}

export default function DiaryCard({ entry }: DiaryCardProps) {
  const date = new Date(entry.date);
  const preview = entry.content.split('\n')[0].substring(0, 100) + (entry.content.length > 100 ? '...' : '');
  
  return (
    <Link href={`/diary/${entry.slug}`}>
      <Card className="rounded-2xl shadow-lg hover:-translate-y-1 transition-transform cursor-pointer" data-testid={`card-diary-${entry.id}`}>
        <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-4">
          <h3 className="text-xl font-heading font-semibold text-foreground" data-testid={`text-diary-title-${entry.id}`}>
            {entry.title}
          </h3>
        </CardHeader>
        
        <CardContent className="border-t-2 border-border pt-4">
          <p className="text-base text-card-foreground line-clamp-3" data-testid={`text-diary-content-${entry.id}`}>
            {preview}
          </p>
        </CardContent>
        
        <CardFooter className="flex flex-wrap items-center gap-2 pt-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span data-testid={`text-diary-date-${entry.id}`}>{format(date, 'yyyy年MM月dd日')}</span>
          </div>
          
          {entry.tags && entry.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap ml-auto">
              {entry.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full"
                  data-testid={`badge-tag-${tag}`}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}

