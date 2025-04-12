import blogPic from "@/assets/blog2.png";
import weatherPic from "@/assets/weather2.png";
import rpsPic from "@/assets/rps.png";
import adminPic from "@/assets/admin.png";
import quickCart from "@/assets/quickCart.png";
import movie from "@/assets/movie.png";
import { StaticImageData } from "next/image";

type Projects = {
  name: string;
  description: string;
  link: string;
  img: StaticImageData;
  github: string;
  techStack?: string[];
};

export const projects: Projects[] = [
  {
    name: "Story Flow Blog",
    description:
      "Robust blog platform with engaging articles for users to read from. Provides authentication (Next Auth) and a Rich content editor(TipTap). Modern UI/UX design and database integration with Neon PostgresSQL",
    link: "https://story-flow-blog-app.vercel.app/",
    img: blogPic,
    github: "https://github.com/MartinJindu/Story-Flow-Blog-App",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "Next Auth",
      "Redux-toolkit",
      "TipTap",
    ],
  },
  {
    name: "QuickCart",
    description:
      "E-commerce website that simulates E-shopping buying experience. Utilizes Clerk for authentication and Seller's dashboard for managing and adding products . Modern and classic UI/UX design and database integration with MongoDB",
    link: "https://quick-cart-ecommerse.vercel.app/",
    img: quickCart,
    github: "https://github.com/MartinJindu/QuickCart",
    techStack: ["Next.js", "MongoDB", "Tailwind CSS", "Clerk"],
  },
  {
    name: "Admin Dashboard",
    description:
      "CRM Admin Dashboard for subtle deals and companies management. Features Authorization, charts, Realtime data updates, complete CRUD operations and kanban task board with drag and drop features.",
    link: "https://crmadmin-dashboard.netlify.app/",
    img: adminPic,
    github: "https://github.com/MartinJindu/Admin-dashboard",
    techStack: ["React", "Refine", "Ant design", "Graphql", "dnd kit"],
  },
  {
    name: "Movie App",
    description:
      "Find your favorite movie with just a single search. Beautiful UI and trending movie recommendation based on users most searched movies",
    link: "https://movie-w.netlify.app/",
    img: movie,
    github: "https://github.com/MartinJindu/Admin-dashboard",
    techStack: ["React"],
  },

  {
    name: "Weather Api App",
    description:
      "Look out for the weather before heading out. Displays realtime data on weather status for the city provided. Background dynamically changes according to weather status.",
    link: "https://weather-api-app-reactt.netlify.app/",
    img: weatherPic,
    github: "https://github.com/MartinJindu/react-weather-app",
    techStack: ["React"],
  },
  {
    name: "Rock Paper Scissors",
    description:
      "A fun interactive game to play with the computer. Give it a try!.",
    link: "https://rockpaper-scissors-g.netlify.app/",
    img: rpsPic,
    github: "https://github.com/MartinJindu/Rock-Paper-Scissors",
    techStack: ["React"],
  },
];
