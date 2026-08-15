export interface ExperienceEntry {
  name: string;
  company: string;
  desc: string;
}

export interface Experience {
  year: string;
  works: ExperienceEntry[];
}

export const experiencesData: Experience[] = [
  {
    year: "2024",
    works: [
      {
        name: "Research Assistant",
        company: "State University of Ponta Grossa (UEPG)",
        desc: "Conducted research on agricultural traceability using blockchain technologies to improve supply chain transparency.",
      },
    ],
  },

  {
    year: "2024",
    works: [
      {
        name: "Freelance UI/UX Designer",
        company: "SolarMan Cooperative",
        desc: "Designed modern user interfaces and user experiences for a solar energy quotation and management platform using Figma.",
      },
    ],
  },

  {
    year: "2025",
    works: [
      {
        name: "Freelance Full-Stack Developer",
        company: "Euro Sports & Bar",
        desc: "Built a complete sports court booking platform using React for the frontend and Laravel for the backend.",
      },
    ],
  },

  {
    year: "2026",
    works: [
      {
        name: "Freelance Full-Stack Developer",
        company: "Diocese of União da Vitória",
        desc: "Developed an event registration platform with online registration, Pix payments, and an admin dashboard using React and Laravel.",
      },
    ],
  },

  {
    year: "2026",
    works: [
      {
        name: "QA Automation Intern",
        company: "Baston Aerosóis",
        desc: "Working in Quality Assurance, contributing to software testing and process automation, data analysis and validation using SQL, and bug identification to improve system quality and reliability.",
      },
    ],
  },
];
