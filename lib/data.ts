import blogPic from "@/assets/blog2.png";
import weatherPic from "@/assets/weather2.png";
// import rpsPic from "@/assets/rps.png";
import adminPic from "@/assets/admin.png";
import bookWorm from "@/assets/bookworm.png";
import quickCart from "@/assets/quickCart.png";
import movie from "@/assets/movie.png";
// import { Building2, GraduationCap } from "lucide-react";

// type Projects = {
//   name: string;
//   description: string;
//   link: string;
//   img: StaticImageData;
//   github: string;
//   techStack?: string[];
// };

// export const projects: Projects[] = [
//   {
//     name: "Story Flow Blog",
//     description:
//       "Robust blog platform with engaging articles for users to read from. Provides authentication (Next Auth) and a Rich content editor(TipTap). Modern UI/UX design and database integration with Neon PostgresSQL",
//     link: "https://story-flow-blog-app.vercel.app/",
//     img: blogPic,
//     github: "https://github.com/MartinJindu/Story-Flow-Blog-App",
//     techStack: [
//       "Next.js",
//       "Tailwind CSS",
//       "Prisma",
//       "Next Auth",
//       "Redux-toolkit",
//       "TipTap",
//     ],
//   },
//   {
//     name: "QuickCart",
//     description:
//       "E-commerce website that simulates E-shopping buying experience. Utilizes Clerk for authentication and Seller's dashboard for managing and adding products . Modern and classic UI/UX design and database integration with MongoDB",
//     link: "https://quick-cart-ecommerse.vercel.app/",
//     img: quickCart,
//     github: "https://github.com/MartinJindu/QuickCart",
//     techStack: ["Next.js", "MongoDB", "Tailwind CSS", "Clerk"],
//   },
//   {
//     name: "Admin Dashboard",
//     description:
//       "CRM Admin Dashboard for subtle deals and companies management. Features Authorization, charts, Realtime data updates, complete CRUD operations and kanban task board with drag and drop features.",
//     link: "https://crmadmin-dashboard.netlify.app/",
//     img: adminPic,
//     github: "https://github.com/MartinJindu/Admin-dashboard",
//     techStack: ["React", "Refine", "Ant design", "Graphql", "dnd kit"],
//   },
//   {
//     name: "Movie App",
//     description:
//       "Find your favorite movie with just a single search. Beautiful UI and trending movie recommendation based on users most searched movies",
//     link: "https://movie-w.netlify.app/",
//     img: movie,
//     github: "https://github.com/MartinJindu/Admin-dashboard",
//     techStack: ["React"],
//   },

//   {
//     name: "Weather Api App",
//     description:
//       "Look out for the weather before heading out. Displays realtime data on weather status for the city provided. Background dynamically changes according to weather status.",
//     link: "https://weather-api-app-reactt.netlify.app/",
//     img: weatherPic,
//     github: "https://github.com/MartinJindu/react-weather-app",
//     techStack: ["React"],
//   },
//   {
//     name: "Rock Paper Scissors",
//     description:
//       "A fun interactive game to play with the computer. Give it a try!.",
//     link: "https://rockpaper-scissors-g.netlify.app/",
//     img: rpsPic,
//     github: "https://github.com/MartinJindu/Rock-Paper-Scissors",
//     techStack: ["React"],
//   },
// ];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "technologies", label: "Technologies" },
  { id: "projects", label: "Projects" },
  // { id: "experience", label: "Experience" },
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
    // live: "https://story-flow-blog-app.vercel.app/",
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
  {
    title: "Movie App",
    description:
      "Find your favorite movie with just a single search. Beautiful UI and trending movie recommendation algorithm based on users most searched movies with Appwrite for DB.",
    image: movie,
    technologies: ["React", "TMDB API", "Appwrite"],
    github: "https://github.com/MartinJindu/movie-app",
    live: "https://movie-w.netlify.app/",
  },
  {
    title: "Weather app",
    description:
      "Look out for the weather before heading out. Displays realtime data on weather status for the city provided. Background dynamically changes according to weather status.",
    image: weatherPic,
    technologies: ["React"],
    github: "https://github.com/MartinJindu/react-weather-app",
    live: "https://weather-api-app-reactt.netlify.app/",
  },
];

// export const experiences = [
//   {
//     type: "work",
//     title: "Senior Full Stack Developer",
//     company: "TechCorp Solutions",
//     location: "San Francisco, CA",
//     period: "2022 - Present",
//     description:
//       "Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
//     achievements: [
//       "Reduced application load time by 40% through optimization",
//       "Led a team of 5 developers on critical projects",
//       "Implemented CI/CD pipeline reducing deployment time by 60%",
//       "Designed and built RESTful APIs handling 1M+ requests daily",
//     ],
//     technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
//     icon: Building2,
//   },
//   {
//     type: "work",
//     title: "Full Stack Developer",
//     company: "StartupXYZ",
//     location: "Austin, TX",
//     period: "2020 - 2022",
//     description:
//       "Developed MVP for fintech startup from concept to production. Built responsive web applications and mobile-first solutions.",
//     achievements: [
//       "Built entire frontend architecture from scratch",
//       "Integrated payment systems and third-party APIs",
//       "Achieved 99.9% uptime for production applications",
//       "Collaborated with design team to implement pixel-perfect UIs",
//     ],
//     technologies: ["Vue.js", "Express", "MongoDB", "Stripe", "Heroku"],
//     icon: Building2,
//   },
//   {
//     type: "work",
//     title: "Frontend Developer",
//     company: "Digital Agency Pro",
//     location: "Remote",
//     period: "2019 - 2020",
//     description:
//       "Created responsive websites and web applications for various clients. Focused on performance optimization and user experience.",
//     achievements: [
//       "Delivered 20+ client projects on time and within budget",
//       "Improved website performance scores by average of 35%",
//       "Implemented modern JavaScript frameworks and tools",
//       "Maintained 98% client satisfaction rating",
//     ],
//     technologies: ["React", "JavaScript", "SASS", "WordPress", "Figma"],
//     icon: Building2,
//   },
// ];

// export const education = [
//   {
//     type: "education",
//     title: "Bachelor of Science in Computer Science",
//     company: "University of California, Berkeley",
//     location: "Berkeley, CA",
//     period: "2015 - 2019",
//     description:
//       "Graduated Magna Cum Laude with focus on software engineering and algorithms. Active in computer science clubs and hackathons.",
//     achievements: [
//       "GPA: 3.8/4.0, Dean's List for 6 semesters",
//       "Winner of 3 hackathons including UC Berkeley's CalHacks",
//       "Teaching Assistant for Data Structures and Algorithms",
//       "President of Computer Science Student Association",
//     ],
//     technologies: ["Java", "Python", "C++", "Data Structures", "Algorithms"],
//     icon: GraduationCap,
//   },
//   {
//     type: "education",
//     title: "AWS Certified Solutions Architect",
//     company: "Amazon Web Services",
//     location: "Online",
//     period: "2021",
//     description:
//       "Professional certification demonstrating expertise in designing distributed systems on AWS platform.",
//     achievements: [
//       "Passed with score of 890/1000",
//       "Demonstrated knowledge of AWS services and architecture",
//       "Validated skills in security and compliance",
//       "Continuing education in cloud technologies",
//     ],
//     technologies: ["AWS", "Cloud Architecture", "Security", "Scalability"],
//     icon: GraduationCap,
//   },
//   {
//     type: "education",
//     title: "Full Stack Web Development Bootcamp",
//     company: "General Assembly",
//     location: "San Francisco, CA",
//     period: "2018",
//     description:
//       "Intensive 12-week program covering modern web development technologies and best practices.",
//     achievements: [
//       "Completed 480+ hours of hands-on coding",
//       "Built 4 full-stack applications from scratch",
//       "Learned industry best practices and methodologies",
//       "Graduated in top 10% of cohort",
//     ],
//     technologies: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"],
//     icon: GraduationCap,
//   },
// ];
