# 內容管理說明

本專案使用 YAML 檔案來管理日記和筆記內容。

## 資料夾結構

```
content/
  diaries/      # 日記資料夾
    *.yaml      # 每個 YAML 檔案對應一篇日記
  notes/        # 筆記資料夾
    *.yaml      # 每個 YAML 檔案對應一篇筆記
```

## 日記格式

在 `content/diaries/` 資料夾中，每個 YAML 檔案對應一篇日記。檔案名稱（不含副檔名）會自動成為該日記的 URL slug。

### YAML 檔案範例

```yaml
id: "1"
title: "歡迎來到我的部落格！✨"
date: "2024-01-15"
tags:
  - "歡迎"
  - "部落格"
content: |
  # 歡迎來到我的部落格！✨

  這是我的可愛二次元風格部落格～我會在這裡分享我的日常、作品和各種有趣的事情！希望大家會喜歡 💕
```

### 欄位說明

- `id`: 日記的唯一識別碼（字串）
- `title`: 日記標題
- `date`: 日期（格式：YYYY-MM-DD）
- `tags`: 標籤列表（陣列，可選）
- `content`: 日記內容（支援 Markdown 語法）

## 筆記格式

在 `content/notes/` 資料夾中，每個 YAML 檔案對應一篇筆記。檔案名稱（不含副檔名）會自動成為該筆記的 URL slug。

### YAML 檔案範例

```yaml
id: "1"
title: "React Hooks 學習筆記"
category: "程式設計"
content: |
  # React Hooks 學習筆記

  useState 和 useEffect 是最常用的 Hooks。

  ## useState

  useState 用於狀態管理...
```

### 欄位說明

- `id`: 筆記的唯一識別碼（字串）
- `title`: 筆記標題
- `category`: 分類（可選，例如：程式設計、語言學習等）
- `content`: 筆記內容（支援 Markdown 語法）

## 重要注意事項

1. **檔案名稱 = URL slug**：YAML 檔案的名稱（不含 `.yaml` 或 `.yml`）會自動成為該內容的 URL slug。例如：`歡迎來到我的部落格.yaml` 的 URL 會是 `/diary/歡迎來到我的部落格`。

2. **Markdown 支援**：`content` 欄位支援完整的 Markdown 語法，包括：
   - 標題（#、##、###）
   - 列表（有序和無序）
   - 程式碼區塊（```）
   - 粗體、斜體
   - 連結
   - 等等

3. **日期格式**：日記的 `date` 欄位必須使用 `YYYY-MM-DD` 格式（例如：`2024-01-15`）。

## 生成內容

在開發或建置前，需要先執行內容生成腳本：

```bash
npm run content:generate
```

這個腳本會：
1. 讀取 `content/diaries/` 資料夾中的所有 YAML 檔案
2. 讀取 `content/notes/` 資料夾中的所有 YAML 檔案
3. 為每個日記和筆記自動生成 `slug`（基於檔案名稱）
4. 將日期字串轉換為 ISO 格式
5. 將所有內容合併成一個 JSON 檔案（`client/src/data/content.json`）
6. 按日期排序日記（最新的在前）

## 開發流程

1. 在對應的資料夾中新增或編輯 YAML 檔案
2. 執行 `npm run content:generate` 生成內容
3. 執行 `npm run dev` 啟動開發伺服器
4. 在瀏覽器中查看日記和筆記

## 建置流程

執行 `npm run build` 時會自動執行內容生成，無需手動執行。

