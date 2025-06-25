# 專案結構說明（React + Vite + TypeScript）

## 專案啟動

1. 安裝依賴：

   ```bash
   npm install
   ```

2. 啟動開發伺服器：

   ```bash
   npm run dev
   ```

3. 打包專案：

   ```bash
   npm run build
   ```

4. 預覽打包結果：

   ```bash
   npm run preview
   ```

---

## 專案目錄結構

```
porter-web/
├── .github/             # GitHub 設定與 issue、task 模板
├── configuration/       # CI/CD 或部署相關設定
├── src/                 # 主要程式碼
│   ├── components/      # 共用元件（含 ui/ 子目錄）
│   ├── hooks/           # React hooks
│   ├── lib/             # 共用工具（如 utils.ts）
│   ├── pages/           # 各頁面元件
│   ├── App.tsx          # 主要 React 元件
│   ├── main.tsx         # 入口檔案
│   ├── App.css          # App 樣式
│   └── index.css        # 全域樣式
├── index.html           # HTML 模板
├── package.json         # 專案依賴與腳本
├── vite.config.ts       # Vite 設定檔
├── tailwind.config.ts   # Tailwind CSS 設定
├── postcss.config.js    # PostCSS 設定
├── tsconfig*.json       # TypeScript 設定
├── bun.lockb            # bun 套件鎖定檔
├── README.md            # 專案說明文件
└── PROJECT_STRUCTURE.md # 專案結構說明
```

---

## 推薦開發規範

- 共用元件請放置於 `src/components/`（可依需求建立子目錄）
- hooks 請放置於 `src/hooks/`
- 共用工具請放置於 `src/lib/`
- 頁面元件請放置於 `src/pages/`
- 樣式可依需求拆分於 `src/` 內（如 App.css, index.css）

---

## 其他

- 請善用 Git branch 與 commit message 規範
- 建議以 issue template 管理需求
