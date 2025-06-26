import blogPic from "@/assets/blog3.png";
import chatAppPic from "@/assets/chatterly.png";
import adminPic from "@/assets/admin.png";
import bookWorm from "@/assets/bookworm.png";
import quickCart from "@/assets/quickCart2.png";
import { Building2, GraduationCap } from "lucide-react";
import { ExperienceItem } from "./types";

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "technologies", label: "Technologies" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const projects = [
  {
    title: "Story Flow",
    description:
      "Robust blog platform with engaging articles for users to read from. Provides authentication (Next Auth) and a Rich content editor(TipTap). Modern UI/UX design and database integration with Neon PostgresSQL.",
    image: blogPic,
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "TipTap Editor",
      "Redux toolkit",
      "Cloudinary",
    ],
    github: "https://github.com/MartinJindu/Story-Flow-Blog-App",
    live: "https://story-flow-blog-app.vercel.app/",
  },
  {
    title: "Chatterly",
    description:
      "Chatterly is a modern, full-stack chat application built with Next.js and Supabase. It enables users to sign in using Google authentication and chat with other users in real-time.",
    image: chatAppPic,
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Real-time",
      "Context API",
    ],
    github: "https://github.com/MartinJindu/chatterly",
    live: "https://chatterly-chat-app.vercel.app/",
  },
  {
    title: "BookWorm",
    description:
      "Full-stack Mobile app to share your loved book recommendation to other users. Utilizes Authentication with JWT, state management with Zustand and image upload with Cloudinary.",
    image: bookWorm,
    technologies: [
      "React Native",
      "Expo",
      "JavaScript",
      "MongoDB",
      "CSS StyleSheet",
      "Zustand",
      "JWT",
      "Express.js",
      "Cloudinary",
    ],
    github: "https://github.com/MartinJindu/mobile",
  },
  {
    title: "QuickCart",
    description:
      "E-commerce website that simulates E-shopping experience. Utilizes Clerk for authentication and Seller's dashboard for managing and adding products . Modern and classic UI/UX design and database integration with MongoDB.",
    image: quickCart,
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Clerk", "Cloudinary"],
    github: "https://github.com/MartinJindu/QuickCart",
    live: "https://quick-cart-ecommerse.vercel.app/",
  },
  {
    title: "Admin Dashboard",
    description:
      "CRM Admin Dashboard for subtle deals and companies management. Features Authorization, charts, Realtime data updates, complete CRUD operations and kanban task board with drag and drop features.",
    image: adminPic,
    technologies: ["React", "Refine", "Ant Design", "Graphql", "dnd kit"],
    github: "https://github.com/MartinJindu/Admin-dashboard",
    live: "https://crmadmin-dashboard.netlify.app/",
  },
];

export const experiences: ExperienceItem[] = [
  {
    type: "work",
    title: "Frontend Developer",
    location: "Freelance/Remote",
    period: "2024 - present",
    description:
      "Created responsive websites and web applications for various clients. Focused on performance optimization and user experience.",
    achievements: [
      "Delivered 10+ client projects on time and within budget",
      "Improved website performance scores by average of 35%",
      "Implemented modern JavaScript frameworks and tools",
      "Maintained 90% client satisfaction rating",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Prisma ORM",
      "Supabase",
      "Mongo DB",
      "Neon Postgres",
    ],
    icon: Building2,
  },
];

export const education: ExperienceItem[] = [
  {
    type: "education",
    title: "Bachelor of Science in Microbiology",
    company: "Chukwuemeka Odumegwu Ojukwu University, Uli",
    location: "Uli, Anambra State, Nigeria",
    period: "2019 - 2023",
    description: "",
    icon: GraduationCap,
  },
  {
    type: "education",
    title: "Full stack Web Development",
    company: "NIIT",
    location: "Online",
    period: "2024",
    description:
      "4-month Professional course training covering detailed modern web development technologies and industry best practices ",
    achievements: [
      "Completed 600+ hours of hands-on coding",
      "Modulize code into reusable components while ensuring clean code and DRY",
      "Deployed 5+ web application using vercel and netlify with top notch responsiveness and beautiful design",
      "Learned modern industry best practices and technologies ",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Vercel",
      "Netlify",
      "Mongo DB",
      "Postgres SQL",
      "Git",
    ],
    icon: GraduationCap,
  },
  {
    type: "education",
    title: "Web Programming",
    company: "Dimconnect ICT Services ",
    location: "Uli, Anambra State, Nigeria",
    period: "2022 - 2023",
    description:
      "Intensive 6-month program covering modern web development technologies and best practices.",
    achievements: [
      "Learned the language of the web and how internet of things (IOT) interact",
      "Completed 400+ hours of hands-on coding",
      "Built 4 web applications from scratch",
      "Learned industry best practices and methodologies",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Node.js",
    ],
    icon: GraduationCap,
  },
];
