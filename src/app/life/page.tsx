import { Container, PageHeader, PostCard } from "@/components/ui";
import { getPostsByCategory } from "@/lib/content";
import { categoryConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life",
  description: categoryConfig.life.description,
};

export default function LifePage() {
  const posts = getPostsByCategory("life");

  return (
    <Container narrow>
      <PageHeader
        title={categoryConfig.life.title}
        description={categoryConfig.life.description}
      />

      {posts.length === 0 ? (
        <p className="py-20 text-center font-serif text-lg text-[var(--color-text-muted)]">
          还没有文章，敬请期待...
        </p>
      ) : (
        <div className="grid gap-8 pb-20">
          {posts.map((post, index) => (
            <div
              key={post.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PostCard slug={post.slug} meta={post} />
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}
