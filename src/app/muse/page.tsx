import { Container, BookCard, BookPlaceholder } from "@/components/ui";
import { getPostsByCategory } from "@/lib/content";
import { categoryConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "感物",
  description: categoryConfig.muse.description,
};

export default function MusePage() {
  const posts = getPostsByCategory("muse");

  return (
    <div className="animate-fade-in">
      <Container>
        {/* Header — 居中大字 + 英文副标题 */}
        <div className="mb-20 pt-28 text-center md:pt-36">
          <h2 className="font-serif text-5xl tracking-tight text-[var(--color-text-primary)] md:text-6xl">
            感物
          </h2>
          <p className="mt-4 font-serif text-xl italic text-[var(--color-text-muted)]">
            {categoryConfig.muse.description}
          </p>
        </div>

        {/* Book Grid — 书架展示 */}
        <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
          {posts.map((post, index) => (
            <div
              key={post.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BookCard slug={post.slug} meta={post} />
            </div>
          ))}

          {/* 装饰性空位 — 仅桌面端显示 */}
          <div className="hidden md:block">
            <BookPlaceholder />
          </div>
        </div>
      </Container>
    </div>
  );
}
