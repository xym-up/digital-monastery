"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { useScroll } from "@/hooks/use-scroll";
import { navConfig, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mounted = useMounted();
  const isScrolled = useScroll(20);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[var(--color-bg-primary)]/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-[var(--width-wide)] items-center justify-between px-6 py-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl font-bold tracking-tight text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)] md:text-2xl"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-2 font-serif text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]"
            >
              {item.title}
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* Separator */}
          <span className="h-4 w-px bg-[var(--color-border)]" aria-hidden="true" />

          {/* About */}
          <Link
            href="/about"
            className="py-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            About
          </Link>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="ml-2 rounded-lg p-2 text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)]"
              aria-label={`切换到${theme === "dark" ? "浅色" : "深色"}模式`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>

        {/* Mobile: Theme + Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
              aria-label="切换主题"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
            aria-label="菜单"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-bg-primary)]/95 backdrop-blur-md transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 border-t-0"
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 font-serif text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-secondary)]"
            >
              <span className="block">{item.title}</span>
              <span className="block text-sm text-[var(--color-text-muted)]">
                {item.description}
              </span>
            </Link>
          ))}

          {/* Separator */}
          <div className="mx-4 my-1 border-t border-[var(--color-border)]" />

          {/* About */}
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg px-4 py-3 text-sm text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)]"
          >
            About
          </Link>
        </div>
      </div>
    </header>
  );
}
