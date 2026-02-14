# progress.md — 项目进度追踪

> 每次完成功能后更新此文件。新会话开始时先读此文件。

## 最近更新：2026-02-14（四分类重构扫尾 + 文档全面同步 + 构建验证通过）

## 当前状态：Phase 2 完成 + Phase 3 部分完成 + ✅ 四分类重构完成 + About 页面完成 + Vercel 已部署

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

### Vercel 部署 ✅（2026-02-14）
- GitHub 仓库：https://github.com/xym-up/digital-monastery
- Vercel 自动部署地址：https://digital-monastery.vercel.app
- 自定义域名 xymspace.xyz 已在 Vercel 配置，DNS 记录已在 Porkbun 添加（A 记录 + CNAME），等待生效
- 每次 git push 到 main 分支，Vercel 自动重新构建部署

### 四分类数据层重构 ✅（2026-02-14）
- **分类体系从三分类变为四分类：**
  - Thinking（格物致知）— 纯理性认知：哲学、心理学、方法论、世界观
  - Craft（造物记）— 技术实操：AI、软件、硬件、工具链、CS
  - Muse（感物）— 文艺美学：书、音乐、电影、美术、语录
  - Life（浮生）— 个人编年史：成长日志、碎碎念、日常记录
- **类型系统重构（src/types/index.ts）：**
  - 新增 `ContentCategory` 类型（"thinking" | "craft" | "muse" | "life"）
  - 从 `GardenTopic` 移除 "literature" 和 "tech"，新增 "methodology"
  - 新增 `CraftTopic`（ai/software/hardware/web/tools/cs）
  - 新增 `CraftNoteType`（notes/resources/projects/workflows/tutorials）
  - 新增联合类型 `Topic = GardenTopic | CraftTopic`、`NoteType = GardenNoteType | CraftNoteType`
  - `PostMeta.category` 改用 `ContentCategory`
  - `PostMeta.topic` 改用 `Topic`，`PostMeta.noteType` 改用 `NoteType`
- **站点配置重构（src/config/site.ts）：**
  - `navConfig` 更新为四项导航（Thinking/Craft/Muse/Life）
  - `categoryConfig` 移除 reading、新增 craft 和 muse
  - `gardenTopics` 移除 Literature/Tech，新增 Methodology
  - 新增 `craftTopics`（AI/Software/Hardware/Web/Tools/CS）
  - 新增 `craftNoteTypes`（Notes/Resources/Projects/Workflows/Tutorials）
  - `gardenStages` 保持不变（Thinking 和 Craft 共用）
- **内容读取更新（src/lib/content.ts）：**
  - `getAllPosts` 遍历四个分类目录
  - 注释更新为四分类结构
- **内容文件迁移：**
  - content/reading/ 全部 6 篇文章 → content/muse/（frontmatter category 改为 "muse"）
  - content/thinking/architecture-nextjs.md → content/craft/（category → "craft"，topic → "web"，noteType → "notes"）
  - content/reading/ 目录已移除
  - content/muse/ 现有 7 篇文章（6 篇原 reading + 1 篇 alchemist-fragments）
  - content/craft/ 现有 2 篇文章（1 篇 dev-workflow + 1 篇 architecture-nextjs）

### 四分类页面/组件层重构 ✅（2026-02-14）
- **GardenGrid 泛化：**
  - 组件不再硬编码 thinking 的筛选配置和链接路径
  - 新增 props：`linkPrefix`、`topics`、`stages`、`noteTypes`、`emptyMessage`
  - Thinking 和 Craft 两个页面共用同一个 GardenGrid 组件
- **创建 /craft 列表页（src/app/craft/page.tsx）：**
  - 使用 GardenGrid 组件，传入 craftTopics/gardenStages/craftNoteTypes
  - 标题"造物记"，链接前缀 /craft
- **更新 /thinking 页面：**
  - 适配 GardenGrid 新接口，传入 gardenTopics/gardenStages/gardenNoteTypes
  - 链接前缀 /thinking
- **Reading → Muse 页面迁移：**
  - src/app/reading/page.tsx → src/app/muse/page.tsx，标题改为"感物"
  - BookCard 组件链接从 /reading/ 改为 /muse/
  - 删除 src/app/reading/ 目录
- **动态路由更新：**
  - [category]/[slug]/page.tsx 的 validCategories 更新为 ["thinking", "craft", "muse", "life"]
- **验证：** `npx next build` 通过，四个分类路由全部正确生成

### 四分类重构扫尾 + 文档同步 ✅（2026-02-14）
- **Frontmatter 审查：**
  - content/thinking/ — 7 篇全部合规，topic 均为有效值（无 tech/literature 残留）
  - content/muse/ — 7 篇 category 均为 "muse" ✅
  - content/craft/ — 2 篇使用 topic/noteType/stage 字段，值为 craft 类型 ✅
- **文档全面同步（6 个文件）：**
  - progress.md — 标注四分类重构完成
  - lessons.md — 新增 #14（分阶段重构）、#15（组件泛化）
  - IMPLEMENTATION_PLAN.md — 新增 3.13（四分类重构）已勾选；3.5 About 已勾选
  - copilot-instructions.md — 文件结构更新（reading→muse/craft/about）
  - PRD.md — 3.2 节更新为四分类表格；新增 About 页面
  - APP_FLOW.md — 路由表更新为 8 条；导航栏更新
- **最终构建验证：** `npx next build` 通过，29 页面全部正确生成，无类型错误

## 接下来

### Phase 3 剩余：
1. ~~部署到 Vercel~~ ✅（已完成，自定义域名待 DNS 生效）
2. MDX 支持（替换手写 Markdown 渲染器）
3. 代码高亮（rehype-pretty-code 或 shiki）
4. 目录组件（Table of Contents）
5. ~~"关于我"页面~~ ✅
6. RSS 订阅
7. 添加真实内容（替换示例文章）

## 已知问题

- Markdown 渲染器是手写正则，功能有限（列表嵌套/表格等不支持）→ 后续升级为 MDX
- 中文宋体字体依赖系统字体，未做 web font 加载
- 首页打字机效果 SSR 时先闪完整文本再开始动画（已有 fallback 但不完美）
- BookCard 的 coverImage 模式（外部图片）需要配置 next.config.ts 的 remotePatterns

## 文件结构速览

```
src/app/about/page.tsx        → 关于页面（article-content 排版）
src/app/page.tsx              → 首页（Hero + Typewriter + 精选文章）
src/app/[category]/[slug]/    → 文章详情页
src/app/thinking/page.tsx     → 格物致知（Garden 三维筛选 + 卡片网格）
src/app/craft/page.tsx        → 造物记（Garden 三维筛选 + 卡片网格，Craft 配置）
src/app/muse/page.tsx         → 感物（BookCard 书架展示）
src/app/life/page.tsx         → 浮生
src/components/ui/            → Container, PageHeader, PostCard, Typewriter,
                                StageIndicator, GardenGrid, BookCard
src/components/layout/        → Navbar, Footer
src/config/site.ts            → 站名、导航(4项)、分类(4项)、花园/造物记筛选配置
src/lib/content.ts            → Markdown 文件读取解析（遍历 4 个分类目录）
src/app/globals.css           → 设计令牌 + 暗色模式 + 动画 + 文章排版
content/{thinking,craft,muse,life}/  → Markdown 文章源文件（四分类）
```
