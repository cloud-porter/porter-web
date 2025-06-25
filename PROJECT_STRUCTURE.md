# 專案結構說明（React + Vite）

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
├── public/           # 靜態資源（favicon、靜態圖片等）
├── src/              # 主要程式碼
│   ├── assets/       # 圖片、字型等靜態資源
│   ├── App.jsx       # 主要 React 元件
│   ├── main.jsx      # 入口檔案
│   ├── App.css       # App 樣式
│   └── index.css     # 全域樣式
├── index.html        # HTML 模板
├── package.json      # 專案依賴與腳本
├── vite.config.js    # Vite 設定檔
└── README.md         # 專案說明文件
```

---

## 推薦開發規範
- 元件請放置於 `src/components/`（可自行建立）
- hooks 請放置於 `src/hooks/`
- API 請放置於 `src/api/`
- 共用工具請放置於 `src/utils/`
- 樣式可依需求拆分於 `src/styles/`

---

## 其他
- 請善用 Git branch 與 commit message 規範
- 建議以 issue template 管理需求
