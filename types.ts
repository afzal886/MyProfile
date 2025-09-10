export enum Tab {
  Profile = "Personal Profile",
  Experience = "Experience",
  Activities = "Professional Activities",
  Skills = "IT Skills",
  Hobbies = "Hobbies",
  Contact = "Contact",
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}