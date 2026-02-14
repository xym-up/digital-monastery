import { Sprout, Leaf, TreePine } from "lucide-react";
import type { GardenStage } from "@/types";

interface StageIndicatorProps {
  stage: GardenStage;
  showLabel?: boolean;
}

const stageConfig: Record<
  GardenStage,
  { icon: typeof Sprout; color: string; label: string; dotColor: string }
> = {
  seedling: {
    icon: Sprout,
    color: "text-amber-500",
    label: "Seedling",
    dotColor: "bg-amber-300",
  },
  budding: {
    icon: Leaf,
    color: "text-emerald-500",
    label: "Budding",
    dotColor: "bg-emerald-400",
  },
  evergreen: {
    icon: TreePine,
    color: "text-emerald-700 dark:text-emerald-400",
    label: "Evergreen",
    dotColor: "bg-emerald-700",
  },
};

/**
 * 数字花园 - 成长阶段指示器
 * Seedling(幼苗) → Budding(萌芽) → Evergreen(常青)
 */
export function StageIndicator({ stage, showLabel = false }: StageIndicatorProps) {
  const config = stageConfig[stage] || stageConfig.seedling;
  const Icon = config.icon;

  return (
    <span className="inline-flex items-center gap-1.5">
      <Icon size={14} className={config.color} strokeWidth={1.5} />
      {showLabel && (
        <span className="text-xs font-sans uppercase tracking-widest text-[var(--color-text-muted)]">
          {config.label}
        </span>
      )}
    </span>
  );
}

/** 成长阶段的小圆点指示器（用于卡片中） */
export function StageDot({ stage }: { stage: GardenStage }) {
  const config = stageConfig[stage] || stageConfig.seedling;
  return <span className={`inline-block h-1.5 w-1.5 rounded-full ${config.dotColor}`} />;
}
