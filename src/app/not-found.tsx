import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container narrow>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="font-serif text-6xl font-bold text-[var(--color-text-primary)]">
          404
        </h1>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
          这个页面似乎还没有被创造出来。
        </p>
        <Link
          href="/"
          className="mt-8 rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          返回首页
        </Link>
      </div>
    </Container>
  );
}
