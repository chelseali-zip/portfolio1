"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { Visual } from "@/components/Visual";
import { fadeUp, stagger } from "@/lib/motion";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const rotatingTitles = ["Product Designer", "Visual Designer", "UX Designer"];
const homeProjects = [
  "smart-coffee-ecosystem",
  "zilliz-cloud",
  "k12-education-platform",
  "coming-soon",
]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

function RotatingHeroTitle() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = rotatingTitles[titleIndex];
    const isComplete = displayText === currentTitle;
    const isEmpty = displayText.length === 0;
    const delay = isComplete && !isDeleting ? 1200 : isDeleting ? 82 : 72;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setTitleIndex((current) => (current + 1) % rotatingTitles.length);
        return;
      }

      setDisplayText((current) =>
        isDeleting ? current.slice(0, -1) : currentTitle.slice(0, current.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <motion.h1
      {...fadeUp}
      className="max-w-[9.6em] text-[clamp(4.25rem,8vw,8.75rem)] font-semibold leading-[1.02] tracking-[-.025em]"
    >
      <span>Hanyi Li is a</span>
      <br />
      <span className="mt-4 block min-h-[1.02em] whitespace-nowrap md:mt-6">
        {displayText}
        <motion.span
          aria-hidden="true"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
          className="ml-3 inline-block h-[.82em] w-[.085em] translate-y-[.08em] bg-ink"
        />
      </span>
    </motion.h1>
  );
}

export default function Home() {
  return (
    <main id="home" className="bg-paper text-ink">
      <section className="editorial-grid px-8 pb-16 pt-24 sm:px-10 md:pb-20 md:pt-28 lg:px-16 lg:pb-24 xl:px-24">
        <div className="mx-auto grid max-w-[1440px] gap-10">
          <motion.div {...stagger}>
            <motion.p
              {...fadeUp}
              className="mb-8 text-xs font-semibold uppercase tracking-[.24em] text-blue"
            >
              UX / Interaction / Design Systems
            </motion.p>
            <RotatingHeroTitle />
          </motion.div>
          <motion.div
            {...fadeUp}
            className="max-w-3xl"
          >
            <p className="text-xl leading-9 text-muted md:text-2xl md:leading-10">
              Hanyi Li is a product designer specializing in UX, visual design, branding, and
              thoughtful digital experiences.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#work"
                className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-neutral-700"
              >
                View Work <ArrowDown className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold transition duration-300 hover:border-neutral-200 hover:bg-neutral-100"
              >
                Contact <Mail className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="mx-auto mt-14 flex max-w-[1440px] items-end justify-start text-xs uppercase tracking-[.18em] text-muted md:mt-16">
          <span className="hidden md:block">Scroll</span>
        </div>
      </section>

      <section id="work" className="px-8 py-16 sm:px-10 md:py-24 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1440px]">
          {homeProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="about" className="px-8 py-24 sm:px-10 md:py-32 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
          <motion.div {...fadeUp} className="md:col-span-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[.24em] text-blue">About</p>
            <h2 className="text-balance text-5xl font-semibold leading-[.96] tracking-[-.04em] md:text-7xl">
              A designer for ambitious products and humane systems.
            </h2>
            <p className="mt-8 text-xl leading-9 text-muted">
              Hanyi Li is a multidisciplinary designer with strong visual design skills,
              specializing in digital product design & brand identity across B2C spaces. With over
              a year of experience across diverse industries, she brings a thoughtful, user-centered
              approach to every project, bridging aesthetics with functionality to create impactful
              digital experiences.
            </p>
            <div className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-2">
              {[
                ["Experience", "Consumer apps, enterprise SaaS, connected hardware, AI workflows"],
                [
                  "Skills",
                  "Branding, Marketing Design, UX and Analysis, UI Design, Usability Testing, Responsive Design Solutions",
                ],
                ["Tools", "Figma, Adobe Creative Suites, Codex, Claude"],
                [
                  "Education",
                  "Pratt Institute, BFA Graphic Design, University of Michigan, MS Information Science",
                ],
              ].map(([title, body]) => (
                <div key={title}>
                  <h3 className="text-sm font-semibold uppercase tracking-[.18em]">{title}</h3>
                  <p className="mt-3 leading-7 text-muted">{body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="border-t border-line px-8 py-24 sm:px-10 md:py-32 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
          <motion.div {...fadeUp} className="md:col-span-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[.24em] text-blue">
              Contact
            </p>
            <h2 className="text-balance text-5xl font-semibold leading-[.96] tracking-[-.04em] md:text-8xl">
              Let’s build meaningful products together.
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="md:col-span-4 md:self-end">
            <div className="grid gap-1 text-lg">
              <a className="group flex items-center justify-between border-t border-line py-4 transition-colors hover:text-muted" href="mailto:lihanyi1044@gmail.com">
                Email <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a className="group flex items-center justify-between border-t border-line py-4 transition-colors hover:text-muted" href="https://www.linkedin.com/in/chelsea-hanyi-li-b5483528a/" target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a className="group flex items-center justify-between border-y border-line py-4 transition-colors hover:text-muted" href="mailto:lihanyi1044@gmail.com?subject=Resume%20request">
                Resume upon request <Mail className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="flex flex-col justify-between gap-5 px-8 py-8 text-sm text-muted sm:px-10 md:flex-row lg:px-16 xl:px-24">
        <span>© 2026 HY Product Design Portfolio</span>
        <Link href="#home" className="font-medium text-ink">
          Back to top
        </Link>
      </footer>
    </main>
  );
}
