# TECH_STACK.md — 技术栈

> 锁定的依赖版本和工具选择。AI 不得擅自引入此文档未列出的依赖。

## 1. 框架与运行时

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16.1.5 | 全栈 React 框架（App Router） |
| React | 19.2.3 | UI 库 |
| TypeScript | ^5 | 类型安全 |
| Node.js | >=18 | 运行时 |

## 2. 样式

| 技术 | 版本 | 用途 |
|------|------|------|
| Tailwind CSS | ^4 | 原子化 CSS |
| @tailwindcss/postcss | ^4 | PostCSS 插件 |
| tailwind-merge | ^3.4.0 | 合并冲突的 Tailwind 类名 |
| clsx | ^2.1.1 | 条件类名拼接 |

## 3. 内容处理

| 技术 | 版本 | 用途 |
|------|------|------|
| gray-matter | ^4.0.3 | 解析 Markdown frontmatter |

> **未来升级路径：** 用 `next-mdx-remote` 或 `@next/mdx` 替换手写的 Markdown 渲染器，获得组件嵌入能力。

## 4. UI 工具

| 技术 | 版本 | 用途 |
|------|------|------|
| lucide-react | ^0.563.0 | 图标库 |
| next-themes | ^0.4.6 | 亮/暗模式管理 |

## 5. 开发工具

| 技术 | 用途 |
|------|------|
| ESLint + eslint-config-next | 代码质量检查 |
| PostCSS | CSS 处理管道 |

## 6. 部署

| 平台 | 用途 |
|------|------|
| Vercel（计划中） | 静态站点托管 + 自动部署 |
| GitHub | 版本控制 |

## 7. 禁止引入的技术

- ❌ Three.js / R3F（不是现在）
- ❌ 任何数据库
- ❌ 任何后端 API 框架
- ❌ 任何认证库
- ❌ 未经确认的新 npm 包
