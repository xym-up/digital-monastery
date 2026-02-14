/**
 * 全局类型定义
 * 集中管理所有 TypeScript 类型，方便后续扩展
 */

/** 数字花园 - 成长阶段 */
export type GardenStage = "seedling" | "budding" | "evergreen";

/** 数字花园 - 主题分类 */
export type GardenTopic =
  | "philosophy"
  | "psychology"
  | "literature"
  | "tech"
  | "nature"
  | "society"
  | "art";

/** 数字花园 - 笔记类型 */
export type GardenNoteType = "essays" | "notes" | "patterns";

/** 博客文章的 Frontmatter 元数据 */
export interface PostMeta {
  title: string;
  description: string;
  date: string; // ISO 8601 format
  updatedAt?: string;
  category: "reading" | "thinking" | "life";
  tags?: string[];
  published: boolean;
  coverImage?: string;
  readingTime?: number; // 分钟

  // 格物致知（Garden）专用字段
  stage?: GardenStage;
  topic?: GardenTopic;
  noteType?: GardenNoteType;

  // 读书时光（Reading）专用字段
  author?: string;
  coverColor?: string; // Tailwind 色系名，如 "stone", "amber", "emerald"
}

/** 完整的博客文章（含正文） */
export interface Post extends PostMeta {
  slug: string;
  content: string;
}

/** 导航项 */
export interface NavItem {
  title: string;
  href: string;
  description?: string;
  disabled?: boolean;
  external?: boolean;
}

/** 站点 SEO 配置 */
export interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
}
