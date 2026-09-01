import { CaseStudySection } from "@/components/CaseStudySection";
import { CaseStudyNav } from "@/components/CaseStudyNav";
import { Visual } from "@/components/Visual";
import { getProject, projects } from "@/lib/projects";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects
    .filter((project) => project.available !== false)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return {
    title: project ? `${project.title} | HY Portfolio` : "Case Study",
    description: project?.summary,
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || project.available === false) notFound();

  const responsibilities = project.responsibilities.join(" / ");
  const sections = project.caseSections ?? [
    {
      id: "method",
      eyebrow: "Method",
      title: "A product story with a clear center of gravity.",
      body: project.story.overview,
      visualLabel: "Product overview image",
      full: true,
    },
    {
      id: "limitations",
      eyebrow: "Limitations",
      title: "The friction behind the interface.",
      body: project.story.problem,
      visualLabel: "Pain point diagram",
      dark: true,
    },
    {
      id: "goals",
      eyebrow: "Goals",
      title: "What the work needed to make possible.",
      body:
        "The project needed to create a clearer product path while respecting technical, business, and user constraints.",
      points: project.story.goals,
      visualLabel: "Goals and metrics",
      flip: true,
    },
    {
      id: "research",
      eyebrow: "Research",
      title: "Turning ambiguity into product decisions.",
      body:
        "Research translated ambiguity into a sharper set of product decisions and helped define what the interface should explain, hide, or make faster.",
      points: project.story.research,
      visualLabel: "Research synthesis",
      full: true,
    },
    {
      id: "wireframes",
      eyebrow: "Wireframes",
      title: "Exploring shape before polish.",
      body: project.story.wireframes,
      visualLabel: "Wireframe exploration",
    },
    {
      id: "exploration",
      eyebrow: "Design Exploration",
      title: "Finding the right visual and interaction language.",
      body: project.story.exploration,
      visualLabel: "Design exploration board",
      full: true,
    },
    {
      id: "solution",
      eyebrow: "Final Solution",
      title: "The final experience, shown through the moments that matter.",
      body: project.story.solution,
      visualLabel: "Final interface showcase",
      full: true,
      dark: true,
    },
    {
      id: "reflection",
      eyebrow: "Reflection",
      title: "What changed in the work, and what I would sharpen next.",
      body: project.story.reflection,
      visualLabel: "Reflection image",
      flip: true,
    },
  ];
  const caseStudyNav = sections.map((section) => ({
    label: section.eyebrow,
    href: `#${section.id}`,
  }));

  return (
    <main className="bg-paper pt-16 text-ink">
      <section className="px-8 pb-14 pt-4 sm:px-12 md:pb-16 lg:px-24 xl:px-36 2xl:px-48">
        <div className="mx-auto max-w-[1440px]">
          <Link
            href="/#work"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" /> Back to work
          </Link>
          <div className="grid gap-10">
            <div className="max-w-5xl">
              <h1 className="text-balance text-5xl font-semibold leading-[1.04] tracking-[-.025em] md:text-6xl lg:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-4xl text-xl leading-9 text-muted md:text-2xl md:leading-10">
                {project.summary}
              </p>
            </div>
            <Visual src={project.cover} label="Large hero image" aspect="hero" />
            <dl className="grid gap-x-10 gap-y-5 border-y border-line py-5 text-sm sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Role", project.role],
                ["Team", project.team],
                ["Platform", project.platform],
                ["Responsibilities", responsibilities],
              ]
                .filter(([, value]) => value)
                .map(([label, value]) => (
                <div key={label} className="min-w-0">
                  <dt className="text-muted">{label}</dt>
                  <dd className="mt-2 font-medium leading-6">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="px-8 sm:px-12 lg:px-24 xl:px-36 2xl:px-48">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[170px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <CaseStudyNav items={caseStudyNav} />
          </aside>
          <div className="min-w-0">
            {sections.map((section) => (
              <CaseStudySection key={section.id} {...section} />
            ))}
          </div>
        </div>
      </section>
      <footer className="flex flex-col justify-between gap-5 px-8 py-8 text-sm text-muted sm:px-12 md:flex-row lg:px-24 xl:px-36 2xl:px-48">
        <span>© 2026 HY Product Design Portfolio. This site is best viewed in desktop.</span>
        <Link href="#" className="font-medium text-ink">
          Back to top
        </Link>
      </footer>
    </main>
  );
}
