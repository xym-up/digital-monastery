"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { StageIndicator, StageDot } from "./StageIndicator";
import type { PostMeta } from "@/types";

/** 筛选选项 */
interface FilterOption {
  readonly label: string;
  readonly value: string;
}

interface GardenGridProps {
  /** 文章列表 */
  posts: (PostMeta & { slug: string })[];
  /** 链接前缀，如 "/thinking" 或 "/craft" */
  linkPrefix: string;
  /** Topic 筛选选项列表 */
  topics: readonly FilterOption[];
  /** Stage 筛选选项列表 */
  stages: readonly FilterOption[];
  /** NoteType 筛选选项列表 */
  noteTypes: readonly FilterOption[];
  /** 空状态提示文案 */
  emptyMessage?: string;
}

/** 自定义下拉选择器 */
function FilterDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly FilterOption[];
  value: string;
  onChange: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLabel = options.find((o) => o.value === value)?.label ?? "All";

  return (
    <div className="relative font-sans" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
      >
        <span className="opacity-50">{label}:</span>
        <span className="font-medium text-[var(--color-text-secondary)]">{activeLabel}</span>
        <ChevronDown
          size={12}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-40 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-2 shadow-xl">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-xs uppercase tracking-widest transition-colors hover:bg-[var(--color-bg-secondary)] ${
                value === opt.value
                  ? "font-bold text-[var(--color-text-primary)]"
                  : "text-[var(--color-text-muted)]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * 通用花园网格 — 带三维筛选的卡片网格
 * 可复用于 Thinking、Craft 等需要 Topic × Stage × NoteType 筛选的页面
 */
export function GardenGrid({
  posts,
  linkPrefix,
  topics,
  stages,
  noteTypes,
  emptyMessage = "The soil is empty here. Plant a seed?",
}: GardenGridProps) {
  const [topic, setTopic] = useState("all");
  const [stage, setStage] = useState("all");
  const [noteType, setNoteType] = useState("all");

  const filtered = useMemo(() => {
    return posts.filter(
      (p) =>
        (topic === "all" || p.topic === topic) &&
        (stage === "all" || p.stage === stage) &&
        (noteType === "all" || p.noteType === noteType)
    );
  }, [posts, topic, stage, noteType]);

  return (
    <div>
      {/* ===== Filter System ===== */}
      <div className="sticky top-20 z-30 border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]/95 pb-6 pt-4 backdrop-blur-sm transition-all duration-500">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          {/* Topic Pills */}
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <button
                key={t.value}
                onClick={() => setTopic(t.value)}
                className={`rounded-full border px-4 py-1.5 font-sans text-xs transition-all duration-300 ${
                  topic === t.value
                    ? "border-[var(--color-text-primary)] bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]"
                    : "border-transparent text-[var(--color-text-muted)] hover:bg-[var(--color-bg-secondary)]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Stage & Type Dropdowns */}
          <div className="ml-auto flex gap-8 border-l border-[var(--color-border)] pl-8 md:ml-0">
            <FilterDropdown
              label="Growth"
              options={stages}
              value={stage}
              onChange={setStage}
            />
            <FilterDropdown
              label="Type"
              options={noteTypes}
              value={noteType}
              onChange={setNoteType}
            />
          </div>
        </div>
      </div>

      {/* ===== The Grid ===== */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 pb-32 pt-12 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((note, index) => (
          <Link
            key={note.slug}
            href={`${linkPrefix}/${note.slug}`}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="group flex cursor-pointer flex-col gap-4 rounded-xl p-6 transition-colors duration-500 hover:bg-[var(--color-bg-secondary)]/60">
              {/* Top Meta */}
              <div className="flex items-center justify-between text-xs font-sans uppercase tracking-widest text-[var(--color-text-muted)]">
                <span className="flex items-center gap-2">
                  {note.stage && <StageDot stage={note.stage} />}
                  {note.noteType ?? "notes"}
                </span>
                <span className="opacity-60">
                  {note.updatedAt
                    ? formatRelative(note.updatedAt)
                    : formatRelative(note.date)}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl leading-tight text-[var(--color-text-primary)] decoration-[var(--color-text-muted)]/50 decoration-1 underline-offset-4 group-hover:underline">
                {note.title}
              </h3>

              {/* Snippet */}
              <p className="line-clamp-3 font-serif text-base leading-relaxed text-[var(--color-text-secondary)] opacity-90">
                {note.description}
              </p>

              {/* Bottom Meta (appears on hover) */}
              <div className="mt-auto flex items-center justify-between border-t border-[var(--color-border)]/50 pt-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-xs font-sans capitalize text-[var(--color-text-muted)]">
                  {note.topic ?? "general"}
                </span>
                {note.stage && <StageIndicator stage={note.stage} />}
              </div>
            </div>
          </Link>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full py-20 text-center font-serif italic text-[var(--color-text-muted)]">
            {emptyMessage}
          </div>
        )}
      </div>
    </div>
  );
}

/** 将日期字符串转为相对时间显示 */
function formatRelative(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  // 超过一个月，显示月日
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
