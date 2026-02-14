import { Container, GardenGrid } from "@/components/ui";
import { getPostsByCategory } from "@/lib/content";
import { categoryConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "格物致知",
  description: categoryConfig.thinking.description,
};

export default function ThinkingPage() {
  const posts = getPostsByCategory("thinking");

  return (
    <div className="animate-fade-in">
      <Container>
        {/* Header — 大字衬线体 + 英文副标题 */}
        <div className="mb-20 pt-28 md:pt-36">
          <h2 className="font-serif text-5xl tracking-tight text-[var(--color-text-primary)] md:text-6xl">
            格物致知
          </h2>
          <p className="mt-4 font-serif text-xl italic text-[var(--color-text-muted)]">
            {categoryConfig.thinking.description}
          </p>
        </div>

        {/* Garden Grid with Filters */}
        <GardenGrid posts={posts} />
      </Container>
    </div>
  );
}
