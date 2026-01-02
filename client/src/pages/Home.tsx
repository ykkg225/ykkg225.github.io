import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import DiaryCard from "@/components/DiaryCard";
import NoteCard from "@/components/NoteCard";
import { BookOpen, FileText } from "lucide-react";
import { diaries, notes } from "@/data/content";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={scrollToSection} />
      
      <Hero 
        name="ykkg225" 
        introduction="我是一個喜歡二次元文化的開發者，歡迎來到我的可愛部落格！" 
        email="ykkg225@example.com"
      />

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-20">
        <section id="diary">
          <SectionHeader 
            icon={BookOpen}
            title="我的日記"
            description="記錄每一天的精彩時刻"
          />
          
          <div className="max-w-3xl space-y-6">
            {diaries.map(diary => (
              <DiaryCard 
                key={diary.id} 
                entry={diary}
              />
            ))}
          </div>
        </section>

        <section id="notes">
          <SectionHeader 
            icon={FileText}
            title="我的筆記"
            description="整理學習心得與重點"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notes.map(note => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </section>

      </main>

      <footer className="bg-card border-t border-card-border mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 ykkg225 的可愛部落格 | 用 ❤️ 和 React 打造
          </p>
        </div>
      </footer>
    </div>
  );
}

