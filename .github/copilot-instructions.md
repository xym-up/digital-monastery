# AI Coding Rules — Digital Monastery

> 此文件是 AI 编码助手在本项目中的操作手册。
> 每次会话开始时自动参考此文件。

## 项目概述

Digital Monastery 是一个个人博客，使用 Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 构建。
风格：修道院 / 数字花园 / 极简书房。
内容通过 Markdown 文件管理，无后端、无数据库。

## 必须遵循的规则

### 技术约束
- **只使用 TECH_STACK.md 中列出的依赖**，不得擅自引入新包
- 所有组件放在 `src/components/` 下，按功能分子目录（`ui/`, `layout/`）
- 所有页面放在 `src/app/` 下，遵循 App Router 约定
- 所有工具函数放在 `src/lib/`
- 所有类型定义放在 `src/types/`
- 所有配置放在 `src/config/`
- 内容文件放在 `content/[category]/`

### 样式约束
- **永远不用内联样式**，只用 Tailwind CSS
- 颜色必须使用 CSS Variables（`var(--color-*)`），不硬编码色值
- 所有组件样式必须符合 FRONTEND_GUIDELINES.md
- 间距使用 4px 倍数体系
- Mobile-first 响应式设计

### 代码风格
- 使用 TypeScript，不允许 `any` 类型
- 组件使用函数式声明 + React Hooks
- Props 接口必须显式声明
- 导出的工具函数必须有 JSDoc 注释
- 文件命名：组件用 PascalCase，工具用 kebab-case

### 工作流约束
- 每次完成一个功能后，更新 progress.md
- 每次修复一个问题后，更新 lessons.md
- 不跳步：遵循 IMPLEMENTATION_PLAN.md 的顺序
- 修改前先理解现有代码，不要重写已工作的部分

## 文件结构

```
digital-monastery/
├── .github/
│   └── copilot-instructions.md   ← AI 操作手册（本文件）
├── content/                       ← Markdown 文章内容
│   ├── thinking/                  ← 格物致知（哲学/心理/方法论）
│   │   └── welcome.md
│   ├── craft/                     ← 造物记（技术/工具/工程）
│   │   └── architecture-nextjs.md
│   ├── muse/                      ← 感物（书/音乐/电影/美学）
│   │   └── first-book.md
│   └── life/                      ← 浮生（成长日志/日常）
│       └── daily-rhythm.md
├── public/                        ← 静态资源（图片等）
├── src/
│   ├── app/                       ← 页面路由（App Router）
│   │   ├── globals.css            ← 全局样式 + 设计令牌 + 动画
│   │   ├── layout.tsx             ← 根布局（字体、Providers、Navbar、Footer）
│   │   ├── page.tsx               ← 首页（Hero + 打字机 + 精选文章）
│   │   ├── not-found.tsx          ← 404 页面
│   │   ├── providers.tsx          ← ThemeProvider 封装
│   │   ├── robots.ts              ← SEO robots.txt
│   │   ├── sitemap.ts             ← SEO sitemap.xml
│   │   ├── thinking/page.tsx      ← 格物致知（Garden 三维筛选）
│   │   ├── craft/page.tsx         ← 造物记（Garden 三维筛选）
│   │   ├── muse/page.tsx          ← 感物（BookCard 书架展示）
│   │   ├── life/page.tsx          ← 浮生
│   │   ├── about/page.tsx         ← 关于页面
│   │   └── [category]/[slug]/page.tsx  ← 文章详情页（动态路由）
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         ← 顶部导航栏（固定 + 毛玻璃）
│   │   │   └── Footer.tsx         ← 页脚
│   │   └── ui/
│   │       ├── index.ts           ← 组件统一导出
│   │       ├── Container.tsx      ← 内容宽度容器
│   │       ├── PageHeader.tsx     ← 页面标题组件
│   │       ├── PostCard.tsx       ← 文章卡片（大尺寸 + 悬停动画）
│   │       ├── Typewriter.tsx     ← 通用卡片网格（Thinking/Craft 共用 + 三维筛选器）
│   │       ├── BookCard.tsx       ← 感物阶段指示器（Seedling/Budding/Evergreen）
│   │       ├── GardenGrid.tsx     ← 格物致知卡片网格（客户端组件 + 三维筛选器）
│   │       ├── BookCard.tsx       ← 读书时光书封卡片（CSS 渐变占位 + 悬停叠层）
│   │       └── BookPlaceholder    ← 装饰性"待读"空位（BookCard.tsx 中导出）
│   ├── config/
│   │   └── site.ts               ← 站点配置 + 导航(4项) + 分类(4项) + 花园/造物记筛选配置
│   ├── hooks/
│   │   ├── use-mounted.ts         ← SSR hydration 防护
│   │   └── use-scroll.ts          ← 滚动状态监听
│   ├── lib/
│   │   ├── content.ts             ← Markdown 文件读取与解析
│   │   └── utils.ts               ← 工具函数（cn, formatDate, estimateReadingTime）
│   └── types/
│       └── index.ts               ← 全局 TypeScript 类型定义
├── PRD.md                         ← 产品需求文档
├── APP_FLOW.md                    ← 用户流程文档
├── TECH_STACK.md                  ← 技术栈锁定
├── FRONTEND_GUIDELINES.md         ← 设计系统规范
├── IMPLEMENTATION_PLAN.md         ← 分阶段构建计划
├── progress.md                    ← 进度追踪（每次会话必读）
├── lessons.md                     ← 经验教训（每次会话必读）
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 参考文档

- PRD.md — 产品需求
- APP_FLOW.md — 用户流程
- TECH_STACK.md — 技术栈
- FRONTEND_GUIDELINES.md — 设计系统
- IMPLEMENTATION_PLAN.md — 构建顺序
- progress.md — 当前进度（**每次会话必读**）
- lessons.md — 经验教训（**每次会话必读**）
