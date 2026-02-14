---
title: "Next.js 的建筑学"
description: "通过粗野主义建筑的视角探索 Server Components：裸露的结构、原始的材料、功能即美学。"
date: "2026-02-08"
category: "craft"
tags: ["技术", "架构", "Next.js"]
published: true
topic: "web"
noteType: "notes"
stage: "budding"
---

# Next.js 的建筑学

> 建筑是凝固的音乐。代码是流动的建筑。

## Server Components：粗野主义的回归

React Server Components 让我想到了粗野主义建筑（Brutalism）。它不包装，不修饰。你看到的就是结构本身。

- 服务端组件 = 承重墙：不需要 JavaScript，纯粹的结构
- 客户端组件 = 可活动的窗户：需要交互时才引入
- 流式渲染 = 渐进式的揭幕：建筑体量逐层展现

## 文件系统路由 = 城市规划

App Router 的文件系统路由就像城市规划：

```
app/
├── page.tsx          → 城市中心广场
├── reading/          → 图书馆区
├── thinking/         → 学术区
└── [category]/[slug] → 任意一条小巷
```

每个文件夹都是一个街区，每个 `page.tsx` 都是一扇门。好的架构和好的城市一样——你总能找到回家的路。
