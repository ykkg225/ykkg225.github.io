import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "wouter";
import MarkdownContent from "@/components/MarkdownContent";
import { notes } from "@/data/content";

export default function NoteDetail() {
  const [, params] = useRoute("/note/:slug");
  const slug = params?.slug;

  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold">找不到此筆記</h1>
          <Link href="/">
            <Button>返回首頁</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-4" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              返回首頁
            </Button>
          </Link>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl font-bold leading-tight" data-testid="text-title">
                {note.title}
              </h1>
            </div>

            {note.category && (
              <Badge variant="secondary" className="text-sm">
                {note.category}
              </Badge>
            )}
          </div>

          <div>
            <MarkdownContent content={note.content} />
          </div>

          <div className="pt-8 border-t">
            <Link href="/">
              <Button variant="outline" className="gap-2" data-testid="button-back-bottom">
                <ArrowLeft className="w-4 h-4" />
                返回首頁
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

