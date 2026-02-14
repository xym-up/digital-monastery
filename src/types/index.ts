/**
 * 全局类型定义
 * 集中管理所有 TypeScript 类型，方便后续扩展
 */

// ─── 四大分类 ───────────────────────────────────────────
/** 博客内容分类 */
export type ContentCategory = "thinking" | "craft" | "muse" | "life";

// ─── 格物致知（Thinking）─────────────────────────────────
/** 数字花园 - 成长阶段 */
export type GardenStage = "seedling" | "budding" | "evergreen";

/** 格物致知 - 主题分类（纯理性认知） */
export type GardenTopic =
  | "philosophy"
  | "psychology"
  | "methodology"
  | "nature"
  | "society"
  | "art";

/** 格物致知 - 笔记类型 */
export type GardenNoteType = "essays" | "notes" | "patterns";

// ─── 造物记（Craft）──────────────────────────────────────
/** 造物记 - 主题分类（技术实操与工具） */
export type CraftTopic =
  | "ai"
  | "software"
  | "hardware"
  | "web"
  | "tools"
  | "cs";

/** 造物记 - 笔记类型 */
export type CraftNoteType =
  | "notes"
  | "resources"
  | "projects"
  | "workflows"
  | "tutorials";

// ─── 联合类型 ────────────────────────────────────────────
/** 所有可用主题（Thinking + Craft） */
export type Topic = GardenTopic | CraftTopic;

/** 所有可用笔记类型（Thinking + Craft） */
export type NoteType = GardenNoteType | CraftNoteType;

/** 博客文章的 Frontmatter 元数据 */
export interface PostMeta {
  title: string;
  description: string;
  date: string; // ISO 8601 format
  updatedAt?: string;
  category: ContentCategory;
  tags?: string[];
  published: boolean;
  coverImage?: string;
  readingTime?: number; // 分钟

  // 格物致知 / 造物记 共用字段
  stage?: GardenStage;
  topic?: Topic;
  noteType?: NoteType;

  // 感物（Muse）/ 原读书时光专用字段
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
