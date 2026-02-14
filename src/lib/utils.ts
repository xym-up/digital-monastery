/**
 * 通用工具函数
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** 合并 Tailwind class 名（解决冲突） */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

/** 格式化日期 */
export function formatDate(dateStr: string, locale: string = "zh-CN"): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** 估算阅读时间（分钟） */
export function estimateReadingTime(content: string, wpm: number = 300): number {
  const words = content.trim().split(/\s+/).length;
  // 中文按字符数计算，大约 400 字/分钟
  const cjkChars = (content.match(/[\u4e00-\u9fff]/g) || []).length;
  const plainWords = words - cjkChars;
  const minutes = plainWords / wpm + cjkChars / 400;
  return Math.max(1, Math.ceil(minutes));
}

/** 生成 slug（从标题） */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}

/** 截断文本 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}
