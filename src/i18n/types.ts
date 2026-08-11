export type Locale = "pt-BR" | "en";

export type NavigationItem = Readonly<{
  href: string;
  label: string;
}>;

type SectionHeadingContent = Readonly<{
  eyebrow: string;
  title: string;
  description: string;
}>;

export type HomeDictionary = Readonly<{
  page: {
    skipToContent: string;
  };

  header: {
    homeAriaLabel: string;
    navigationAriaLabel: string;
    languageSwitcherAriaLabel: string;
    navigation: readonly NavigationItem[];
    projectCta: string;
    mobile: {
      openMenuLabel: string;
      closeMenuLabel: string;
      navigationAriaLabel: string;
    };
  };

  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    capabilitiesAriaLabel: string;
    capabilities: readonly string[];
    flow: {
      eyebrow: string;
      title: string;
      status: string;
      steps: readonly {
        number: string;
        title: string;
        description: string;
      }[];
      technologies: readonly string[];
    };
  };

  services: SectionHeadingContent & {
    items: readonly {
      code: string;
      title: string;
      description: string;
      capabilities: readonly string[];
    }[];
  };

  process: SectionHeadingContent & {
    principles: readonly {
      title: string;
      description: string;
    }[];
    steps: readonly {
      number: string;
      title: string;
      description: string;
      deliverables: readonly string[];
    }[];
  };

  about: SectionHeadingContent & {
    descriptionSecondary: string;
    technologiesAriaLabel: string;
    technologies: readonly string[];
    capabilities: readonly {
      title: string;
      description: string;
    }[];
  };

  contact: {
    eyebrow: string;
    title: string;
    description: string;
    topicsAriaLabel: string;
    topics: readonly string[];
    projectCta: string;
    emailSubject: string;
    emailHint: string;
  };

  privacy: {
    dialogAriaLabel: string;
    title: string;
    description: string;
    reject: string;
    accept: string;
    preferencesButton: string;
  };

  footer: {
    homeAriaLabel: string;
    description: string;
    navigationAriaLabel: string;
    navigation: readonly NavigationItem[];
    copyright: string;
  };
}>;
