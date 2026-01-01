import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import DiaryCard, { DiaryEntry } from "@/components/DiaryCard";
import NoteCard, { Note } from "@/components/NoteCard";
import AddDiaryForm from "@/components/AddDiaryForm";
import { BookOpen, FileText } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [showDiaryForm, setShowDiaryForm] = useState(false);
  const [diaries, setDiaries] = useState<DiaryEntry[]>([
    {
      id: '1',
      title: '歡迎來到我的部落格！✨',
      content: '這是我的可愛二次元風格部落格～我會在這裡分享我的日常、作品和各種有趣的事情！希望大家會喜歡 💕',
      date: new Date('2024-01-15'),
      tags: ['歡迎', '部落格']
    },
    {
      id: '2',
      title: '開始學習新的繪畫技巧',
      content: '今天在網路上找到了一個很棒的繪畫教學，學到了很多關於人物比例和陰影的技巧。打算這週末就來練習看看！',
      date: new Date('2024-01-10'),
      tags: ['繪畫', '學習']
    }
  ]);

  const [notes] = useState<Note[]>([
    {
      id: '1',
      title: 'React Hooks 學習筆記',
      content: 'useState 和 useEffect 是最常用的 Hooks。useState 用於狀態管理，useEffect 用於副作用處理。記得 useEffect 的依賴陣列要正確設置！',
      category: '程式設計'
    },
    {
      id: '2',
      title: '日文學習重點',
      content: '今天學習了「は」和「が」的差別。「は」用於主題標記，「が」用於主語標記。在疑問句中通常使用「が」。',
      category: '語言學習'
    },
    {
      id: '3',
      title: '畫圖技巧整理',
      content: '人物比例：頭部約為全身的 1/7。眼睛位置在頭部中央偏上。注意光影的方向性，保持一致。',
      category: '繪畫'
    },
    {
      id: '4',
      title: '待看動漫清單',
      content: '1. 進擊的巨人最終季\n2. 鬼滅之刃新篇章\n3. 咒術迴戰第二季\n4. SPY×FAMILY',
      category: '動漫'
    }
  ]);

  const handleAddDiary = (title: string, content: string, tags: string[]) => {
    const newDiary: DiaryEntry = {
      id: Date.now().toString(),
      title,
      content,
      date: new Date(),
      tags
    };
    setDiaries([newDiary, ...diaries]);
    setShowDiaryForm(false);
  };

  const handleDeleteDiary = (id: string) => {
    setDiaries(diaries.filter(d => d.id !== id));
  };

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
            onAdd={() => setShowDiaryForm(true)}
            addButtonText="寫日記"
          />
          
          {showDiaryForm && (
            <div className="mb-8">
              <AddDiaryForm 
                onAdd={handleAddDiary}
                onCancel={() => setShowDiaryForm(false)}
              />
            </div>
          )}
          
          <div className="max-w-3xl space-y-6">
            {diaries.map(diary => (
              <DiaryCard 
                key={diary.id} 
                entry={diary}
                onDelete={handleDeleteDiary}
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

