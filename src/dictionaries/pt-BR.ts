import type { HomeDictionary } from "@/i18n/types";

export const ptBR = {
  page: {
    skipToContent: "Pular para o conteúdo",
  },

  header: {
    homeAriaLabel: "LRA Software — página inicial",
    navigationAriaLabel: "Navegação principal",
    languageSwitcherAriaLabel: "Selecionar idioma",
    navigation: [
      { href: "#servicos", label: "Serviços" },
      { href: "#como-trabalhamos", label: "Como trabalhamos" },
      { href: "#sobre", label: "Sobre" },
    ],
    projectCta: "Falar sobre um projeto",
    mobile: {
      openMenuLabel: "Abrir menu",
      closeMenuLabel: "Fechar menu",
      navigationAriaLabel: "Navegação mobile",
    },
  },

  hero: {
    eyebrow: "Software aplicado a operações reais",
    title: "Tecnologia para reduzir trabalho manual e colocar soluções em produção.",
    description:
      "A LRA desenvolve sistemas, automações, integrações e soluções com inteligência artificial para empresas que precisam organizar processos e operar com mais eficiência.",
    primaryCta: "Conversar sobre um projeto",
    secondaryCta: "Conhecer os serviços",
    capabilitiesAriaLabel: "Principais serviços",
    capabilities: ["Sistemas sob medida", "Automações e integrações", "IA aplicada à operação"],
    flow: {
      eyebrow: "Fluxo de desenvolvimento",
      title: "Da necessidade à operação",
      status: "Em produção",
      steps: [
        {
          number: "01",
          title: "Entender a operação",
          description:
            "Mapear o processo, as regras de negócio, os sistemas envolvidos e os pontos de retrabalho.",
        },
        {
          number: "02",
          title: "Construir e integrar",
          description:
            "Desenvolver a aplicação, API, automação ou integração necessária para resolver o problema.",
        },
        {
          number: "03",
          title: "Colocar em produção",
          description:
            "Implantar, acompanhar o uso real e evoluir a solução conforme a operação amadurece.",
        },
      ],
      technologies: ["APIs", "Webhooks", "Cloud", "Automação", "IA"],
    },
  },

  services: {
    eyebrow: "Serviços",
    title: "Soluções técnicas conectadas ao problema real da empresa.",
    description:
      "A LRA atua desde o entendimento da operação até o desenvolvimento, integração, implantação e evolução da solução.",
    items: [
      {
        code: "SYS",
        title: "Sistemas sob medida",
        description:
          "Aplicações internas, plataformas web e produtos digitais construídos de acordo com a operação e as regras de negócio da empresa.",
        capabilities: ["Aplicações web", "Painéis administrativos", "Portais e plataformas"],
      },
      {
        code: "AUT",
        title: "Automações e integrações",
        description:
          "Conexão entre sistemas, eliminação de tarefas repetitivas e criação de fluxos automáticos para reduzir retrabalho operacional.",
        capabilities: ["n8n e webhooks", "Integrações de APIs", "Fluxos automatizados"],
      },
      {
        code: "IA",
        title: "Inteligência artificial aplicada",
        description:
          "Uso de modelos de linguagem e agentes para apoiar atendimento, análise de dados, revisão de conteúdo e processos internos.",
        capabilities: ["OpenAI API", "Chatbots", "Agentes e assistentes"],
      },
      {
        code: "API",
        title: "APIs e back-end",
        description:
          "Desenvolvimento de serviços, integrações e estruturas de back-end para aplicações que precisam operar com segurança e consistência.",
        capabilities: ["REST e webhooks", "Node.js e Laravel", "Bancos de dados"],
      },
      {
        code: "MOD",
        title: "Modernização e manutenção",
        description:
          "Evolução de sistemas existentes, correção de problemas, melhoria de arquitetura e atualização gradual de aplicações em produção.",
        capabilities: ["Sistemas legados", "Performance", "Infraestrutura e deploy"],
      },
      {
        code: "CON",
        title: "Consultoria técnica",
        description:
          "Apoio na análise de requisitos, arquitetura, decisões técnicas e organização do desenvolvimento de novos projetos.",
        capabilities: ["Diagnóstico técnico", "Arquitetura", "Planejamento de produto"],
      },
    ],
  },

  process: {
    eyebrow: "Como trabalhamos",
    title: "Do entendimento do problema à solução em produção.",
    description:
      "O processo é organizado para reduzir incertezas, validar decisões cedo e manter o projeto conectado às necessidades reais da operação.",
    principles: [
      {
        title: "Comunicação direta",
        description:
          "Decisões, limitações e riscos são apresentados de forma clara durante o projeto.",
      },
      {
        title: "Entrega incremental",
        description:
          "Projetos são divididos em etapas úteis, evitando longos períodos sem validação.",
      },
      {
        title: "Visão de operação",
        description:
          "A tecnologia é pensada considerando pessoas, processos, infraestrutura e manutenção.",
      },
      {
        title: "Simplicidade técnica",
        description:
          "A solução deve ser tão simples quanto possível, sem comprometer segurança e evolução.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Diagnóstico e definição",
        description:
          "Começamos entendendo o processo atual, os usuários envolvidos, as regras de negócio e os sistemas que precisam conversar entre si.",
        deliverables: [
          "Levantamento do problema",
          "Definição do escopo inicial",
          "Priorização das entregas",
        ],
      },
      {
        number: "02",
        title: "Desenvolvimento e validação",
        description:
          "A solução é construída em etapas, permitindo validar decisões técnicas e funcionais antes de avançar para partes mais complexas.",
        deliverables: [
          "Implementação incremental",
          "Validação técnica e funcional",
          "Integrações e testes",
        ],
      },
      {
        number: "03",
        title: "Implantação e evolução",
        description:
          "Depois da entrada em produção, acompanhamos o comportamento real da solução e identificamos ajustes e oportunidades de evolução.",
        deliverables: ["Deploy e configuração", "Acompanhamento inicial", "Manutenção e evolução"],
      },
    ],
  },

  about: {
    eyebrow: "Sobre a LRA",
    title: "Desenvolvimento, integração e visão de produto no mesmo projeto.",
    description:
      "A LRA Software desenvolve soluções digitais para empresas que precisam organizar processos, conectar sistemas e transformar necessidades operacionais em software funcional.",
    descriptionSecondary:
      "A atuação combina desenvolvimento front-end e back-end, bancos de dados, APIs, automações, infraestrutura cloud e inteligência artificial. Isso permite acompanhar o projeto desde a definição do problema até sua entrada em produção.",
    technologiesAriaLabel: "Tecnologias utilizadas pela LRA",
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
        title: "Visão de ponta a ponta",
        description:
          "Análise do problema, experiência do usuário, desenvolvimento, integrações, infraestrutura e publicação.",
      },
      {
        title: "Experiência com sistemas reais",
        description:
          "Projetos construídos e evoluídos considerando operação, usuários, regras de negócio e manutenção.",
      },
      {
        title: "Tecnologia com propósito",
        description:
          "As decisões técnicas partem do problema que precisa ser resolvido, não apenas das ferramentas disponíveis.",
      },
    ],
  },

  contact: {
    eyebrow: "Vamos conversar",
    title: "Tem um processo que poderia funcionar melhor com software?",
    description:
      "Conte brevemente o cenário atual, o problema que deseja resolver e quais sistemas ou pessoas participam do processo.",
    topicsAriaLabel: "Tipos de projeto",
    topics: ["Sistemas internos", "Automações", "Integrações", "Aplicações com IA", "Modernização"],
    projectCta: "Falar sobre um projeto",
    emailSubject: "Projeto para a LRA Software",
    emailHint: "O contato será aberto no seu aplicativo de e-mail.",
  },

  footer: {
    homeAriaLabel: "LRA Software — página inicial",
    description:
      "Sistemas, automações, integrações e inteligência artificial aplicados a operações reais.",
    navigationAriaLabel: "Navegação do rodapé",
    navigation: [
      { href: "#inicio", label: "Início" },
      { href: "#servicos", label: "Serviços" },
      { href: "#como-trabalhamos", label: "Como trabalhamos" },
      { href: "#sobre", label: "Sobre" },
      { href: "#contato", label: "Contato" },
    ],
    copyright: "Todos os direitos reservados.",
  },
} satisfies HomeDictionary;
