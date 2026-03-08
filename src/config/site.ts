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
    name: "肖一鸣",
    email: "", // 填入你的邮箱
    bio: "浙江大学海洋工程与技术专业大二学生。对水下机器人、流体智能和具身智能方向感兴趣，正在从零开始积累科研经验。",
  },
  links: {
    github: "", // 填入你的 GitHub
    twitter: "", // 填入你的 Twitter/X
  },
} as const;

/** 导航配置 - 统一管理所有路由和导航项 */
export const navConfig = {
  mainNav: [
    { title: "Thinking", href: "/thinking", description: "格物致知" },
    { title: "Craft", href: "/craft", description: "造物记" },
    { title: "Muse", href: "/muse", description: "感物" },
    { title: "Life", href: "/life", description: "浮生" },
  ],
} as const;

/** 内容分类配置 */
export const categoryConfig = {
  thinking: {
    title: "格物致知",
    description: "A collection of thoughts, philosophy, and knowledge cultivation.",
    slug: "thinking",
  },
  craft: {
    title: "造物记",
    description: "Technical explorations, tools, and creative engineering.",
    slug: "craft",
  },
  muse: {
    title: "感物",
    description: "Books, music, film, art — sensory and aesthetic encounters.",
    slug: "muse",
  },
  life: {
    title: "浮生",
    description: "个人编年史 — 成长日志、碎碎念、日常记录",
    slug: "life",
  },
} as const;

export type Category = keyof typeof categoryConfig;

/** 格物致知 - 主题标签配置（显示名 + 过滤值） */
export const gardenTopics = [
  { label: "All", value: "all" },
  { label: "Philosophy", value: "philosophy" },
  { label: "Psychology", value: "psychology" },
  { label: "Methodology", value: "methodology" },
  { label: "Nature", value: "nature" },
  { label: "Society", value: "society" },
  { label: "Art", value: "art" },
] as const;

/** 格物致知 - 笔记成长阶段（Thinking + Craft 共用） */
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

/** 造物记 - 主题标签配置 */
export const craftTopics = [
  { label: "All", value: "all" },
  { label: "AI", value: "ai" },
  { label: "Software", value: "software" },
  { label: "Hardware", value: "hardware" },
  { label: "Web", value: "web" },
  { label: "Tools", value: "tools" },
  { label: "CS", value: "cs" },
] as const;

/** 造物记 - 笔记类型 */
export const craftNoteTypes = [
  { label: "All", value: "all" },
  { label: "Notes", value: "notes" },
  { label: "Resources", value: "resources" },
  { label: "Projects", value: "projects" },
  { label: "Workflows", value: "workflows" },
  { label: "Tutorials", value: "tutorials" },
] as const;
