export type SkillGroup = {
  name: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Backend",
    skills: ["Python", "FastAPI", "Java", "Spring Boot", "REST APIs", "OpenAPI", "FHIR", "SQLAlchemy"],
  },
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "JavaScript"],
  },
  {
    name: "AI / ML",
    skills: [
      "TensorFlow",
      "OpenCV",
      "RAG",
      "local LLMs",
      "sentence-transformers",
      "llama.cpp",
      "Chroma vector stores",
    ],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQL"],
  },
  {
    name: "DevOps & Infrastructure",
    skills: [
      "Docker",
      "Docker Compose",
      "GitLab",
      "GitLab pipelines",
      "Nginx",
      "deployment infrastructure",
      "server management",
    ],
  },
  {
    name: "Robotics",
    skills: ["NAOqi", "robotics simulation", "robot control", "robotics experimentation"],
  },
  {
    name: "Desktop Development",
    skills: ["C#", ".NET", "WPF", "WinForms", "WinUI"],
  },
  {
    name: "Languages",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "C++", "C#", "SQL", "R"],
  },
];
