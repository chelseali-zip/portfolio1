"use client";

import { fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";
import { Visual } from "./Visual";

type CaseStudySectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  points?: string[];
  visualLabel: string;
  visualSrc?: string;
  hideVisual?: boolean;
  variant?: "default" | "hmw" | "direction-map" | "impact";
  flip?: boolean;
  full?: boolean;
  compactVisual?: boolean;
  dark?: boolean;
};

export function CaseStudySection({
  id,
  eyebrow,
  title,
  body,
  points,
  visualLabel,
  visualSrc,
  hideVisual = false,
  variant = "default",
  flip = false,
  full = false,
  compactVisual = false,
  dark = false,
}: CaseStudySectionProps) {
  if (variant === "hmw") {
    const highlightClass =
      "bg-[linear-gradient(to_top,rgba(37,99,235,.22)_0%,rgba(37,99,235,.22)_34%,transparent_34%,transparent_100%)] px-1";

    return (
      <motion.section
        id={id}
        {...fadeUp}
        className="scroll-mt-24 border-t border-line py-14 md:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1120px] px-0">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[.22em] text-blue">
            {eyebrow}
          </p>
          <h2 className="max-w-5xl text-3xl font-semibold leading-[1.2] tracking-[-.03em] md:text-4xl md:leading-[1.18] lg:text-5xl lg:leading-[1.16]">
            How might we preserve{" "}
            <span className={highlightClass}>advanced capability</span> while making the path into
            it <span className={highlightClass}>clearer</span> and{" "}
            <span className={highlightClass}>easier for everyone</span>?
          </h2>
        </div>
      </motion.section>
    );
  }

  if (variant === "direction-map") {
    return (
      <motion.section
        id={id}
        {...fadeUp}
        className="scroll-mt-24 border-t border-line py-14 md:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1120px] px-0">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[.22em] text-blue">
            {eyebrow}
          </p>
          <div className="mb-10 overflow-hidden rounded-[28px] border border-line bg-white p-6 md:p-10">
            <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
              <div className="rounded-3xl border border-line bg-[#F7F7F5] p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue">
                  Direction 01
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                  Structure by task
                </h3>
                <p className="mt-5 text-base leading-7 text-muted">
                  Group scattered configuration into basic information, schema definition,
                  performance settings, and partition logic.
                </p>
              </div>
              <div className="hidden h-px w-16 bg-blue/30 md:block" />
              <div className="rounded-3xl border border-blue/20 bg-blue/5 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue">
                  Goal
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                  Make setup easier to parse
                </h3>
                <p className="mt-5 text-base leading-7 text-muted">
                  Help users understand one decision at a time instead of processing every
                  technical setting on one flat page.
                </p>
              </div>
            </div>
            <div className="my-8 h-px bg-line" />
            <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
              <div className="rounded-3xl border border-line bg-[#F7F7F5] p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue">
                  Direction 02
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                  Guide progressively
                </h3>
                <p className="mt-5 text-base leading-7 text-muted">
                  Start with the minimum setup, then reveal advanced settings through defaults,
                  recommendations, setting icons, and contextual tooltips.
                </p>
              </div>
              <div className="hidden h-px w-16 bg-blue/30 md:block" />
              <div className="rounded-3xl border border-blue/20 bg-blue/5 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue">
                  Goal
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                  Lower cognitive load
                </h3>
                <p className="mt-5 text-base leading-7 text-muted">
                  Preserve technical depth while helping new cloud users avoid missing important
                  information or making early setup mistakes.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-8">
            <h2 className="max-w-5xl text-3xl font-semibold leading-[1.08] tracking-[-.025em] md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-muted md:text-xl md:leading-9">{body}</p>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  if (variant === "impact") {
    return (
      <motion.section
        id={id}
        {...fadeUp}
        className="scroll-mt-24 border-t border-line py-14 md:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1120px] px-0">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[.22em] text-blue">
            {eyebrow}
          </p>
          <div className="grid gap-10 md:grid-cols-[minmax(0,420px)_minmax(0,1fr)] md:items-end">
            <div>
              <p className="text-[clamp(6rem,14vw,12rem)] font-semibold leading-none tracking-[-.07em] text-blue">
                44%
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-[-.02em] md:text-3xl">
                completion rate
              </p>
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-.025em] md:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-7 text-lg leading-8 text-muted md:text-xl md:leading-9">{body}</p>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      id={id}
      {...fadeUp}
      className="scroll-mt-24 border-t border-line py-14 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1120px] px-0">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[.22em] text-blue">
          {eyebrow}
        </p>
        {!hideVisual ? (
          <div className={`mb-10 md:mb-12 ${compactVisual ? "max-w-xl" : ""}`}>
            <Visual
              src={visualSrc}
              label={visualLabel}
              aspect={compactVisual ? "square" : full ? "wide" : flip ? "tall" : "wide"}
              dark={dark}
            />
          </div>
        ) : null}
        <div className="grid gap-8">
          <h2 className="max-w-5xl text-3xl font-semibold leading-[1.08] tracking-[-.025em] md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-muted md:text-xl md:leading-9">{body}</p>
          {points ? (
            <div className="mt-8 grid gap-3">
              {points.map((point) => (
                <div key={point} className="flex gap-4 border-t border-line pt-3 text-sm leading-6">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          ) : null}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
