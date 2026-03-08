import { Container, BookCard, BookPlaceholder, DisplayBookCard, MusicCard } from "@/components/ui";
import { getPostsByCategory } from "@/lib/content";
import { categoryConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "感物",
  description: categoryConfig.muse.description,
};

/** 陈列书籍 — 只展示封面，暂无读书笔记 */
const displayBooks = [
  {
    title: "禅与摩托车维修艺术",
    author: "Robert M. Pirsig",
    coverColor: "stone",
    description: "理性与感性的旅途，在摩托车引擎声中追问「良质」的意义。",
  },
  {
    title: "刀锋",
    author: "W. Somerset Maugham",
    coverColor: "slate",
    description: "一个青年拒绝了世俗的一切去寻找生命的意义，毛姆最具哲学性的小说。",
  },
  {
    title: "纳尔奇思与歌尔德蒙",
    author: "Hermann Hesse",
    coverColor: "amber",
    description: "理性与感性、修道院与流浪、精神与肉体——赫尔曼·黑塞的永恒二元对话。",
  },
  {
    title: "小王子",
    author: "Antoine de Saint-Exupéry",
    coverColor: "rose",
    description: "所有大人都曾经是孩子，只是很少有人记得。",
  },
  {
    title: "牧羊少年奇幻之旅",
    author: "Paulo Coelho",
    coverColor: "emerald",
    description: "当你真心渴望某样东西时，整个宇宙都会联合起来帮助你完成。",
  },
  {
    title: "悉达多",
    author: "Hermann Hesse",
    coverColor: "indigo",
    description: "一个人必须自己去经历，自己去受苦，才能找到自己的路。",
  },
];

/** 音乐陈列 */
const musicCollection = [
  {
    title: "哥德堡变奏曲",
    subtitle: "J.S. Bach",
    coverColor: "stone",
    description: "巴赫最精密的键盘作品。30个变奏，从同一个主题出发，在数学般的严谨中展开无限可能。适合深夜独处时聆听。",
  },
  {
    title: "The Well-Tempered Clavier",
    subtitle: "J.S. Bach",
    coverColor: "slate",
    description: "平均律键盘曲集——西方音乐的旧约圣经。每一首前奏曲与赋格都是一个自足的小宇宙。",
  },
  {
    title: "安魂曲 K.626",
    subtitle: "W.A. Mozart",
    coverColor: "indigo",
    description: "莫扎特最后的、未完成的作品。Lacrimosa 那八小节可能是人类写过的最美的旋律。",
  },
  {
    title: "第40号交响曲 K.550",
    subtitle: "W.A. Mozart",
    coverColor: "rose",
    description: "g小调的忧郁开场是莫扎特少见的阴暗面。优雅和不安并存，像一个微笑着流泪的人。",
  },
];

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
            书、音乐、电影、美学 — 所有被美触动的瞬间
          </p>
        </div>

        {/* ========== 读书笔记 ========== */}
        {posts.length > 0 && (
          <section className="mb-20">
            <h3 className="mb-8 border-b border-[var(--color-border)] pb-4 font-serif text-2xl text-[var(--color-text-primary)]">
              读书笔记
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
              {posts.map((post, index) => (
                <div
                  key={post.slug}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <BookCard slug={post.slug} meta={post} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========== 书架陈列 ========== */}
        <section className="mb-20">
          <h3 className="mb-8 border-b border-[var(--color-border)] pb-4 font-serif text-2xl text-[var(--color-text-primary)]">
            书架
          </h3>
          <p className="mb-8 font-serif text-sm italic text-[var(--color-text-muted)]">
            读过或正在读的书，有些改变了我看世界的方式。笔记慢慢补。
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
            {displayBooks.map((book, index) => (
              <div
                key={book.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <DisplayBookCard
                  title={book.title}
                  author={book.author}
                  coverColor={book.coverColor}
                  description={book.description}
                />
              </div>
            ))}
            <div className="hidden md:block">
              <BookPlaceholder />
            </div>
          </div>
        </section>

        {/* ========== 音乐陈列 ========== */}
        <section className="mb-20 pb-12">
          <h3 className="mb-8 border-b border-[var(--color-border)] pb-4 font-serif text-2xl text-[var(--color-text-primary)]">
            音乐
          </h3>
          <p className="mb-8 font-serif text-sm italic text-[var(--color-text-muted)]">
            反复聆听的音乐。古典为主，偶尔其他。
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
            {musicCollection.map((music, index) => (
              <div
                key={music.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <MusicCard
                  title={music.title}
                  subtitle={music.subtitle}
                  coverColor={music.coverColor}
                  description={music.description}
                />
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
