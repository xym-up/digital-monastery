import Link from "next/link";
import { Container, PostCard, Typewriter } from "@/components/ui";
import { getAllPosts } from "@/lib/content";
import { siteConfig, navConfig } from "@/config/site";

/**
 * 首页
 *
 * 结构说明：
 * 1. Hero 区域：占满视口高度，打字机效果展示个人介绍
 * 2. 精选文章：最近发布的文章卡片
 *
 * 设计理念：
 * - "修道院入口"的仪式感：进入时先看到大字标题和个人宣言
 * - 大量留白营造呼吸感
 * - 打字机效果增加"正在书写"的在场感
 */
export default function Home() {
  const recentPosts = getAllPosts().slice(0, 4);

  return (
    <>
      {/* ==================== Hero Section ==================== */}
      {/* 
        min-h-screen：最小高度占满整个视口
        flex + items-center + justify-center：内容水平垂直居中
        px-6：两侧留出 24px 的内边距（手机上不贴边）
      */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          {/* 站名 */}
          <h1 className="font-serif text-5xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-7xl lg:text-8xl">
            {siteConfig.name}
          </h1>

          {/* 副标题 */}
          <p className="mt-6 font-serif text-xl text-[var(--color-text-secondary)] md:text-2xl">
            {siteConfig.description}
          </p>

          {/* 打字机效果的个人介绍 */}
          <div className="mt-10">
            <Typewriter
              lines={[
                "我是一个热爱思考与技术的大学生，",
                "正在进行内心整合，",
                "致力于有意义的创作。",
              ]}
              speed={70}
              lineDelay={500}
              className="font-serif text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl"
            />
          </div>

          {/* 座右铭 */}
          <blockquote className="mt-10 border-l-2 border-[var(--color-accent)] pl-6 text-left">
            <p className="font-serif text-base italic text-[var(--color-text-muted)] md:text-lg">
              &ldquo;在此，重构内心秩序。事上练，致良知。&rdquo;
            </p>
          </blockquote>

          {/* 导航入口 */}
          <nav className="mt-12 flex flex-wrap justify-center gap-4">
            {navConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-lg border border-[var(--color-border)] px-6 py-3 font-serif text-sm font-medium text-[var(--color-text-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-md md:text-base"
              >
                {item.title}
                <span className="mt-1 block text-xs text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-accent)]/60">
                  {item.description}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* 向下滚动提示 */}
        {recentPosts.length > 0 && (
          <div className="absolute bottom-8 animate-bounce text-[var(--color-text-muted)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        )}
      </section>

      {/* ==================== Recent Posts ==================== */}
      {/*
        这部分展示最近的文章。
        border-t：顶部加一条分割线，视觉上区分两个区域
        py-20：上下各 80px 的内边距，营造宽松的呼吸感
      */}
      {recentPosts.length > 0 && (
        <section className="border-t border-[var(--color-border)] py-20 md:py-28">
          <Container narrow>
            <div className="mb-12 md:mb-16">
              <h2 className="font-serif text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
                最新文章
              </h2>
              <p className="mt-3 text-[var(--color-text-secondary)]">
                近期写下的文字，关于阅读、思考与生活。
              </p>
            </div>

            {/* 
              文章卡片网格
              gap-8：卡片之间 32px 间距
              grid：CSS Grid 布局
            */}
            <div className="grid gap-8">
              {recentPosts.map((post, index) => (
                <div
                  key={post.slug}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <PostCard slug={post.slug} meta={post} />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
