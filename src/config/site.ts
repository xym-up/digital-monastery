/**
 * 站点全局配置 - 所有站点级别的常量集中管理
 * 后续 vibe coding 时只需改这个文件即可更新全站信息
 */

export const siteConfig = {
  name: "Digital Monastery",
  description: "在此，重构内心秩序。",
  url: "https://digital-monastery.dev", // 部署后替换
  locale: "zh-CN",
  author: {
    name: "领航员",
    email: "", // 填入你的邮箱
    bio: "热爱思考与技术，正在进行内心整合，致力于有意义创作的大学生。",
  },
  links: {
    github: "", // 填入你的 GitHub
    twitter: "", // 填入你的 Twitter/X
  },
} as const;

/** 导航配置 - 统一管理所有路由和导航项 */
export const navConfig = {
  mainNav: [
    { title: "Reading", href: "/reading", description: "读书时光" },
    { title: "Thinking", href: "/thinking", description: "格物致知" },
    { title: "Life", href: "/life", description: "生活记录" },
  ],
} as const;

/** 内容分类配置 */
export const categoryConfig = {
  reading: {
    title: "读书时光",
    description: "The quiet accumulation of other minds.",
    slug: "reading",
  },
  thinking: {
    title: "格物致知",
    description: "A collection of thoughts, philosophy, and knowledge cultivation.",
    slug: "thinking",
  },
  life: {
    title: "Life",
    description: "生活记录与日常 — 找到属于自己的节奏",
    slug: "life",
  },
} as const;

export type Category = keyof typeof categoryConfig;

/** 格物致知 - 主题标签配置（显示名 + 过滤值） */
export const gardenTopics = [
  { label: "All", value: "all" },
  { label: "Philosophy", value: "philosophy" },
  { label: "Psychology", value: "psychology" },
  { label: "Literature", value: "literature" },
  { label: "Tech", value: "tech" },
  { label: "Nature", value: "nature" },
  { label: "Society", value: "society" },
  { label: "Art", value: "art" },
] as const;

/** 格物致知 - 笔记成长阶段 */
export const gardenStages = [
  { label: "All", value: "all" },
  { label: "Seedling", value: "seedling" },
  { label: "Budding", value: "budding" },
  { label: "Evergreen", value: "evergreen" },
] as const;

/** 格物致知 - 笔记类型 */
export const gardenNoteTypes = [
  { label: "All", value: "all" },
  { label: "Essays", value: "essays" },
  { label: "Notes", value: "notes" },
  { label: "Patterns", value: "patterns" },
] as const;
