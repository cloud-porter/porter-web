# Story / Ticket Template

## 標題

登入/驗證模組（Cognito 整合登入、登出、身分驗證、角色管理）

---

## 背景 / 目的

- 需整合 AWS Cognito，提供安全的登入、登出、身分驗證與角色（Admin / Viewer）管理，作為平台存取的第一道防線。

---

## 需求 / 任務內容

- [ ] 前端整合 AWS Cognito 登入/登出流程
- [ ] 實作身分驗證與角色判斷（Admin / Viewer）
- [ ] 登入後導向 Dashboard，未登入導向登入頁
- [ ] UI 顯示登入狀態與登出按鈕

---

## 驗收標準

- [ ] 可正常登入/登出並取得 Cognito Token
- [ ] 依據角色顯示不同功能
- [ ] 未登入時無法進入主頁

---

## 補充說明

- Cognito pool 設定、API 文件、設計稿

---

## 相關人員

- PM：
- RD：
- QA：
