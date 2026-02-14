import { Container } from "@/components/ui";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于",
  description: `关于 ${siteConfig.name} 和它背后的人。`,
};

export default function AboutPage() {
  return (
    <Container narrow>
      <article className="article-content pb-20 pt-28 md:pt-36">
        <h1>关于</h1>

        <h2>我是谁</h2>
        <p>
          你好，我是{siteConfig.author.name}。{siteConfig.author.bio}
        </p>
        <p>
          这个角落是我在互联网上的一小块自留地——不追求流量，不讨好算法，只是安静地写一些自己想写的东西。
        </p>

        <h2>这个网站是什么</h2>
        <p>
          <strong>{siteConfig.name}</strong> 是一个个人博客，也是一座数字花园。
          它由四个空间组成，每个空间承载不同维度的记录：
        </p>
        <ul>
          <li>
            <strong>格物致知（Thinking）</strong>——纯理性认知的空间。哲学、心理学、方法论、世界观，
            所有试图理解世界运行方式的思考都在这里生长。笔记按成长阶段标记为
            Seedling、Budding 或 Evergreen。
          </li>
          <li>
            <strong>造物记（Craft）</strong>——技术实操的工坊。AI、软件、硬件、工具链，
            动手造东西的过程和心得。
          </li>
          <li>
            <strong>感物（Muse）</strong>——文艺美学的居所。书、音乐、电影、美术，
            所有被美触动的瞬间和感悟。
          </li>
          <li>
            <strong>浮生（Life）</strong>——个人编年史。成长日志、碎碎念、日常记录，
            最私人也最真实的部分。
          </li>
        </ul>

        <h2>&ldquo;数字修道院&rdquo;这个名字</h2>
        <p>
          修道院是一个远离喧嚣、专注修行的地方。中世纪的修道士们在修道院里抄写经卷、
          沉思冥想、记录见闻——那种专注、安静、持续积累的状态，正是我想在数字世界里重建的。
        </p>
        <p>
          &ldquo;Digital Monastery&rdquo; 不是要与世隔绝，而是在信息洪流中为自己辟出一片清净之地：
          慢慢读，慢慢想，慢慢写。
        </p>
        <blockquote>
          <p>在此，重构内心秩序。</p>
        </blockquote>

        <h2>联系方式</h2>
        <p>
          如果你想和我聊聊，欢迎通过以下方式联系：
        </p>
        <ul>
          {siteConfig.author.email && (
            <li>
              邮箱：<a href={`mailto:${siteConfig.author.email}`}>{siteConfig.author.email}</a>
            </li>
          )}
          {siteConfig.links.github && (
            <li>
              GitHub：<a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">{siteConfig.links.github}</a>
            </li>
          )}
          {siteConfig.links.twitter && (
            <li>
              Twitter/X：<a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">{siteConfig.links.twitter}</a>
            </li>
          )}
          {!siteConfig.author.email && !siteConfig.links.github && !siteConfig.links.twitter && (
            <li>暂无公开联系方式，敬请期待。</li>
          )}
        </ul>
      </article>
    </Container>
  );
}
