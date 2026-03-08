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
          我是肖一鸣，浙江大学海洋工程与技术专业大二学生。
        </p>
        <p>
          对水下机器人、流体智能和具身智能方向感兴趣，正在从零开始积累科研经验。
          目前在做的事情包括：学 ROS2 和控制理论、做一个叫 HaloGuard 的桌面机器人项目、
          读存在主义和心理学的书、以及试着把想法写下来。
        </p>
        <p>
          这个网站是我的数字花园——记录技术学习、读书思考和成长碎片。
          我相信最好的学习方式是造东西，最好的思考方式是写下来。
        </p>

        <h2>这个网站是什么</h2>
        <p>
          <strong>{siteConfig.name}</strong> 分为四个空间：
        </p>
        <ul>
          <li>
            <strong>格物致知（Thinking）</strong>——哲学、心理学、方法论。
            试图理解世界和理解自己的思考笔记，按成长阶段标记为
            Seedling、Budding 或 Evergreen。
          </li>
          <li>
            <strong>造物记（Craft）</strong>——ROS2、控制理论、嵌入式开发、项目复盘。
            动手造东西的过程记录，包括踩过的坑和学到的经验。
          </li>
          <li>
            <strong>感物（Muse）</strong>——书、音乐、电影。
            被美触动的瞬间。目前以书和古典音乐为主。
          </li>
          <li>
            <strong>浮生（Life）</strong>——成长日志。
            关于小镇做题家的身份、完美主义的挣扎、以及从"过度思考"到"动手实践"的转型。
          </li>
        </ul>

        <h2>为什么叫「数字修道院」</h2>
        <p>
          修道院是一个远离喧嚣、专注修行的地方。中世纪的修道士们在修道院里抄写经卷、
          沉思冥想、记录见闻——那种专注、安静、持续积累的状态，是我想在数字世界里重建的。
        </p>
        <p>
          不是要与世隔绝，而是在信息洪流中给自己辟出一片清净之地：
          慢慢读，慢慢想，慢慢写。慢慢造。
        </p>
        <blockquote>
          <p>在此，重构内心秩序。事上练，致良知。</p>
        </blockquote>

        <h2>关于 AI 辅助</h2>
        <p>
          坦诚地说：这个网站的前端代码大量借助 AI 工具（GitHub Copilot）生成。
          但网站的内容、架构设计、视觉风格和所有文章都是我自己的。
          我认为在 AI 时代，理解系统架构和拥有自己的判断力比手写每一行代码更重要。
        </p>

        <h2>联系方式</h2>
        <p>
          如果你想和我聊聊：
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
