# IMPLEMENTATION_PLAN.md — 实施计划

> 逐步构建序列。每次只执行一个步骤，不跳步。

## Phase 1：基础设施（已完成 ✅）

- [x] 1.1 初始化 Next.js 16 项目 + TypeScript + Tailwind CSS 4
- [x] 1.2 安装依赖（lucide-react, next-themes, gray-matter, clsx, tailwind-merge）
- [x] 1.3 创建文件夹结构（src/app, components, lib, hooks, types, config）
- [x] 1.4 配置 Tailwind + CSS Variables 设计令牌（@theme 指令）
- [x] 1.5 创建全局 Layout（Merriweather + Inter 字体、Providers、Navbar、Footer）
- [x] 1.6 实现亮/暗模式切换（next-themes + useMounted 防 hydration）
- [x] 1.7 实现 Markdown 内容解析系统（content.ts + gray-matter）
- [x] 1.8 创建基础 UI 组件（Container, PageHeader, PostCard）
- [x] 1.9 创建分类页面（/reading, /thinking, /life）
- [x] 1.10 创建文章详情页（/[category]/[slug]）
- [x] 1.11 SEO 基础（robots.ts, sitemap.ts, OpenGraph metadata）

## Phase 2：设计系统升级（已完成 ✅）

- [x] 2.1 更新 CSS Variables 为修道院暖色调色板（米色背景 #F7F5EB、靛青强调色 #5c6bc0）
- [x] 2.2 更新全局排版样式（.article-content：18px正文、1.8行高）
- [x] 2.3 升级首页 Hero 区域（个人介绍 + Typewriter 打字机效果 + 座右铭）
- [x] 2.4 升级首页精选内容区域（带淡入动画的最新文章卡片）
- [x] 2.5 升级 PostCard 组件（大尺寸 p-8/p-10 + hover:-translate-y-1 悬停上浮）
- [x] 2.6 升级分类列表页面布局（gap-8 间距 + animate-fade-in-up 错落进入）
- [x] 2.7 升级文章详情页排版（全局 .article-content CSS + 返回导航 ArrowLeft）
- [x] 2.8 升级 PageHeader 组件（更多留白 pt-28/pt-36 + 装饰线）
- [x] 2.9 站点配置更新（分类中文描述、作者信息）
- [x] 2.10 全站动画系统（@keyframes blink、fade-in-up、transition-smooth）
- [x] 2.11 项目文档体系搭建（PRD, APP_FLOW, TECH_STACK, FRONTEND_GUIDELINES, IMPLEMENTATION_PLAN, progress.md, lessons.md）

## Phase 3：部署与内容扩展（当前阶段 🔵）

- [x] 3.1 部署到 Vercel（GitHub 已连接，digital-monastery.vercel.app 已上线，自定义域名 xymspace.xyz DNS 待生效）
- [ ] 3.2 MDX 支持（替换手写 Markdown 渲染器）
- [ ] 3.3 代码高亮（rehype-pretty-code 或 shiki）
- [ ] 3.4 目录组件（Table of Contents）
- [x] 3.5 "关于我"页面
- [ ] 3.6 RSS 订阅
- [x] 3.7 添加真实内容（替换示例文章）
- [x] 3.8 格物致知页面重构（Garden 风格 + 三维筛选系统）
- [x] 3.9 读书时光页面重构（书架 Grid + BookCard）
- [x] 3.10 数据模型扩展（PostMeta 新增 stage/topic/noteType/author/coverColor）
- [x] 3.11 新组件创建（StageIndicator, GardenGrid, BookCard, BookPlaceholder）
- [x] 3.12 示例内容丰富（thinking 7篇 + reading 6篇）
- [x] 3.13 四分类重构（三分类 → Thinking/Craft/Muse/Life）
  - 类型系统：ContentCategory、CraftTopic、CraftNoteType 等
  - 配置：navConfig(4项)、categoryConfig(4项)、craftTopics、craftNoteTypes
  - 页面：/craft(新建)、/reading→/muse(迁移)、/about(新建)
  - 内容迁移：content/reading/ → content/muse/、tech 文章 → content/craft/
  - GardenGrid 泛化：Thinking/Craft 共用
  - 导航栏、首页、Footer、sitemap 全部适配
  - 全部文档同步更新

## Phase 4：高级特性（远期）

- [ ] 4.1 文章搜索
- [ ] 4.2 阅读进度条
- [ ] 4.3 双向链接 / 知识图谱
- [ ] 4.4 评论系统
- [ ] 4.5 Newsletter 订阅
- [ ] 4.6 性能优化（图片、字体、懒加载）
