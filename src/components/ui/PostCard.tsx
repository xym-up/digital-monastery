import Link from "next/link";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";
import type { PostMeta } from "@/types";

interface PostCardProps {
  slug: string;
  meta: PostMeta;
  className?: string;
}

/**
 * 博客文章卡片
 *
 * 设计要点（参考 FRONTEND_GUIDELINES.md 5.1 节）：
 * - 大尺寸：内边距 32px，一屏 3-4 个
 * - 悬停效果：Y 轴上移 4px + 阴影加深 + 边框变色
 * - 过渡动画：300ms 的 cubic-bezier 缓动，手感丝滑
 *
 * 技术说明：
 * - `group` 类：Tailwind 的分组功能，允许子元素响应父元素的悬停状态
 *   比如 `group-hover:text-[...]` 表示"当父元素被悬停时，改变这个元素的颜色"
 * - `transition-all duration-300`：所有属性变化都做 300ms 的过渡动画
 * - `-translate-y-1`：向上移动 4px（Y 轴负方向 = 向上）
 */
export function PostCard({ slug, meta, className }: PostCardProps) {
  return (
    <article
      className={cn(
        "group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-8 transition-all duration-300 md:p-10",
        "hover:-translate-y-1 hover:border-[var(--color-accent)]/40 hover:shadow-xl",
        className
      )}
    >
      <Link href={`/${meta.category}/${slug}`} className="block">
        {/* Category Tag */}
        <span className="inline-block rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-medium tracking-wide text-[var(--color-accent)] uppercase">
          {meta.category}
        </span>

        {/* Title — 大字、衬线体 */}
        <h2 className="mt-4 font-serif text-2xl font-bold leading-snug text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)] md:text-3xl">
          {meta.title}
        </h2>

        {/* Description — 宽松行高 */}
        {meta.description && (
          <p className="mt-3 line-clamp-3 text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
            {meta.description}
          </p>
        )}

        {/* Meta info — 日期 + 阅读时间 */}
        <div className="mt-6 flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
          <time dateTime={meta.date}>{formatDate(meta.date)}</time>
          {meta.readingTime && (
            <>
              <span className="text-[var(--color-border)]">·</span>
              <span>{meta.readingTime} 分钟阅读</span>
            </>
          )}
        </div>

        {/* Tags */}
        {meta.tags && meta.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-[var(--color-bg-secondary)] px-2.5 py-1 text-xs text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-text-secondary)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}
