import Link from "next/link";
import { siteConfig, navConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-[var(--width-wide)] px-6 py-12 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[var(--color-text-primary)]">
              {siteConfig.name}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              探索
            </h4>
            <ul className="mt-3 space-y-2">
              {navConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              连接
            </h4>
            <ul className="mt-3 space-y-2">
              {siteConfig.links.github && (
                <li>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    GitHub
                  </a>
                </li>
              )}
              {siteConfig.links.twitter && (
                <li>
                  <a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    Twitter / X
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--color-border)] pt-6 text-center">
          <p className="text-sm text-[var(--color-text-muted)]">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
