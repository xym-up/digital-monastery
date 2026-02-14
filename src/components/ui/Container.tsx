import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /** 使用更窄的内容宽度 */
  narrow?: boolean;
}

/** 页面内容容器 - 统一页面宽度和 padding */
export function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-8",
        narrow ? "max-w-[var(--width-content)]" : "max-w-[var(--width-wide)]",
        className
      )}
    >
      {children}
    </div>
  );
}
