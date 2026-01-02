import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Link } from "wouter";
import type { Note } from "@/types/content";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  const preview = note.content.split('\n')[0].substring(0, 100) + (note.content.length > 100 ? '...' : '');
  
  return (
    <Link href={`/note/${note.slug}`}>
      <Card className="rounded-2xl shadow-lg hover:-translate-y-1 transition-transform cursor-pointer" data-testid={`card-note-${note.id}`}>
        <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-foreground" data-testid={`text-note-title-${note.id}`}>
              {note.title}
            </h3>
          </div>
        </CardHeader>
        
        <CardContent>
          <p className="text-sm text-card-foreground line-clamp-3" data-testid={`text-note-content-${note.id}`}>
            {preview}
          </p>
        </CardContent>
        
        {note.category && (
          <CardFooter>
            <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
              {note.category}
            </span>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
}

