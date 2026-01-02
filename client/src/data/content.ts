import type { Diary, Note } from "@/types/content";
import contentData from "./content.json";

interface ContentData {
  diaries: Diary[];
  notes: Note[];
}

const content = contentData as ContentData;

export const diaries: Diary[] = content.diaries;
export const notes: Note[] = content.notes;

