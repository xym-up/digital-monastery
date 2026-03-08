---
title: "ROS2 入门手记 — 从 turtlesim 到 Topic 通信"
description: "第一次跑通 ROS2 Tutorial 的完整记录：环境搭建、turtlesim 跑通、Publisher/Subscriber 概念梳理，以及踩过的坑。"
date: "2026-03-01"
category: "craft"
tags: ["ROS2", "机器人", "学习笔记"]
published: true
topic: "hardware"
noteType: "notes"
stage: "seedling"
---

# ROS2 入门手记 — 从 turtlesim 到 Topic 通信

> 学 ROS2 的第一步，不是理解架构图，是先让那只小乌龟动起来。

## 为什么要学 ROS2

作为海洋工程专业的学生，我对水下机器人方向很感兴趣。翻了几篇实验室的论文和开源项目后发现，ROS（Robot Operating System）几乎是机器人软件开发的事实标准。ROS2 是它的下一代版本，改进了实时性和安全性。不管以后做水下 AUV 还是机械臂控制，ROS2 都是绕不过去的基础设施。

所以我决定从官方 Tutorial 开始，老老实实走一遍。

## 环境搭建：WSL2 + Ubuntu 22.04

我的主力机是 Windows，不想搞双系统，所以选了 WSL2 跑 Ubuntu 22.04。安装 ROS2 Humble 的过程基本跟着官方文档走，但还是踩了几个坑：

**坑一：locale 设置。** ROS2 安装脚本要求 UTF-8 locale，我一开始忽略了这步，后面 `colcon build` 的时候报了一堆编码错误。解决方法很简单，按文档执行 `sudo locale-gen en_US en_US.UTF-8` 就行。

**坑二：GPG key 导入失败。** 添加 ROS2 apt 源的时候，`curl` 拿 GPG key 总是超时。最后是挂了代理才下载成功的。如果你在国内，这步大概率要折腾一下网络。

**坑三：source 环境变量！** 这是最经典的坑。安装完 ROS2 后直接敲 `ros2`，终端告诉你"command not found"。原因是没有 source ROS2 的 setup 脚本。正确做法是在 `~/.bashrc` 末尾加上：

```
source /opt/ros/humble/setup.bash
```

然后 `source ~/.bashrc` 或者重新开一个终端。这个坑我反复踩了三次才长记性——每次开新终端都忘，后来干脆写进 bashrc 了。

## turtlesim：第一次心跳

turtlesim 是 ROS2 官方自带的一个小乌龟模拟器，用来验证环境和理解基本概念。

```
ros2 run turtlesim turtlesim_node
```

执行后弹出一个蓝色窗口，中间一只小乌龟。然后另开一个终端：

```
ros2 run turtlesim turtle_teleop_key
```

用方向键就能控制乌龟移动。看到乌龟在窗口里画出轨迹的那一刻，虽然只是个最简单的 demo，但确实有种"它活了"的兴奋感。

## Topic 通信：我的理解

ROS2 的核心通信机制之一是 Topic。跑完 turtlesim 之后，我用 `ros2 topic list` 看了一下当前活跃的 topic，发现有 `/turtle1/cmd_vel`（速度指令）和 `/turtle1/pose`（位姿信息）等。

我对 Topic 的理解是：**它就像一个消息广播频道**。

Publisher（发布者）往某个频道里广播消息，Subscriber（订阅者）调到这个频道就能收到。发布者不关心谁在听，订阅者也不关心谁在说——它们之间是完全解耦的。这种设计让模块之间的依赖关系非常松散，加一个新传感器只需要让它往对应 topic 发数据就行，不用改其他模块的代码。

`turtle_teleop_key` 节点就是一个 Publisher，它把键盘输入转化为速度指令，发布到 `/turtle1/cmd_vel`。`turtlesim_node` 是一个 Subscriber，它订阅 `/turtle1/cmd_vel`，收到指令后更新乌龟的位置。

我跟着教程写了一个简单的 Python Publisher，每秒发布一次速度指令让乌龟自动画圆。代码不长，大概 30 行，核心就是创建节点、创建 publisher、在 timer 回调里发布 `Twist` 消息。第一次运行看到乌龟自己转圈的时候，有种"我在控制一个机器人"的奇妙感觉——虽然它只是个 2D 模拟器里的像素乌龟。

## 还不太懂的地方

说实话，ROS2 的概念我只理解了皮毛：

- **Service 和 Action** 的使用场景我还没搞清楚，知道它们和 Topic 不同是请求-响应模式，但具体什么时候用哪个，还需要更多实践。
- **Launch 文件的写法**，教程看了但没自己动手写过，感觉真实项目中节点多了以后这个很重要。
- **QoS（Quality of Service）** 的配置，知道它影响消息的可靠性和实时性，但还没在实际场景中调过。

这些后面慢慢补。现在最重要的是先把基础概念用起来，别在理论层面打转。

## 下一步

下一步想试试用 ROS2 控制一个简单的仿真机械臂。我看到 MoveIt2 这个运动规划框架经常被提到，打算先在 Gazebo 仿真环境里跑一个简单的机械臂 demo，然后试着用 Topic 发送关节角度指令。

从乌龟到机械臂，希望不会跨度太大。

