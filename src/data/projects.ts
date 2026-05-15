export type ProjectItem = {
  title: string;
  type?: string;
  summary: string;
  features?: string[];
  technologies: string[];
  focus: string[];
  architecture?: string[];
  featured?: boolean;
};

export const projects: ProjectItem[] = [
  {
    title: "PDF Support Chatbot",
    type: "Offline-first internal AI knowledge/support platform",
    featured: true,
    summary:
      "I built an offline-first internal support chatbot platform that lets users upload PDFs, index documentation, and ask grounded AI questions using Retrieval-Augmented Generation. I retrieve relevant PDF chunks and indexed answers, then generate contextual responses with citations using a local language model.",
    features: [
      "JWT authentication",
      "admin dashboard",
      "PDF library",
      "tagging and metadata",
      "inline PDF viewer",
      "RAG-based AI chat",
      "reusable saved answers",
      "chat history",
      "moderation tools",
      "audit logging",
      "messaging system",
      "WebSocket updates",
      "async indexing workers",
      "local AI inference",
      "Dockerized infrastructure",
    ],
    technologies: [
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "PostgreSQL",
      "React",
      "Vite",
      "TypeScript",
      "llama.cpp",
      "local Qwen GGUF models",
      "sentence-transformers",
      "Chroma vector store",
      "Docker Compose",
      "Nginx",
      "WebSockets",
    ],
    focus: [
      "RAG systems",
      "offline AI",
      "backend architecture",
      "internal tooling",
      "infrastructure",
      "knowledge platforms",
    ],
    architecture: [
      "modular backend architecture",
      "local/offline AI system",
      "vector retrieval pipeline",
      "multi-service Docker infrastructure",
      "worker-based indexing architecture",
      "scalable backend services",
    ],
  },
  {
    title: "NAO Robot Face Following",
    summary:
      "I built a robotics project where a NAO humanoid robot detects and follows human faces in real time using computer vision and robot motion control.",
    technologies: ["Python", "NAOqi", "Choregraphe", "robotics APIs"],
    focus: [
      "robotics",
      "computer vision",
      "intelligent interaction",
      "real-time systems",
      "human-robot interaction",
    ],
  },
  {
    title: "Face Blurring AI",
    summary:
      "I developed an AI-powered face detection and anonymization system that automatically detects and blurs faces in images.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Docker"],
    focus: ["AI", "computer vision", "privacy tooling", "image processing"],
  },
  {
    title: "Leaf Prediction",
    summary:
      "I built a machine learning application for leaf classification using both classical machine learning and deep learning approaches.",
    technologies: ["Python", "TensorFlow", "scikit-learn", "VGG16", "Tkinter"],
    focus: ["machine learning", "image classification", "model experimentation", "desktop tooling"],
  },
];
