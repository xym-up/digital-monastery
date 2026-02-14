---
title: "我的 2026 开发工作流"
description: "从编辑器到部署，一套经过打磨的个人开发工作流。工具不在多，在于顺手。"
date: "2026-02-14"
category: "craft"
tags: ["工作流", "工具", "开发环境"]
published: true
topic: "tools"
noteType: "workflows"
stage: "budding"
---

# 我的 2026 开发工作流

> 工具不在多，在于顺手。

每隔一段时间我会审视自己的工作流，砍掉不再需要的，打磨用得最多的。这是 2026 年初的快照。

## 编辑器：VS Code + Copilot

核心武器。关键配置：

- **主题** — Vitesse Dark（眼睛友好，对比度适中）
- **字体** — JetBrains Mono（连字符 + 清晰度）
- **Copilot** — 不是用来写代码的，是用来**对话式编程**的
- **快捷键** — 自定义了 30+ 个高频操作，手不离键盘

## 终端：Windows Terminal + PowerShell 7

iTerm 之于 macOS，Windows Terminal 之于 Windows。配合 Oh My Posh 主题和 PSReadLine 补全，体验不输。

## 框架选择

| 用途 | 工具 | 为什么 |
|------|------|--------|
| 个人项目 | Next.js | App Router + RSC，全栈一把梭 |
| 快速原型 | Vite + React | 零配置，热更新飞快 |
| 样式 | Tailwind CSS 4 | 不写 CSS 文件，思维不切换 |
| 部署 | Vercel | git push 即部署，零运维 |

## AI 辅助层

2026 年不用 AI 辅助编程，就像 2016 年不用 Google 一样。

- **Copilot** — 行级补全 + 对话驱动开发
- **Claude** — 架构讨论、代码审查、复杂逻辑推演
- **Cursor** — 大范围重构时的利器

关键心得：**AI 是副驾驶，不是司机**。你必须知道目的地在哪，否则再好的导航也只是带你兜圈子。

## 版本控制习惯

- 小提交、勤提交
- Commit message 用中文（这是中文博客项目）
- 分支策略：main + feature branches，不搞复杂
- 不 push 没测过的代码

## 一个原则

> 如果一个工具需要你花超过 30 分钟配置，它可能不适合你。

好工具应该像好椅子——坐下去就舒服，不需要说明书。
