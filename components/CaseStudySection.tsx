"use client";

import { fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";
import { HomeBeforeAfterVisual } from "./HomeBeforeAfterVisual";
import { ScrollableVisual } from "./ScrollableVisual";
import { Visual } from "./Visual";

type CaseStudySectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  points?: string[];
  visualLabel: string;
  visualSrc?: string;
  visualSrcs?: string[];
  visualLabels?: string[];
  visualStories?: {
    title: string;
    body: string;
    points?: string[];
  }[];
  videoSrc?: string;
  visualMode?: "default" | "scroll" | "home-before-after" | "alternating";
  hideVisual?: boolean;
  variant?: "default" | "hmw" | "direction-map" | "impact" | "challenge-map" | "research-flow" | "step-flow";
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
  visualSrcs,
  visualLabels,
  visualStories,
  videoSrc,
  visualMode = "default",
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

  if (variant === "challenge-map") {
    const branches = [
      {
        title: "New Product Context",
        items: ["El Cap espresso machine", "Intelligent display screen", "Dedicated mobile app"],
      },
      {
        title: "Expanded Workflows",
        items: ["Espresso brewing", "Parameter customization", "Recipe sharing"],
      },
      {
        title: "Experience Gap",
        items: ["Pour-over app foundation", "New espresso behaviors", "Disconnected touchpoints"],
      },
      {
        title: "Design Challenge",
        items: ["Simple for daily use", "Deep enough for enthusiasts", "Clear across phone and machine"],
      },
    ];

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
          <div className="mb-12 grid gap-8">
            <h2 className="max-w-5xl text-3xl font-semibold leading-[1.08] tracking-[-.025em] md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-muted md:text-xl md:leading-9">{body}</p>
            </div>
          </div>

          <div className="w-full rounded-[24px] bg-[#F7F7F5] p-5 md:p-8 lg:p-10">
            <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
              <div className="grid gap-5">
                {branches.slice(0, 2).map((branch) => (
                  <div key={branch.title} className="rounded-[20px] bg-white p-5 shadow-sm md:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[.18em] text-blue">
                      {branch.title}
                    </p>
                    <div className="mt-4 grid gap-2">
                      {branch.items.map((item) => (
                        <p key={item} className="text-sm leading-6 text-muted md:text-base">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative hidden w-44 md:block">
                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-blue/25" />
                <div className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-blue text-center text-sm font-semibold leading-5 text-white shadow-xl">
                  New product, Espresso Machine Launch
                </div>
              </div>

              <div className="grid gap-5">
                {branches.slice(2).map((branch) => (
                  <div key={branch.title} className="rounded-[20px] bg-white p-5 shadow-sm md:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[.18em] text-blue">
                      {branch.title}
                    </p>
                    <div className="mt-4 grid gap-2">
                      {branch.items.map((item) => (
                        <p key={item} className="text-sm leading-6 text-muted md:text-base">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-first rounded-[20px] bg-blue p-6 text-white md:hidden">
                <p className="text-sm font-semibold leading-6">
                  New product, Espresso Machine Launch
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  if (variant === "research-flow") {
    const flowItems = (points ?? []).map((point) => {
      const [stage, ...rest] = point.replace(/\.$/, "").split(": ");
      return {
        stage,
        detail: rest.join(": "),
      };
    });

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
          <div className="mb-12 grid gap-8">
            <h2 className="max-w-5xl text-3xl font-semibold leading-[1.08] tracking-[-.025em] md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-muted md:text-xl md:leading-9">{body}</p>
            </div>
          </div>

          <div className="w-full overflow-x-auto pb-3">
            <div className="grid min-w-[980px] grid-cols-6 items-stretch gap-0">
              {flowItems.map((item, index) => (
                <div key={item.stage} className="relative pr-5">
                  <div className="flex h-full min-h-[180px] flex-col justify-between rounded-[22px] border border-line bg-white p-5 shadow-sm">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[.18em] text-blue">
                        0{index + 1}
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold tracking-[-.03em]">
                        {item.stage}
                      </h3>
                    </div>
                    <p className="mt-8 text-sm leading-6 text-muted">{item.detail}</p>
                  </div>
                  {index < flowItems.length - 1 ? (
                    <div className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-blue/20 bg-blue text-white shadow-md">
                      →
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  if (variant === "step-flow") {
    const steps = (points ?? []).map((point) => {
      const [titleText, ...rest] = point.split(": ");
      return {
        title: titleText,
        detail: rest.join(": "),
      };
    });

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
          <div className="mb-10 grid gap-8">
            <h2 className="max-w-5xl text-3xl font-semibold leading-[1.08] tracking-[-.025em] md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-muted md:text-xl md:leading-9">{body}</p>
            </div>
          </div>

          <Visual src={visualSrc} label={visualLabel} aspect="wide" dark={dark} />

          <div className="mt-10 overflow-x-auto pb-3">
            <div className="grid min-w-[860px] grid-cols-3 gap-0">
              {steps.map((step, index) => (
                <div key={step.title} className="relative pr-6">
                  <div className="flex h-full min-h-[210px] flex-col rounded-[22px] border border-line bg-white p-6 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[.18em] text-blue">
                      Step 0{index + 1}
                    </p>
                    <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-.02em]">
                      {step.title}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-muted">{step.detail}</p>
                  </div>
                  {index < steps.length - 1 ? (
                    <div className="absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-blue/20 bg-blue text-white shadow-md">
                      →
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  if (visualMode === "home-before-after") {
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
          <div className="mb-12 grid gap-8">
            <h2 className="max-w-5xl text-3xl font-semibold leading-[1.08] tracking-[-.025em] md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-muted md:text-xl md:leading-9">{body}</p>
            </div>
          </div>
          <HomeBeforeAfterVisual
            videoSrc={videoSrc}
            videoTitle="Frequent actions stay close to the device."
            videoBody="The redesigned Home keeps the machine at the center while moving repeat drinks, status checks, and common actions into faster reach."
            videoPoints={points}
            images={(visualSrcs ?? []).map((src, index) => ({
              src,
              alt: visualLabel,
              label: visualLabels?.[index] ?? "",
            }))}
          />
        </div>
      </motion.section>
    );
  }

  if (visualMode === "alternating") {
    const visuals = visualSrcs ?? (visualSrc ? [visualSrc] : []);

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
          <div className="mb-14 grid gap-8">
            <h2 className="max-w-5xl text-3xl font-semibold leading-[1.08] tracking-[-.025em] md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-muted md:text-xl md:leading-9">{body}</p>
            </div>
          </div>

          <div className="grid w-full gap-16 md:gap-20">
            {visuals.map((src, index) => {
              const story = visualStories?.[index];
              const isVideo = /\.(mov|mp4|webm)$/i.test(src);
              const media = isVideo ? (
                <video
                  className="block w-full rounded-[20px] bg-black shadow-xl"
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              ) : (
                <img
                  src={src}
                  alt={visualLabel}
                  className="block h-auto w-full rounded-[20px] bg-black shadow-xl"
                />
              );

              return (
                <div
                  key={src}
                  className={`grid gap-10 md:items-center md:gap-20 ${
                    index % 2 === 1
                      ? "md:grid-cols-[minmax(0,1fr)_minmax(0,300px)]"
                      : "md:grid-cols-[minmax(0,300px)_minmax(0,1fr)]"
                  }`}
                >
                  <div
                    className={`w-full max-w-[300px] ${
                      index % 2 === 1 ? "md:order-2 md:justify-self-end" : "md:justify-self-start"
                    }`}
                  >
                    {media}
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[.22em] text-blue">
                      {visualLabels?.[index] ?? `Flow 0${index + 1}`}
                    </p>
                    <h3 className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-.02em] md:text-3xl">
                      {story?.title}
                    </h3>
                    <p className="mt-5 max-w-3xl text-base leading-7 text-muted md:text-lg md:leading-8">
                      {story?.body}
                    </p>
                    {story?.points ? (
                      <div className="mt-7 grid gap-3">
                        {story.points.map((point) => (
                          <div
                            key={point}
                            className="flex gap-4 border-t border-line pt-3 text-sm leading-6"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
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
          <div className={`mb-10 w-full md:mb-12 ${compactVisual ? "max-w-xl" : ""}`}>
            {visualMode === "scroll" ? (
              <ScrollableVisual
                dark={dark}
                images={(visualSrcs ?? (visualSrc ? [visualSrc] : [])).map((src, index) => ({
                  src,
                  alt: visualLabel,
                  label: visualLabels?.[index],
                }))}
              />
            ) : (
              <Visual
                src={visualSrc}
                label={visualLabel}
                aspect={compactVisual ? "square" : full ? "wide" : flip ? "tall" : "wide"}
                dark={dark}
              />
            )}
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
