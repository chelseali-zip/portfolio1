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
  hideVisual?: boolean;
  variant?: "default" | "hmw";
  flip?: boolean;
  full?: boolean;
  dark?: boolean;
};

export function CaseStudySection({
  id,
  eyebrow,
  title,
  body,
  points,
  visualLabel,
  hideVisual = false,
  variant = "default",
  flip = false,
  full = false,
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
          <h2 className="max-w-5xl text-4xl font-semibold leading-[1.18] tracking-[-.035em] md:text-5xl md:leading-[1.16] lg:text-6xl lg:leading-[1.14]">
            How might we preserve{" "}
            <span className={highlightClass}>advanced capability</span> while making the path into
            it <span className={highlightClass}>clearer</span> and{" "}
            <span className={highlightClass}>easier for everyone</span>?
          </h2>
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
          <div className="mb-10 md:mb-12">
            <Visual label={visualLabel} aspect={full ? "wide" : flip ? "tall" : "wide"} dark={dark} />
          </div>
        ) : null}
        <div className="grid gap-8">
          <h2 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-.03em] md:text-5xl lg:text-6xl">
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
