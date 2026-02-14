import { Container, GardenGrid } from "@/components/ui";
import { getPostsByCategory } from "@/lib/content";
import { categoryConfig, craftTopics, gardenStages, craftNoteTypes } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "造物记",
  description: categoryConfig.craft.description,
};

export default function CraftPage() {
  const posts = getPostsByCategory("craft");

  return (
    <div className="animate-fade-in">
      <Container>
        {/* Header — 大字衬线体 + 英文副标题 */}
        <div className="mb-20 pt-28 md:pt-36">
          <h2 className="font-serif text-5xl tracking-tight text-[var(--color-text-primary)] md:text-6xl">
            造物记
          </h2>
          <p className="mt-4 font-serif text-xl italic text-[var(--color-text-muted)]">
            {categoryConfig.craft.description}
          </p>
        </div>

        {/* Garden Grid with Filters — 使用 Craft 专用配置 */}
        <GardenGrid
          posts={posts}
          linkPrefix="/craft"
          topics={craftTopics}
          stages={gardenStages}
          noteTypes={craftNoteTypes}
          emptyMessage="No blueprints yet. Start building?"
        />
      </Container>
    </div>
  );
}
