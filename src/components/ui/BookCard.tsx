import Link from "next/link";
import { BookMarked } from "lucide-react";
import type { PostMeta } from "@/types";

interface BookCardProps {
  slug: string;
  meta: PostMeta;
}

/**
 * 书籍色彩映射 - 根据 coverColor 字段生成优雅的渐变背景
 * 用纯 CSS 制造书封效果，不依赖外部图片
 */
const colorMap: Record<string, { bg: string; text: string; accent: string }> = {
  stone: {
    bg: "bg-gradient-to-br from-stone-200 to-stone-300 dark:from-stone-700 dark:to-stone-800",
    text: "text-stone-800 dark:text-stone-100",
    accent: "text-stone-500 dark:text-stone-400",
  },
  amber: {
    bg: "bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-800 dark:to-amber-900",
    text: "text-amber-900 dark:text-amber-100",
    accent: "text-amber-600 dark:text-amber-400",
  },
  emerald: {
    bg: "bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-800 dark:to-emerald-900",
    text: "text-emerald-900 dark:text-emerald-100",
    accent: "text-emerald-600 dark:text-emerald-400",
  },
  slate: {
    bg: "bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800",
    text: "text-slate-800 dark:text-slate-100",
    accent: "text-slate-500 dark:text-slate-400",
  },
  rose: {
    bg: "bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-800 dark:to-rose-900",
    text: "text-rose-900 dark:text-rose-100",
    accent: "text-rose-500 dark:text-rose-400",
  },
  indigo: {
    bg: "bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-800 dark:to-indigo-900",
    text: "text-indigo-900 dark:text-indigo-100",
    accent: "text-indigo-500 dark:text-indigo-400",
  },
};

/**
 * 读书时光 - 书籍卡片
 *
 * 设计要点：
 * - 2:3 书封比例（aspect-[2/3]）
 * - 纯 CSS 优雅占位（渐变背景 + 书名首字母）
 * - 悬停效果：微微上浮 + 阴影加深 + 半透明叠层显示书名/作者
 * - 灰阶 → 彩色的过渡（当有 coverImage 时）
 */
export function BookCard({ slug, meta }: BookCardProps) {
  const colors = colorMap[meta.coverColor ?? "stone"] ?? colorMap.stone;
  const initial = meta.title.charAt(0).toUpperCase();
  const hasCover = Boolean(meta.coverImage);

  return (
    <Link href={`/reading/${slug}`} className="group block">
      <div className="relative aspect-[2/3] overflow-hidden rounded-sm shadow-sm transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:shadow-xl">
        {hasCover ? (
          /* 有封面图的情况 */
          <img
            src={meta.coverImage}
            alt={meta.title}
            className="h-full w-full object-cover opacity-90 grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
          />
        ) : (
          /* 纯 CSS 书封占位 */
          <div
            className={`flex h-full w-full flex-col items-center justify-center ${colors.bg} transition-all duration-700 group-hover:scale-105`}
          >
            {/* 大首字母装饰 */}
            <span
              className={`font-serif text-6xl font-light opacity-20 ${colors.text} md:text-7xl`}
            >
              {initial}
            </span>
            {/* 书名 */}
            <span
              className={`mt-4 px-4 text-center font-serif text-sm font-medium leading-snug ${colors.text} md:text-base`}
            >
              {meta.title}
            </span>
            {/* 作者 */}
            {meta.author && (
              <span
                className={`mt-2 text-center font-sans text-[10px] uppercase tracking-widest ${colors.accent}`}
              >
                {meta.author}
              </span>
            )}
          </div>
        )}

        {/* Hover Overlay - 半透明叠层 */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <h3 className="translate-y-4 font-serif text-lg leading-tight text-white transition-transform duration-500 delay-75 group-hover:translate-y-0 md:text-xl">
            {meta.title}
          </h3>
          {meta.author && (
            <p className="mt-1 translate-y-4 font-sans text-[10px] uppercase tracking-widest text-stone-300 transition-transform duration-500 delay-150 group-hover:translate-y-0">
              {meta.author}
            </p>
          )}
          {meta.description && (
            <p className="mt-2 line-clamp-2 translate-y-4 font-serif text-xs leading-relaxed text-stone-400 transition-transform duration-500 delay-200 group-hover:translate-y-0">
              {meta.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

/**
 * 书架空位 - 装饰性"待读"占位卡片
 */
export function BookPlaceholder() {
  return (
    <div className="flex aspect-[2/3] flex-col items-center justify-center rounded-sm border border-dashed border-[var(--color-border)] p-6 opacity-50 transition-opacity hover:opacity-100">
      <BookMarked size={32} strokeWidth={1} className="mb-4 text-[var(--color-text-muted)]" />
      <span className="font-serif text-sm italic text-[var(--color-text-muted)]">
        To be read...
      </span>
    </div>
  );
}
