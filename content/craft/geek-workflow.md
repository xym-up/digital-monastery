---
title: "极客工作流 — 我的终端、编辑器与自动化哲学"
description: "一个大学生的开发环境配置哲学：少即是多，快即是好，自动化一切可以自动化的。"
date: "2026-01-22"
category: "craft"
tags: ["工作流", "工具", "效率"]
published: true
topic: "tools"
noteType: "workflows"
stage: "budding"
---

# 极客工作流 — 我的终端、编辑器与自动化哲学

> 「程序员最重要的工具不是语言，是环境。」

## 哲学先行

在展示我的配置之前，先说我的三条原则：

**第一：减少摩擦**。任何重复超过三次的操作都应该被自动化。打开项目、运行命令、格式化代码——这些事情不应该消耗你的认知带宽。

**第二：键盘优先**。鼠标每移动一次都是上下文切换。能用键盘完成的事情绝不用鼠标。这不是炫技，是效率。

**第三：可复现**。把配置写成文件（dotfiles），存到 Git 仓库。换一台电脑，克隆仓库、跑一个脚本，30 分钟内恢复全部环境。

## 终端：Windows Terminal + PowerShell 7

虽然很多人推荐 Mac 或 Linux 做开发，但我目前用的是 Windows。核心终端方案：

- **Windows Terminal**：微软自家的现代终端，支持多标签、GPU 加速渲染、自定义主题
- **PowerShell 7**：跨平台的 PowerShell，比自带的 5.1 好用太多
- **Oh My Posh**：终端美化，显示 Git 分支、Node 版本、执行时间等信息
- **PSReadLine**：智能补全、历史搜索、语法高亮

一条命令启动项目：我为每个常用项目配了 PowerShell 函数，输入 `monastery` 就能自动 cd 到项目目录、启动 dev server、打开 VS Code。

## 编辑器：VS Code

我尝试过 Neovim（太陡峭）、Cursor（太重）、Zed（生态还不够），最终还是回到了 VS Code。关键配置：

- **GitHub Copilot**：AI 辅助编程，结合 copilot-instructions.md 做项目级约束
- **Vim 键位**（VSCodeVim 扩展）：保留 Vim 的高效编辑方式，配合 VS Code 的 GUI 优势
- **自定义 snippets**：React 组件模板、TypeScript 工具函数模板、Markdown frontmatter 模板

## 自动化：Git Hooks + Scripts

我的每个项目都配了 Git hooks：

- **pre-commit**：运行 ESLint + Prettier，确保提交的代码风格一致
- **commit-msg**：检查 commit message 是否符合 Conventional Commits 规范

另外写了几个常用脚本：
- 批量重命名文件
- 从模板创建新博客文章（自动填充日期和 frontmatter）
- 部署前的一键检查（类型检查 + 构建测试）

## 一个重要的反思

工具配置是一个兔子洞。你可以花无限时间调整 Neovim 配色方案、比较不同终端模拟器的渲染性能、测试每一个 VS Code 扩展。

我给自己定了一条规则：**工具配置时间不超过使用时间的 10%**。如果你花了两小时配置编辑器、只用了二十分钟写代码，你的优先级就搞反了。

最好的工作流不是最花哨的工作流，而是你忘记了它的存在、只专注于工作内容的工作流。
