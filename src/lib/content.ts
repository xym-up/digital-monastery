/**
 * 内容管理工具 - 读取和解析 Markdown/MDX 文件
 * 
 * 内容文件存放在 /content 目录下，按分类组织：
 * content/
 *   thinking/    ← 格物致知（哲学、心理学、方法论、世界观…）
 *   craft/       ← 造物记（AI、软件、硬件、工具链…）
 *   muse/        ← 感物（书、音乐、电影、美术、语录…）
 *   life/        ← 浮生（成长日志、碎碎念、日常记录）
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post, PostMeta } from "@/types";
import type { Category } from "@/config/site";
import { estimateReadingTime } from "@/lib/utils";

const CONTENT_DIR = path.join(process.cwd(), "content");

/** 获取某个分类下的所有文章元数据 */
export function getPostsByCategory(category: Category): (PostMeta & { slug: string })[] {
  const dir = path.join(CONTENT_DIR, category);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      const meta: PostMeta = {
        title: data.title || slug,
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        updatedAt: data.updatedAt,
        category,
        tags: data.tags || [],
        published: data.published !== false, // 默认发布
        coverImage: data.coverImage,
        readingTime: estimateReadingTime(content),
        // 格物致知 / 造物记 共用字段
        stage: data.stage,
        topic: data.topic,
        noteType: data.noteType,
        // 感物（Muse）专用字段
        author: data.author,
        coverColor: data.coverColor,
      };

      return { ...meta, slug };
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

/** 获取所有文章 */
export function getAllPosts(): (PostMeta & { slug: string })[] {
  const categories: Category[] = ["thinking", "craft", "muse", "life"];
  return categories
    .flatMap((cat) => getPostsByCategory(cat))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** 获取单篇文章的完整内容 */
export function getPostBySlug(category: Category, slug: string): Post | null {
  const extensions = [".md", ".mdx"];

  for (const ext of extensions) {
    const filePath = path.join(CONTENT_DIR, category, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        updatedAt: data.updatedAt,
        category,
        tags: data.tags || [],
        published: data.published !== false,
        coverImage: data.coverImage,
        readingTime: estimateReadingTime(content),
        content,
      };
    }
  }

  return null;
}

/** 获取某个分类下所有文章的 slug（用于 generateStaticParams） */
export function getPostSlugs(category: Category): string[] {
  const dir = path.join(CONTENT_DIR, category);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}
