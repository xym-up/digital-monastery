"use client";

import { useState, useEffect } from "react";
import { useMounted } from "@/hooks/use-mounted";

interface TypewriterProps {
  /** 要依次显示的文本行 */
  lines: string[];
  /** 每个字符出现的间隔（毫秒） */
  speed?: number;
  /** 行与行之间的停顿时间（毫秒） */
  lineDelay?: number;
  /** 自定义样式类 */
  className?: string;
}

/**
 * 打字机效果组件
 * 
 * 工作原理：
 * 1. 维护两个状态：当前正在打哪一行（lineIndex）和当前字符位置（charIndex）
 * 2. 用 useEffect 设置定时器，每隔 `speed` 毫秒推进一个字符
 * 3. 一行打完后停顿 `lineDelay` 毫秒，再开始下一行
 * 4. 每行打完后会有一个闪烁的光标动画（CSS 实现）
 */
export function Typewriter({
  lines,
  speed = 80,
  lineDelay = 600,
  className = "",
}: TypewriterProps) {
  const mounted = useMounted();
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);

  useEffect(() => {
    if (!mounted || lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];

    // 当前行还没打完：继续打字
    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }

    // 当前行打完了：停顿后切到下一行
    const timer = setTimeout(() => {
      setCompletedLines((prev) => [...prev, currentLine]);
      setLineIndex((prev) => prev + 1);
      setCharIndex(0);
    }, lineDelay);

    return () => clearTimeout(timer);
  }, [mounted, lineIndex, charIndex, lines, speed, lineDelay]);

  if (!mounted) {
    // SSR 时显示完整文本，避免 hydration 问题
    return (
      <div className={className}>
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      {/* 已打完的行 */}
      {completedLines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}

      {/* 正在打的行 */}
      {lineIndex < lines.length && (
        <p>
          {lines[lineIndex].slice(0, charIndex)}
          <span className="animate-blink text-[var(--color-accent)]">|</span>
        </p>
      )}
    </div>
  );
}
