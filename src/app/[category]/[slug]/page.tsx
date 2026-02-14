import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui";
import { getPostBySlug, getPostSlugs } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import type { Category } from "@/config/site";
import { categoryConfig } from "@/config/site";
import type { Metadata } from "next";

interface PostPageProps {
  params: Promise<{ category: string; slug: string }>;
}

const validCategories: Category[] = ["reading", "thinking", "life"];

export async function generateStaticParams() {
  return validCategories.flatMap((category) =>
    getPostSlugs(category).map((slug) => ({ category, slug }))
  );
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  if (!validCategories.includes(category as Category)) return {};

  const post = getPostBySlug(category as Category, slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt,
      tags: post.tags,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { category, slug } = await params;

  if (!validCategories.includes(category as Category)) {
    notFound();
  }

  const post = getPostBySlug(category as Category, slug);
  if (!post) {
    notFound();
  }

  return (
    <Container narrow>
      <article className="pb-20 pt-28 md:pt-36">
        {/* 返回分类页的导航 */}
        <Link
          href={`/${category}`}
          className="group mb-8 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          返回{categoryConfig[category as Category]?.title ?? category}
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-[var(--color-border)] pb-10">
          <span className="inline-block rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-medium tracking-wide text-[var(--color-accent)] uppercase">
            {post.category}
          </span>

          <h1 className="mt-6 font-serif text-3xl font-bold leading-tight tracking-tight text-[var(--color-text-primary)] md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {post.description && (
            <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
              {post.description}
            </p>
          )}

          <div className="mt-6 flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.readingTime && (
              <>
                <span className="text-[var(--color-border)]">·</span>
                <span>{post.readingTime} 分钟阅读</span>
              </>
            )}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-[var(--color-bg-secondary)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content — 文章正文 */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />
      </article>
    </Container>
  );
}

/**
 * 简单 Markdown 渲染
 * 
 * 原理：用正则表达式把 Markdown 语法替换为 HTML 标签。
 * 文章内容已有全局 CSS 样式（.article-content），所以这里不需要给每个标签加
 * Tailwind 类名了——样式在 globals.css 中统一管理。
 * 
 * TODO: 后续可替换为 MDX 或 remark/rehype pipeline，获得更强的渲染能力
 */
function renderMarkdown(content: string): string {
  return content
    // Headers（注意顺序：先匹配 ### 再 ## 再 #，避免 # 吞掉后面的）
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    // Bold & Italic（***...*** 同时加粗和斜体）
    .replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    // Blockquote
    .replace(/^> (.*$)/gm, "<blockquote>$1</blockquote>")
    // Unordered list
    .replace(/^- (.*$)/gm, "<li>$1</li>")
    // Inline code
    .replace(/`(.*?)`/g, "<code>$1</code>")
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // Paragraphs (wrap remaining non-tag lines)
    .replace(/^(?!<[a-z])(.*\S.*)$/gm, "<p>$1</p>")
    // Horizontal rule
    .replace(/^---$/gm, "<hr />");
}
