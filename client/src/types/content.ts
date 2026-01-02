export interface Diary {
  id: string;
  slug: string;
  title: string;
  date: string;
  tags?: string[];
  content: string;
}

export interface Note {
  id: string;
  slug: string;
  title: string;
  category?: string;
  content: string;
}

