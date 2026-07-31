"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "HOME", href: "/#home" },
  { label: "WORK", href: "/#work" },
  { label: "ABOUT", href: "/#about" },
  { label: "CONTACT", href: "/#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("HOME");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
      const sections = navItems
        .map((item) => ({
          ...item,
          node: document.getElementById(item.href.split("#")[1] ?? ""),
        }))
        .filter((item) => item.node);

      const current = sections.findLast(
        (item) => item.node && item.node.getBoundingClientRect().top < 180,
      );
      if (current) setActive(current.label);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{
        borderColor: scrolled ? "rgba(17,17,17,.1)" : "rgba(17,17,17,0)",
        backgroundColor: scrolled ? "rgba(255,255,255,.88)" : "rgba(255,255,255,.72)",
      }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
        <Link href="/#home" className="group text-base font-semibold tracking-[.18em]">
          HY
        </Link>
        <div className="flex items-center gap-4 sm:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative py-2 text-[13px] font-semibold tracking-[.18em] text-muted transition-colors hover:text-ink sm:text-sm"
            >
              {item.label}
              <motion.span
                animate={{ scaleX: active === item.label ? 1 : 0 }}
                className="absolute inset-x-0 -bottom-0.5 h-px origin-left bg-blue"
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
