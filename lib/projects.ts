export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  year: string;
  category: string;
  summary: string;
  cover: string;
  heroTone: string;
  role: string;
  timeline: string;
  team: string;
  platform: string;
  responsibilities: string[];
  caseSections?: {
    id: string;
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
    full?: boolean;
    flip?: boolean;
    compactVisual?: boolean;
    dark?: boolean;
  }[];
  story: {
    overview: string;
    context: string;
    problem: string;
    goals: string[];
    research: string[];
    architecture: string;
    flow: string;
    wireframes: string;
    exploration: string;
    solution: string;
    interaction: string;
    system: string[];
    outcome: string;
    reflection: string;
  };
};

export const projects: Project[] = [
  {
    slug: "smart-coffee-ecosystem",
    title: "xBloom Mobile App",
    eyebrow: "Project 01",
    year: "2026",
    category: "Connected Coffee Experience",
    summary:
      "A connected mobile experience that brings together brewing, personalization, and community for xBloom's next-generation espresso machine.",
    cover: "/work/xbloom/xbloom-hero.png",
    heroTone: "from-neutral-50 to-white",
    role: "Product Designer",
    timeline: "2026",
    team: "1 PM, 2 Designers, 4 Engineers",
    platform: "Mobile App, Display Screen",
    responsibilities: [
      "UX Design",
      "Interaction Design",
      "Visual Design",
      "Information Architecture",
    ],
    caseSections: [
      {
        id: "overview",
        eyebrow: "Overview",
        title: "Designing a connected coffee experience.",
        body:
          "Building on its existing Studio and Original pour-over coffee machines, xBloom introduced El Cap, a new espresso machine with an intelligent display screen and a dedicated mobile app. During my internship at xBloom, I designed and shipped the app from 0 to 1, collaborating closely with cross-functional stakeholders across product, engineering, and hardware. The project focused on shaping a connected experience across machine and phone, supporting espresso brewing, personalization, and community while keeping the product approachable for everyday coffee drinkers.",
        visualLabel: "Machine, phone, and coffee hero",
        visualSrc: "/work/xbloom/overview-machine.png",
        full: true,
      },
      {
        id: "challenge",
        eyebrow: "Challenge",
        title: "Supporting xBloom's transition into espresso.",
        body:
          "xBloom's original app was built for a precision pour-over coffee machine. With the launch of El Cap, users could now brew espresso, customize extraction parameters, and share recipes with others. The existing experience no longer supported these new workflows.",
        visualLabel: "Workflow gap and product transition",
        variant: "challenge-map",
      },
      {
        id: "research",
        eyebrow: "Research",
        title: "Reframing the app for a new machine launch.",
        body:
          "With the launch of El Cap, the app needed to evolve beyond its original pour-over experience. The redesign became an opportunity to rethink the full product journey, from discovering drinks and setting up recipes to brewing, saving, and sharing. Community was also a key part of this shift: the previous experience had limited engagement, so we explored how recipes, creators, and personalized discovery could strengthen retention and make users return more often.",
        points: [
          "Discover: find inspiration through recipes and community.",
          "Choose: pick a drink with clear recipe information.",
          "Customize: explore brewing through guided Taste Lab controls.",
          "Brew: make coffee through the connected machine.",
          "Save: keep favorites in a personal recipe library.",
          "Share: inspire others through community recipes.",
        ],
        visualLabel: "Research synthesis",
        hideVisual: true,
        variant: "research-flow",
      },
      {
        id: "hmw",
        eyebrow: "HMW",
        title: "How might we preserve advanced capability while making the path into it clearer and easier for everyone?",
        body: "",
        visualLabel: "How might we statement",
        hideVisual: true,
        variant: "hmw",
      },
      {
        id: "home",
        eyebrow: "Home",
        title: "Start brewing in seconds.",
        body:
          "The Home screen prioritizes the tasks users perform most frequently, helping people understand machine status and start brewing with as few steps as possible.",
        points: [
          "Machine status",
          "Quick Start",
          "Drink Menu",
          "Device Management",
          "Tutorials and updates",
          "Schedule your drink",
          "Save bean and brew information",
          "Clean the machine",
        ],
        visualLabel: "Home screen, quick start, and machine status",
        videoSrc: "/work/xbloom/home-demo.mov",
        visualMode: "home-before-after",
        full: true,
      },
      {
        id: "taste-lab",
        eyebrow: "Taste Lab",
        title: "Making espresso exploration accessible.",
        body:
          "Inspired by professional espresso tools, Taste Lab allows users to adjust brewing variables while providing templates that make experimentation approachable.",
        points: [
          "Customize brewing parameters",
          "Test recipes",
          "Save successful results",
          "Share creations with the community",
        ],
        visualLabel: "Brewing curve, parameter interface, and testing flow",
        visualSrcs: [
          "/work/xbloom/taste-lab-demo.mov",
          "/work/xbloom/taste-lab-parameters.png",
          "/work/xbloom/taste-lab-history.png",
        ],
        visualMode: "scroll",
        full: true,
        dark: true,
      },
      {
        id: "mall",
        eyebrow: "Mall",
        title: "Browsing and sorting help users narrow the list quickly.",
        body:
          "The mall gives users several simple ways to discover products, from promotions and categories to search results and sort controls. The experience keeps product browsing lightweight while supporting faster comparison.",
        points: [
          "Enter through promotions, categories, or product groups.",
          "Review search results without leaving the page.",
          "Open sorting controls in a focused bottom sheet.",
        ],
        visualLabel: "Mall browse and sort flow",
        visualSrcs: [
          "/work/xbloom/shop-demo.mov",
          "/work/xbloom/shop-search.png",
          "/work/xbloom/shop-sort-sheet.png",
        ],
        visualMode: "scroll",
        full: true,
      },
      {
        id: "community",
        eyebrow: "Community",
        title: "Recipes before social.",
        body:
          "Instead of building another social platform, Community is designed around recipes, creators, and taste discovery. The experience helps users find drinks they want to brew, understand the recipe, and adapt it into their own daily routine.",
        visualLabel: "Feed, recipe detail, and brew flow",
        visualSrcs: [
          "/work/xbloom/community-demo-2.mov",
          "/work/xbloom/community-demo-1.mov",
        ],
        visualLabels: ["Discovery feed", "Drink detail"],
        visualStories: [
          {
            title: "A personalized recipe feed.",
            body:
              "The Community feed uses a waterfall layout to recommend drinks based on user preferences, while also surfacing creators, popular recipes, and curated editorial moments from the xBloom team.",
            points: [
              "Recommend drinks around taste preferences and browsing behavior.",
              "Highlight creators and community activity to make discovery feel alive.",
              "Use operational columns and featured modules to guide seasonal exploration.",
            ],
          },
          {
            title: "Recipe details that invite interaction and remixing.",
            body:
              "Drink detail pages turn inspiration into action. Users can review ingredients and brew steps, interact with other coffee drinkers, and remix a community recipe into a version they can save and personalize.",
            points: [
              "Bring ingredients, steps, comments, and brewing actions into one flow.",
              "Support lightweight interaction through likes, saves, comments, and sharing.",
              "Let users remix a recipe instead of starting from scratch.",
            ],
          },
        ],
        visualMode: "alternating",
        full: true,
      },
      {
        id: "reflection",
        eyebrow: "Reflection",
        title: "Making power feel approachable.",
        body:
          "This was my first time designing an interaction experience that connected hardware, software, and a non-standard display. The process pushed me to think carefully about the limitations of the machine and screen while making each touchpoint feel understandable, useful, and easy to operate for users. It also strengthened my ability to communicate across teams, translating product goals, hardware constraints, and engineering requirements into a cohesive user experience.",
        visualLabel: "Reflection and future opportunities",
        hideVisual: true,
      },
    ],
    story: {
      overview:
        "The ecosystem connects discovery, drink personalization, machine control, and repeatable shortcuts into one calm product loop. The goal was to make specialty coffee feel precise without making the experience feel technical.",
      context:
        "Smart appliances often split the experience between physical controls, companion apps, and fragmented recipes. This concept treats the coffee machine, mobile app, and community layer as one continuous service.",
      problem:
        "Users want control over brew variables, but they do not want to manage dozens of exposed settings every morning. The core challenge was balancing confidence, speed, and craft.",
      goals: [
        "Reduce setup time for repeat drinks",
        "Make customization understandable before brewing",
        "Create continuity between mobile and embedded screen states",
        "Support community recipes without overwhelming beginners",
      ],
      research: [
        "Mapped rituals for new users, enthusiasts, and daily shortcut users",
        "Compared control models across coffee, smart home, and fitness products",
        "Identified moments where users need reassurance rather than more data",
      ],
      architecture:
        "The IA centers around Drinks, Machine, Community, and Shortcuts. Advanced settings are progressively disclosed inside recipe editing rather than exposed as primary navigation.",
      flow:
        "A user can discover a drink, preview strength and texture, send it to the machine, adjust live brew settings, and save the result as a one-tap shortcut.",
      wireframes:
        "Early wireframes tested whether controls should be recipe-first, machine-first, or shortcut-first. The final model keeps the morning path short while preserving deeper exploration.",
      exploration:
        "Visual exploration focused on quiet contrast, tactile controls, and a component language that could translate from phone to embedded screen.",
      solution:
        "The final solution pairs a mobile recipe workspace with a concise machine interface. Drink cards show intent first, then reveal temperature, ratio, milk texture, and timing when needed.",
      interaction:
        "Micro interactions reinforce physical feedback: brew progress, haptic ticks, live machine states, saved shortcut confirmation, and smooth transitions from recipe preview to active control.",
      system: [
        "Editorial type scale with compact machine states",
        "Tokenized spacing shared by mobile and embedded layouts",
        "Reusable controls for sliders, presets, shortcuts, and brew states",
        "Icon language for water, beans, milk, temperature, and maintenance",
      ],
      outcome:
        "The concept communicates a premium appliance ecosystem with clear daily utility: fewer steps for repeat drinks, better understanding for customization, and a stronger bridge between hardware and software.",
      reflection:
        "The most important trade-off was deciding what to hide. The design became stronger when advanced coffee knowledge was available, but never demanded from the user.",
    },
  },
  {
    slug: "k12-education-platform",
    title: "K12 Education Platform",
    eyebrow: "Project 03",
    year: "2025",
    category: "Marketing, Responsive Web, Growth",
    summary:
      "A responsive landing page redesign focused on clearer hierarchy, stronger conversion paths, and campaign-ready visual systems.",
    cover: "/work/education-desktop.png",
    heroTone: "from-blue-50 to-white",
    role: "Product Designer",
    timeline: "8 weeks",
    team: "Marketing, content, engineering",
    platform: "Responsive web, social campaign assets",
    responsibilities: [
      "Information hierarchy",
      "Landing page UX",
      "Responsive design",
      "Marketing system",
    ],
    story: {
      overview:
        "The redesign reframed a feature-heavy education platform into a confident story for school leaders, teachers, and families.",
      context:
        "The existing landing page tried to speak to every audience at once. The result was long, dense, and difficult to scan during evaluation.",
      problem:
        "Visitors could not quickly understand who the product served, why it mattered, or what action to take next.",
      goals: [
        "Improve above-the-fold clarity",
        "Create distinct paths for administrators, teachers, and parents",
        "Increase demo intent through stronger proof and sequencing",
        "Build reusable campaign assets from the same design language",
      ],
      research: [
        "Audited competitor landing pages and enrollment funnels",
        "Reviewed analytics to identify drop-off sections",
        "Mapped decision criteria for administrators and teachers",
      ],
      architecture:
        "The page narrative moves from outcome to proof to platform depth, with audience-specific entry points introduced before detailed feature sections.",
      flow:
        "The primary path guides a decision maker from promise, to evidence, to product fit, to demo request without forcing them through every feature.",
      wireframes:
        "Wireframes explored different levels of density for proof points, testimonials, and feature modules across desktop and mobile.",
      exploration:
        "The visual system uses direct typography, calm spacing, and flexible campaign modules that can be repurposed for social media.",
      solution:
        "The final experience introduces a stronger hero, sharper section sequencing, responsive product mockups, and concise social proof blocks.",
      interaction:
        "Motion is limited to section reveals, metric counters, card transitions, and navigation feedback so the page feels polished without slowing comprehension.",
      system: [
        "Reusable landing page sections",
        "Responsive image rules for desktop and mobile mockups",
        "Campaign cards, proof modules, and CTA patterns",
        "A clear tone system for educators and decision makers",
      ],
      outcome:
        "The redesign gives the platform a clearer market position and a more focused conversion path while supporting ongoing marketing campaigns.",
      reflection:
        "The biggest lesson was that education marketing needs warmth and precision at the same time: human outcomes first, product proof close behind.",
    },
  },
  {
    slug: "zilliz-cloud",
    title: "Zilliz Cloud",
    eyebrow: "Project 02",
    year: "2025",
    category: "Enterprise SaaS, Developer Experience",
    summary:
      "Reducing complexity in database collection creation for developers moving from open-source workflows into Zilliz Cloud.",
    cover: "/work/zilliz-hero.png",
    heroTone: "from-neutral-100 to-white",
    role: "Product Designer",
    timeline: "4 weeks",
    team: "1 PM, 2 Designers, 2 Developers",
    platform: "",
    responsibilities: [
      "Enterprise UX",
      "Workflow mapping",
      "Interaction design",
      "Before/after validation",
    ],
    caseSections: [
      {
        id: "overview",
        eyebrow: "Overview",
        title: "Designing a clearer onboarding path for vector database setup.",
        body:
          "Zilliz is a B2B company focused on vector database infrastructure, offering both open-source products and the commercial cloud product Zilliz Cloud. Many users enter Zilliz Cloud as developers and engineers migrating from open-source workflows, making collection creation one of the most important first experiences in the product.",
        visualLabel: "Zilliz Cloud create collection outcome",
        hideVisual: true,
        full: true,
      },
      {
        id: "challenge",
        eyebrow: "Challenge",
        title: "A core entry point with a high technical threshold.",
        body:
          "Creating a database collection required users to understand multiple technical concepts at once, including schema, index, partition, and optimization settings. In the previous flow, configuration items were complex and scattered, which increased cognitive load and made it easier for users to feel uncertain or make mistakes before they could successfully create a collection.",
        visualLabel: "Before create collection",
        visualSrc: "/work/zilliz-challenge-before.png",
        full: true,
      },
      {
        id: "research",
        eyebrow: "Research Insights",
        title: "The problem was not capability. It was how the capability was introduced.",
        body:
          "Research showed that users needed access to powerful configuration options, but they did not need every decision exposed with the same weight at the same moment. The key opportunity was to help users understand the system state faster while lowering the learning curve for first-time cloud setup.",
        points: [
          "Developers migrating from open-source workflows already understood the domain, but needed clearer cloud-specific guidance.",
          "Schema and optimization decisions created the highest cognitive load because they combined several technical concepts in one surface.",
          "Advanced settings were valuable, but they needed defaults, grouping, and contextual explanation.",
        ],
        visualLabel: "Before and research synthesis",
        hideVisual: true,
      },
      {
        id: "direction",
        eyebrow: "Design Direction",
        title: "Two directions shaped the redesign.",
        body:
          "The design moved away from a flat configuration page and toward a clearer structure based on user tasks. The first direction grouped information by task, so users could understand basic information, schema setup, and optimization settings as separate decisions. The second direction introduced progressive guidance, allowing users to complete the minimum setup first and expand into advanced settings with recommended defaults and contextual help.",
        points: [
          "Group configuration by task: basic information, schema definition, performance and index settings, and data partitioning.",
          "Guide progressively: start with MVP setup, then reveal advanced settings when they become useful.",
        ],
        visualLabel: "Design directions",
        variant: "direction-map",
        full: true,
        dark: true,
      },
      {
        id: "flow",
        eyebrow: "Final Flow",
        title: "A simpler path from setup to creation.",
        body:
          "The final flow breaks collection creation into a clearer sequence. Instead of asking users to process every technical setting at once, the redesign starts with the minimum setup, then guides users into schema creation and optimization only when each decision becomes relevant.",
        points: [
          "Basic setup: enter collection information first and keep advanced decisions out of the initial step.",
          "Create schema: use a clearer two-column structure and move detailed configuration into setting icons.",
          "Optimization: introduce recommended defaults and contextual explanations for index, partition, mmap, shard, and consistency choices.",
        ],
        visualLabel: "Create collection final flow",
        visualSrc: "/work/zilliz-final-flow.mov",
        variant: "step-flow",
        full: true,
      },
      {
        id: "impact",
        eyebrow: "Impact",
        title: "The redesigned flow improved completion after launch.",
        body:
          "After the redesign was completed in early 2025, the Create Collection flow reached a 44% completion rate. The result reflected a clearer path through a technically complex setup, helping users move from basic information to schema creation and optimization settings with less friction.",
        visualLabel: "Impact metric",
        hideVisual: true,
        variant: "impact",
        full: true,
      },
    ],
    story: {
      overview:
        "Collection creation is a critical developer workflow. The redesign organizes advanced database decisions into a guided path that feels faster, clearer, and less error-prone.",
      context:
        "Vector database users range from first-time AI builders to experienced infrastructure teams. The interface had to support both without flattening the workflow.",
      problem:
        "Important decisions were presented with similar weight, making it difficult to understand dependencies between schema, index, capacity, and deployment choices.",
      goals: [
        "Clarify the mental model for collection setup",
        "Group tasks by decision type",
        "Expose advanced configuration only when useful",
        "Reduce errors before collection creation",
      ],
      research: [
        "Reviewed support tickets and setup failure patterns",
        "Mapped the workflow against documentation and CLI expectations",
        "Benchmarked developer onboarding patterns across cloud dashboards",
      ],
      architecture:
        "The new architecture groups setup into Basics, Schema, Index, Capacity, and Review. Each step includes contextual education and dependency-aware validation.",
      flow:
        "The end-to-end flow introduces decision points only after the user has enough context, with a persistent summary that keeps technical choices visible.",
      wireframes:
        "Wireframes tested a wizard, single-page form, and hybrid progressive layout. The hybrid structure provided the best balance of speed and guidance.",
      exploration:
        "Design exploration focused on dense but readable enterprise UI: crisp tables, low-noise inputs, and explicit before/after states.",
      solution:
        "The final solution creates a guided creation path with smarter defaults, grouped advanced settings, and a review screen that catches mismatches before submission.",
      interaction:
        "Interactions focus on inline validation, dependency hints, collapsible advanced sections, and a persistent progress model.",
      system: [
        "Enterprise form components",
        "Validation and helper text patterns",
        "Flow diagram and architecture modules",
        "Before/after comparison framework",
      ],
      outcome:
        "The experience is designed to reduce cognitive load while preserving the precision expected from a database product.",
      reflection:
        "Developer tools become more trustworthy when the interface explains why a decision matters, not just what fields are required.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
