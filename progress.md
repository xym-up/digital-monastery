# progress.md — 项目进度追踪

> 每次完成功能后更新此文件。新会话开始时先读此文件。

## 最近更新：2026-02-13（Phase 3 部分完成：格物致知 + 读书时光大改版）

## 当前状态：Phase 2 完成 + Phase 3 部分完成

## 已完成

### Phase 1：基础设施 ✅
- Next.js 16 + TypeScript + Tailwind CSS 4 初始化
- 文件夹结构：src/app, components/{ui,layout}, lib, hooks, types, config
- 全局 Layout：Merriweather(衬线) + Inter(无衬线) 字体、ThemeProvider
- 亮/暗模式切换（next-themes + useMounted 防 hydration）
- Markdown 内容系统（gray-matter 解析 frontmatter → content.ts）
- 基础组件：Container, PageHeader, PostCard
- 三个分类页面：/reading, /thinking, /life
- 文章详情页：/[category]/[slug]（动态路由）
- SEO：robots.ts, sitemap.ts, OpenGraph metadata
- 404 页面

### Phase 2：设计系统升级 ✅
- 调色板更新：米色背景 #F7F5EB、靛青强调色 #5c6bc0、暗模式 #0a0a0a
- 首页 Hero 重设计：打字机效果（Typewriter 组件）+ 个人介绍 + 座右铭 + 分类入口
- PostCard 升级：大尺寸 p-8/p-10 + hover:-translate-y-1 上浮 + 阴影加深
- PageHeader 升级：更多留白 pt-28/pt-36 + 装饰线
- 分类页面升级：gap-8 + animate-fade-in-up 错落渐入
- 文章详情页升级：全局 .article-content CSS 排版 + 返回导航（ArrowLeft）
- 全站动画系统：@keyframes blink、fade-in-up、transition-smooth
- 站点配置更新：分类中文描述、作者信息
- 文档体系搭建：PRD, APP_FLOW, TECH_STACK, FRONTEND_GUIDELINES, IMPLEMENTATION_PLAN, progress.md, lessons.md, copilot-instructions.md

### Phase 3 部分完成：格物致知 + 读书时光大改版 ✅
- **格物致知（/thinking）完全重构：**
  - 参照 maggieappleton.com Garden 风格
  - 三维过滤系统：主题(Topic Pills) × 成长阶段(Growth Dropdown) × 笔记类型(Type Dropdown)
  - 新组件：StageIndicator（Seedling/Budding/Evergreen 成长指示器）
  - 新组件：GardenGrid（客户端组件，含筛选器 + 卡片网格）
  - 新组件：FilterDropdown（自定义下拉选择器）
  - 卡片设计：悬停显示底部 topic + stage、下划线标题、相对时间显示
  - Sticky 筛选栏（滚动时固定在顶部）
  - 6 篇示例文章覆盖不同 topic/stage/noteType 组合
- **读书时光（/reading）完全重构：**
  - 书架式 Grid 布局（2列手机 / 3列平板 / 4列桌面）
  - 新组件：BookCard（2:3 书封比例 + CSS 渐变占位 + 悬停叠层）
  - 新组件：BookPlaceholder（装饰性"待读"空位）
  - 6 种书封配色方案（stone/amber/emerald/slate/rose/indigo）
  - 悬停效果：上浮 + 阴影加深 + 半透明叠层显示书名/作者/简介
  - 6 本示例书籍，含完整读书笔记
- **数据模型扩展：**
  - PostMeta 新增字段：stage, topic, noteType, author, coverColor
  - content.ts 适配读取新 frontmatter 字段
  - site.ts 新增 gardenTopics, gardenStages, gardenNoteTypes 配置
  - 分类标题更新为中文（格物致知、读书时光）
- **动画系统扩展：**
  - 新增 animate-fade-in 动画（页面级淡入）
  - 保留原有 animate-fade-in-up（卡片级错落进入）

## 接下来

### Phase 3 剩余：
1. **部署到 Vercel**（连接 GitHub + 配置自定义域名）
2. MDX 支持（替换手写 Markdown 渲染器）
3. 代码高亮（rehype-pretty-code 或 shiki）
4. 目录组件（Table of Contents）
5. "关于我"页面
6. RSS 订阅
7. 添加真实内容（替换示例文章）

## 已知问题

- Markdown 渲染器是手写正则，功能有限（列表嵌套/表格等不支持）→ 后续升级为 MDX
- 中文宋体字体依赖系统字体，未做 web font 加载
- 首页打字机效果 SSR 时先闪完整文本再开始动画（已有 fallback 但不完美）
- BookCard 的 coverImage 模式（外部图片）需要配置 next.config.ts 的 remotePatterns

## 文件结构速览

```
src/app/page.tsx              → 首页（Hero + Typewriter + 精选文章）
src/app/[category]/[slug]/    → 文章详情页
src/app/thinking/page.tsx     → 格物致知（Garden 三维筛选 + 卡片网格）
src/app/reading/page.tsx      → 读书时光（书架 Grid + BookCard）
src/app/life/page.tsx         → 生活记录
src/components/ui/            → Container, PageHeader, PostCard, Typewriter,
                                StageIndicator, GardenGrid, BookCard
src/components/layout/        → Navbar, Footer
src/config/site.ts            → 站名、导航、分类、花园筛选配置
src/lib/content.ts            → Markdown 文件读取解析（支持扩展 frontmatter）
src/app/globals.css           → 设计令牌 + 暗色模式 + 动画 + 文章排版
content/{reading,thinking,life}/  → Markdown 文章源文件
```
