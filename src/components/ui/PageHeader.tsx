import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

/**
 * 通用页面标题组件
 *
 * 上方留出 96px+ 的空间（因为 Navbar 是 fixed 定位，会遮挡内容）
 * 下方留出充分间距，让标题区域和内容区域之间有视觉分隔
 */
export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("pb-12 pt-28 md:pb-16 md:pt-36", className)}>
      <h1 className="font-serif text-4xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
          {description}
        </p>
      )}
      {/* 标题下方的装饰线 */}
      <div className="mt-8 h-px w-16 bg-[var(--color-accent)]/40" />
    </div>
  );
}
