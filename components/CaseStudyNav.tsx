"use client";

import { useEffect, useState } from "react";

type CaseStudyNavItem = {
  label: string;
  href: string;
};

export function CaseStudyNav({ items }: { items: CaseStudyNavItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.href.replace("#", "") ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0, 0.2, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="sticky top-28 grid gap-5 text-sm">
      {items.map((item) => {
        const id = item.href.replace("#", "");
        const isActive = activeId === id;

        return (
          <a
            key={item.href}
            href={item.href}
            className={`transition-colors ${isActive ? "text-blue" : "text-muted hover:text-ink"}`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
