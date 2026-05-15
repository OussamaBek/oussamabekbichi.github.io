export type ExperienceItem = {
  role: string;
  organization: string;
  location?: string;
  dates: string;
  industry?: string;
  summary: string;
  focus: string[];
  responsibilities: string[];
  technologies?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Developer",
    organization: "DENS GmbH",
    location: "Berlin, Germany",
    dates: "January 2026 - Present",
    industry: "Healthcare Software",
    summary:
      "I currently work as a software developer in the healthcare industry at DENS GmbH, with a strong focus on backend engineering, infrastructure, deployment, scalable healthcare software systems, server architecture, and DevOps-oriented workflows.",
    focus: [
      "backend engineering",
      "infrastructure thinking",
      "production deployments",
      "DevOps workflows",
      "scalable systems",
      "healthcare software",
    ],
    responsibilities: [
      "I design backend architectures and concept software systems.",
      "I build and maintain APIs for healthcare software platforms.",
      "I deploy and manage multiple servers across production-oriented environments.",
      "I configure infrastructure, containerized deployments, and Nginx-based routing.",
      "I work on deployment automation, backend service development, and production maintenance.",
    ],
    technologies: ["Python", "FastAPI", "Docker", "GitLab pipelines", "Nginx"],
  },
  {
    role: "Software Developer",
    organization: "STAR Healthcare Management GmbH",
    location: "Cologne/Bonn Region, Germany",
    dates: "May 2023 - December 2025",
    industry: "Healthcare Software",
    summary:
      "I worked as a software developer on healthcare software systems, where I handled architecture, backend development, API development, debugging, testing, performance analysis, deployment support, and platform maintenance.",
    focus: [
      "healthcare platforms",
      "software architecture",
      "backend development",
      "API development",
      "debugging",
      "performance analysis",
    ],
    responsibilities: [
      "I developed Java and Spring Boot backend services.",
      "I worked with REST APIs, FHIR, OpenAPI, JSON, and healthcare data workflows.",
      "I supported deployment pipelines, testing workflows, and production maintenance.",
      "I analyzed performance and debugging issues with practical engineering tools.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "FHIR",
      "OpenAPI",
      "JSON",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "GitLab",
      "GitLab pipelines",
      "JUnit",
      "Surefire Reporter",
      "JProfiler",
      "TeamViewer",
    ],
  },
  {
    role: "Developer",
    organization: "Open Robotic Metaverse Association",
    location: "Remote / Aachen",
    dates: "April 2024 - January 2025",
    summary:
      "I contribute to a collaborative robotics initiative focused on robotics education, AI-powered simulation, intelligent systems, 3D robotics environments, collaborative robotics learning, robotics experimentation, virtual robotics spaces, innovation, and networking.",
    focus: [
      "robotics education",
      "AI-powered simulation",
      "intelligent systems",
      "3D robotics environments",
      "collaborative learning",
      "virtual robotics spaces",
    ],
    responsibilities: [
      "I help shape a collaborative environment for robotics enthusiasts, beginners, and professionals.",
      "I connect simulation, AI, and interactive virtual robotics systems with practical learning workflows.",
      "I explore robotics experimentation and intelligent software concepts inside shared robotics spaces.",
    ],
    technologies: ["robotics simulation", "AI systems", "3D environments", "collaborative platforms"],
  },
  {
    role: "Software Developer (Working Student)",
    organization: "Waagenbau Dohmen GmbH",
    dates: "January 2023 - March 2023",
    summary:
      "I worked on migration and modernization strategies for complex Windows Forms applications toward modern responsive Windows software systems.",
    focus: [
      "legacy software modernization",
      "desktop architecture",
      "migration strategies",
      "UI modernization",
    ],
    responsibilities: [
      "I analyzed Windows Forms modernization paths and responsive Windows application patterns.",
      "I explored WPF, WinUI, and .NET migration strategies for complex desktop software.",
      "I supported architectural thinking around maintainable Windows application engineering.",
    ],
    technologies: ["C#", "WinForms", "WPF", "WinUI", ".NET", "Visual Studio"],
  },
];
