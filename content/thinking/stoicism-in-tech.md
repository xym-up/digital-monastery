---
title: "现代科技中的斯多葛主义"
description: "为什么 try-catch 本质上是一种预见灾难的练习。用优雅的方式处理错误，就是斯多葛在代码中的实践。"
date: "2026-02-10"
category: "thinking"
tags: ["哲学", "技术", "斯多葛"]
published: true
topic: "philosophy"
noteType: "essays"
stage: "evergreen"
---

# 现代科技中的斯多葛主义

> "You have power over your mind — not outside events. Realize this, and you will find strength." — Marcus Aurelius

## Try-Catch 与 Premeditatio Malorum

斯多葛哲学中有一个核心练习叫做 **Premeditatio Malorum**（预想最坏的情况）。有趣的是，每一个程序员每天都在做这件事——我们把它叫做 `try-catch`。

当我们写下 `try { ... } catch (error) { ... }` 的时候，我们本质上是在说："我知道事情可能出错，我已经为此做好了准备。"

这不是悲观主义。这是**现实主义的优雅**。

## 不可变性与接受

函数式编程推崇 **immutability**（不可变性）。数据一旦创建，不再改变。如果你需要变化，创建一个新的。

斯多葛学派说的也是同样的事情：不要试图改变你无法控制的事物，改变你对它的回应。

```
const wisdom = Object.freeze({
  control: "your response",
  accept: "everything else"
});
```

每次代码出错时，想想 Epictetus 的话：不是 bug 让你痛苦，是你对 bug 的判断让你痛苦。
