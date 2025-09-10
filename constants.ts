import { ExperienceItem } from './types';

// Using a placeholder image as requested
export const PROFILE_IMAGE_URL = "https://i.imgur.com/uG9tA76.jpeg";

export const PERSONAL_PROFILE_CONTENT = {
  title: "Personal Profile",
  body: "A highly motivated and results-oriented Software Engineer with over 8 years of experience in designing, developing, and deploying scalable web applications. Passionate about clean code, innovative solutions, and collaborative teamwork. Seeking to leverage expertise in modern frontend and backend technologies to contribute to a challenging and dynamic development environment."
};

export const EXPERIENCE_CONTENT: ExperienceItem[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Innovatech Solutions",
    period: "2020 - Present",
    description: [
      "Led the development of a new client-facing dashboard using React, TypeScript, and Tailwind CSS, improving user engagement by 40%.",
      "Architected and implemented a state management solution with Redux Toolkit, resulting in a 30% reduction in boilerplate code and improved performance.",
      "Mentored junior developers, conducted code reviews, and established best practices for frontend development."
    ]
  },
  {
    role: "Software Engineer",
    company: "Data Systems Inc.",
    period: "2017 - 2020",
    description: [
      "Developed and maintained features for a large-scale data visualization platform using Angular and D3.js.",
      "Collaborated with UX/UI designers to translate wireframes and mockups into responsive and interactive web components.",
      "Optimized application performance, reducing initial load time by 50% through code splitting and lazy loading."
    ]
  },
  {
    role: "Junior Developer",
    company: "WebCrafters Co.",
    period: "2015 - 2017",
    description: [
        "Assisted in the development of e-commerce websites using JavaScript, HTML, and CSS.",
        "Contributed to bug fixing and feature enhancements on existing projects.",
        "Gained foundational knowledge of version control with Git and agile development methodologies."
    ]
  }
];

export const PROFESSIONAL_ACTIVITIES_CONTENT = {
    title: "Professional Activities",
    items: [
        "Speaker at React Conference 2022 - 'Advanced State Management Patterns'",
        "Open Source Contributor to 'Chartify', a popular data visualization library.",
        "Volunteer Mentor at 'Code for Tomorrow', teaching web development to underprivileged youth.",
        "Active member of the local JavaScript meetup group."
    ]
};

export const IT_SKILLS_CONTENT = {
    title: "IT Skills",
    skills: {
        "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Angular", "Vue.js"],
        "Backend": ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"],
        "Databases": ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
        "DevOps & Cloud": ["Docker", "Kubernetes", "AWS", "Google Cloud", "CI/CD", "GitHub Actions"],
        "Testing": ["Jest", "React Testing Library", "Cypress", "Playwright"]
    }
};


export const HOBBIES_CONTENT = {
    title: "Hobbies",
    items: [
        "Landscape Photography: Capturing the beauty of nature through the lens.",
        "Playing Guitar: Exploring genres from blues to classic rock.",
        "Hiking & Backpacking: Enjoying long treks in national parks.",
        "Cooking: Experimenting with international cuisines."
    ]
};

export const CONTACT_CONTENT = {
    title: "Get In Touch",
    email: "john.doe.dev@email.com",
    linkedin: "https://www.linkedin.com/in/johndoe-dev/",
    github: "https://github.com/johndoe-dev",
    message: "I'm currently open to new opportunities and collaborations. Feel free to reach out via email or connect with me on social media. I look forward to hearing from you!"
};