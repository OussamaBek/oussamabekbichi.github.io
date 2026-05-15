export type EducationItem = {
  degree: string;
  university: string;
  dates?: string;
  grade?: string;
  description: string;
  topics?: string[];
};

export const education: EducationItem[] = [
  {
    degree: "Master of Science - Data Science",
    university: "FernUniversität in Hagen",
    dates: "April 2026 - Present",
    description:
      "I am currently pursuing a Master's degree in Data Science, expanding my knowledge in AI, machine learning, intelligent systems, and advanced data-driven software engineering.",
    topics: ["AI", "machine learning", "intelligent systems", "data-driven software engineering"],
  },
  {
    degree: "Bachelor of Applied Science - Applied Mathematics and Computer Science",
    university: "FH Aachen University of Applied Sciences",
    dates: "September 2018 - May 2023",
    grade: "Final grade: 1.5",
    description:
      "My studies combined mathematics, computer science, software engineering, machine learning, data analytics, algorithms, networking, databases, and practical software development. I graduated with a final grade of 1.5.",
    topics: [
      "Machine Learning",
      "Data Analytics",
      "Algorithms",
      "Java Programming",
      "Software Engineering",
      "Databases",
      "Networks",
      "Numerical Mathematics",
      "Stochastics",
      "IT Systems",
      "C++",
      "Customer Software Development",
    ],
  },
  {
    degree: "Bachelor of Science - Computer Science",
    university: "Université Moulay Ismail, Meknes",
    description:
      "My studies included software engineering, databases, web development, robotics, game development with C++, and deep learning.",
    topics: [
      "software engineering",
      "databases",
      "web development",
      "robotics",
      "game development with C++",
      "deep learning",
    ],
  },
];
