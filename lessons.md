# lessons.md — 经验教训

> 每次遇到问题并解决后，记录在此。AI 每次会话开始时应审查此文件。

## 2026-02-13

### 8. 客户端与服务端组件的分离策略
- 筛选/交互逻辑（useState, useRef）必须在客户端组件中
- 数据获取（文件读取）必须在服务端组件中
- 解决方案：服务端页面获取数据 → 通过 props 传递给客户端子组件
- 例：`thinking/page.tsx`(server) 获取文章 → `GardenGrid`(client) 处理筛选

### 9. Tailwind 动态类名不能拼接
- 不要用 `bg-${color}-200` 这样的模板字符串，Tailwind 无法检测
- 解决方案：用完整的类名字符串映射表（如 BookCard 的 colorMap 对象）
- 每个可能的类名必须完整出现在代码中，让 Tailwind 能扫描到

### 10. 扩展 PostMeta 而非创建独立类型
- 为 Garden 和 Reading 新增的字段（stage, topic, noteType, author, coverColor）全部加在 PostMeta 上作为可选字段
- 好处：content.ts 的读取函数不用改签名，复用性强
- 风险：PostMeta 变臃肿。后续如果字段太多，考虑用 discriminated union

### 11. CSS 占位书封优于外部图片
- 初始阶段用 CSS 渐变 + 大首字母作为书封占位，比 Unsplash 外链更可靠
- 避免了 next.config.ts 配置 remotePatterns 的额外复杂度
- 视觉效果也更统一、更"修道院"

## 2026-02-12

### 1. Tailwind CSS 4 的 CSS Variables 语法
- Tailwind v4 使用 `@theme` 指令定义设计令牌，而非传统的 `tailwind.config.ts` 中的 `extend.colors`
- 颜色在 globals.css 的 `@theme` 块中定义为 CSS Variables
- 暗色模式覆盖在 `@layer base` 的 `.dark` 选择器中

### 2. Next.js 15+ 的 params 是 Promise
- 动态路由的 `params` 参数在 Next.js 15+ 中是 `Promise` 类型
- 必须用 `await params` 解构，而非直接访问 `params.slug`

### 3. next-themes 的 hydration 问题
- 主题状态在 SSR 时不可用，需要 `useMounted()` 钩子防止 hydration 不匹配
- 切换按钮只在客户端挂载后渲染

### 4. 保持简单
- 不要一次性引入太多新依赖
- 先用简单方案（如手写 Markdown 渲染），后续再升级
- 每次只改一个东西，确认它工作后再改下一个

### 5. 文章正文排版用全局 CSS 而非 Tailwind 类
- `dangerouslySetInnerHTML` 渲染的 HTML 字符串无法加 Tailwind 类名
- 解决方案：在 globals.css 中写 `.article-content h1/h2/p/blockquote` 等选择器统一管理排版
- 这样 Markdown 渲染器只需输出纯 `<h1><p>` 等标签，样式由 CSS 负责

### 6. 动画用 CSS @keyframes + 工具类
- 自定义动画在 globals.css 里用 `@keyframes` 定义，然后创建 `.animate-xxx` 工具类
- 比 Tailwind 内置的 `animate-*` 更灵活，可控制 `forwards`、`opacity: 0` 初始态等
- `animationDelay` 通过内联 `style` 传入（这是唯一允许内联样式的场景）

### 7. 文档必须与代码同步更新
- 每次功能完成后，必须同步更新：progress.md、IMPLEMENTATION_PLAN.md、lessons.md
- 文档滞后会导致下次会话的 AI 拿到错误上下文，做出错误决策
- copilot-instructions.md 是 AI 自动读取的操作手册，修改它等于修改 AI 的行为规则
