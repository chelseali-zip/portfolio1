"use client";

import { Project } from "@/lib/projects";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.65, delay: index * 0.06, ease: [0.65, 0, 0.35, 1] }}
      className={`grid gap-10 border-t border-line py-20 md:grid-cols-12 md:items-center md:gap-16 md:py-28 ${
        index % 2 ? "" : "md:[&_.image-col]:order-2"
      }`}
    >
      <Link
        href={`/work/${project.slug}`}
        className="image-col group relative block aspect-[16/11] overflow-hidden rounded-[28px] bg-neutral-100 md:col-span-7"
        aria-label={`Open ${project.title} case study`}
      >
        <Image
          src={project.cover}
          alt={`${project.title} cover`}
          fill
          sizes="(max-width: 768px) 100vw, 58vw"
          className="object-cover transition duration-700 ease-editorial group-hover:scale-[1.035]"
        />
      </Link>
      <div className="md:col-span-5">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[.2em] text-muted">
          {project.eyebrow} / {project.year}
        </p>
        <Link href={`/work/${project.slug}`} className="group inline-flex items-start gap-4">
          <h3 className="max-w-xl text-4xl font-semibold leading-[.98] tracking-[-.03em] md:text-6xl">
            {project.title}
          </h3>
          <ArrowUpRight className="mt-2 h-6 w-6 shrink-0 text-blue transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
        <p className="mt-6 text-sm font-medium uppercase tracking-[.16em] text-blue">
          {project.category}
        </p>
        <p className="mt-5 max-w-lg text-lg leading-8 text-muted">{project.summary}</p>
      </div>
    </motion.article>
  );
}
