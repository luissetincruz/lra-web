import type { HomeDictionary } from "@/i18n/types";

export const en = {
  page: {
    skipToContent: "Skip to content",
  },

  header: {
    homeAriaLabel: "LRA Software — home page",
    navigationAriaLabel: "Main navigation",
    languageSwitcherAriaLabel: "Select language",
    navigation: [
      { href: "#servicos", label: "Services" },
      { href: "#como-trabalhamos", label: "How we work" },
      { href: "#sobre", label: "About" },
    ],
    projectCta: "Discuss a project",
    mobile: {
      openMenuLabel: "Open menu",
      closeMenuLabel: "Close menu",
      navigationAriaLabel: "Mobile navigation",
    },
  },

  hero: {
    eyebrow: "Software built for real-world operations",
    title: "Technology that reduces manual work and gets solutions into production.",
    description:
      "LRA builds custom systems, automations, integrations, and AI-powered solutions for companies that need to streamline processes and operate more efficiently.",
    primaryCta: "Discuss a project",
    secondaryCta: "Explore our services",
    capabilitiesAriaLabel: "Main services",
    capabilities: ["Custom software", "Automation and integrations", "AI for operations"],
    flow: {
      eyebrow: "Development workflow",
      title: "From business need to production",
      status: "In production",
      steps: [
        {
          number: "01",
          title: "Understand the operation",
          description:
            "Map the process, business rules, systems involved, and areas where manual work creates unnecessary overhead.",
        },
        {
          number: "02",
          title: "Build and integrate",
          description:
            "Develop the application, API, automation, or integration needed to solve the problem.",
        },
        {
          number: "03",
          title: "Deploy to production",
          description:
            "Launch the solution, monitor real-world usage, and evolve it as the operation matures.",
        },
      ],
      technologies: ["APIs", "Webhooks", "Cloud", "Automation", "AI"],
    },
  },

  services: {
    eyebrow: "Services",
    title: "Technical solutions built around real business problems.",
    description:
      "LRA works from understanding the operation through development, integration, deployment, and ongoing evolution of the solution.",
    items: [
      {
        code: "SYS",
        title: "Custom software",
        description:
          "Internal applications, web platforms, and digital products built around the company's workflows and business rules.",
        capabilities: ["Web applications", "Admin dashboards", "Portals and platforms"],
      },
      {
        code: "AUT",
        title: "Automation and integrations",
        description:
          "Connecting systems, eliminating repetitive tasks, and creating automated workflows to reduce operational overhead.",
        capabilities: ["n8n and webhooks", "API integrations", "Automated workflows"],
      },
      {
        code: "AI",
        title: "Applied artificial intelligence",
        description:
          "Using language models and AI agents to support customer service, data analysis, content review, and internal processes.",
        capabilities: ["OpenAI API", "Chatbots", "Agents and assistants"],
      },
      {
        code: "API",
        title: "APIs and back-end",
        description:
          "Development of services, integrations, and back-end infrastructure for applications that need to operate securely and consistently.",
        capabilities: ["REST and webhooks", "Node.js and Laravel", "Databases"],
      },
      {
        code: "MOD",
        title: "Modernization and maintenance",
        description:
          "Evolving existing systems, fixing technical issues, improving architecture, and gradually modernizing production applications.",
        capabilities: ["Legacy systems", "Performance", "Infrastructure and deployment"],
      },
      {
        code: "CON",
        title: "Technical consulting",
        description:
          "Support with requirements analysis, architecture, technical decisions, and the organization of new software projects.",
        capabilities: ["Technical assessment", "Architecture", "Product planning"],
      },
    ],
  },

  process: {
    eyebrow: "How we work",
    title: "From understanding the problem to a solution running in production.",
    description:
      "The process is structured to reduce uncertainty, validate decisions early, and keep the project connected to real operational needs.",
    principles: [
      {
        title: "Direct communication",
        description:
          "Decisions, limitations, and risks are communicated clearly throughout the project.",
      },
      {
        title: "Incremental delivery",
        description:
          "Projects are divided into useful stages, avoiding long periods without validation.",
      },
      {
        title: "Operational perspective",
        description:
          "Technology decisions consider people, processes, infrastructure, and long-term maintenance.",
      },
      {
        title: "Technical simplicity",
        description:
          "Solutions should remain as simple as possible without compromising security or future evolution.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Discovery and definition",
        description:
          "We start by understanding the current process, the people involved, the business rules, and the systems that need to work together.",
        deliverables: ["Problem assessment", "Initial scope definition", "Delivery prioritization"],
      },
      {
        number: "02",
        title: "Development and validation",
        description:
          "The solution is built incrementally, allowing technical and functional decisions to be validated before moving into more complex stages.",
        deliverables: [
          "Incremental implementation",
          "Technical and functional validation",
          "Integrations and testing",
        ],
      },
      {
        number: "03",
        title: "Deployment and evolution",
        description:
          "After going live, we monitor how the solution performs in real-world use and identify adjustments and opportunities for improvement.",
        deliverables: ["Deployment and setup", "Initial monitoring", "Maintenance and evolution"],
      },
    ],
  },

  about: {
    eyebrow: "About LRA",
    title: "Development, integration, and product thinking in the same project.",
    description:
      "LRA Software builds digital solutions for companies that need to streamline processes, connect systems, and turn operational needs into working software.",
    descriptionSecondary:
      "Our work combines front-end and back-end development, databases, APIs, automation, cloud infrastructure, and artificial intelligence. This allows us to support projects from problem definition through production deployment.",
    technologiesAriaLabel: "Technologies used by LRA",
    technologies: [
      "Node.js",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Laravel",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "AWS",
      "n8n",
      "OpenAI",
    ],
    capabilities: [
      {
        title: "End-to-end perspective",
        description:
          "Problem analysis, user experience, development, integrations, infrastructure, and deployment.",
      },
      {
        title: "Experience with real-world systems",
        description:
          "Software built and evolved with real operations, users, business rules, and long-term maintenance in mind.",
      },
      {
        title: "Technology with purpose",
        description:
          "Technical decisions start with the problem that needs to be solved, not simply with the tools available.",
      },
    ],
  },

  contact: {
    eyebrow: "Let's talk",
    title: "Could one of your processes work better with software?",
    description:
      "Tell us briefly about your current setup, the problem you want to solve, and which systems or people are part of the process.",
    topicsAriaLabel: "Project types",
    topics: ["Internal systems", "Automation", "Integrations", "AI applications", "Modernization"],
    projectCta: "Discuss a project",
    emailSubject: "Project inquiry for LRA Software",
    emailHint: "Your email application will open to send the message.",
  },

  footer: {
    homeAriaLabel: "LRA Software — home page",
    description:
      "Custom software, automation, integrations, and artificial intelligence applied to real-world operations.",
    navigationAriaLabel: "Footer navigation",
    navigation: [
      { href: "#inicio", label: "Home" },
      { href: "#servicos", label: "Services" },
      { href: "#como-trabalhamos", label: "How we work" },
      { href: "#sobre", label: "About" },
      { href: "#contato", label: "Contact" },
    ],
    copyright: "All rights reserved.",
  },
} satisfies HomeDictionary;
