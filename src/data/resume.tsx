import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Terraform } from "@/components/ui/svgs/terraform";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { AWS } from "@/components/ui/svgs/AWS";

export const DATA = {
  name: "Ammar Faruqui",
  initials: "MAF",
  url: "https://ammar-15.github.io/",
  location: "St. John's, NL",
  locationLink: "https://www.google.com/maps/place/stjohns",
  description: "Builder Vision. Engineer Brain.",
  summary: "some thing cool",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Terraform", icon: Terraform },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "AWS", icon: AWS },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    {
      href: "mailto:ammukuul15@gmail.com",
      icon: Icons.email,
      label: "ammukuul15@gmail.com",
    },
  ],
  contact: {
    email: "ammukuul15@gmail.com",
    tel: "+7092193314",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ammar-15",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ammarfaruqui/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ammar_tsx/highlights",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram (coming soon)",
        url: "https://www.instagram.com/ammar_tsx/",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:ammukuul15@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Fiscal.ai",
      href: "https://fiscal.ai",
      badges: [],
      location: "Toronto, ON (Remote)",
      title: "Software Engineer – Back-End (Data)",
      logoUrl: "/fiscal.png",
      start: "Aug 2025",
      end: "Nov 2025",
      description:
        "Built Python and AWS-based data pipelines to extract EPS, weighted average shares outstanding, and share counts from SEC filings for 500+ companies. Optimized LLM-driven PDF extraction using chunking and model fallback strategies, improving processing speed by ~30%. Reduced pipeline errors by ~40% by implementing Pydantic-based validation frameworks and business rules. Debugged large-scale async workflows with rate limiting and integrated Sentry for error tracking.",
    },
    {
      company: "Paradigm Engineering (MUN)",
      href: "https://www.instagram.com/paradigm_mun/",
      badges: [],
      location: "St. John’s, NL",
      title: "Business Lead",
      logoUrl: "/paradigm.png",
      start: "Sep 2023",
      end: "Jun 2025",
      description:
        "Helped raise $65K+ in funding by producing pitch decks, managing outreach, and supporting grant applications. Increased social engagement by ~60% by analyzing audience behavior and launching targeted content strategies.",
    },
    {
      company: "Best Western Plus",
      href: "https://www.bestwestern.com",
      badges: [],
      location: "St. John’s, NL",
      title: "Guest Service Representative",
      logoUrl: "/bestwestern.png",
      start: "Oct 2021",
      end: "Oct 2025",
      description:
        "Primary point of contact for 100+ guests daily. Regularly led front desk operations as Acting Manager during peak seasons, maintaining a 99% guest satisfaction rate while handling scheduling, issue resolution, and staff coordination.",
    },
  ],
  projects: [
    {
      title: "Goalzy (FIFA Stats Tracker)",
      href: "https://github.com/ammar-15/fifa-tracker-frontend",
      dates: "May 2025 - in development",
      active: true,
      description:
        "Developing a stat-tracking web app that converts FIFA match screenshots into structured data using OCR for post-game analysis. Enables players to compare long-term performance trends against friends and identify strengths and weaknesses.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Tailwind CSS",
        "SQLite",
        "Tesseract.js",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ammar-15/fifa-tracker-frontend",
        },
      ],
      image: "",
      video: "/videos/goalzy.mp4",
    },
    {
      title: "Snipr",
      href: "https://tweetsniper.vercel.app/",
      dates: "Jun 2025",
      active: false,
      description:
        "Built an AI-driven pipeline that fetches hundreds of finance-related tweets, classifies sentiment using GPT models, and verifies stock predictions against real market data via yFinance. Reduced manual research and validation effort by ~90%.",
      technologies: [
        "TypeScript",
        "Python",
        "React",
        "Flask",
        "Firebase",
        "OpenAI",
        "yFinance",
        "Tweepy",
        "snscrape",
      ],
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/PranayBolem/InstaReelsLauncher",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Housekeepr",
      href: "https://housekeepr.vercel.app/",
      dates: "Oct 2024 - Apr 2025",
      active: false,
      description:
        "Built a web app to digitize hotel housekeeping workflows, reducing manual coordination by ~80% through real-time updates and centralized task tracking. Designed modular, responsive UI components for cross-device usage.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/PranayBolem/InstaReelsLauncher",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "GitHubElo",
      href: "https://githubelo.web.app/",
      dates: "Nov 2024",
      active: false,
      description:
        "Created a competitive GitHub Elo leaderboard that analyzes developer activity such as commits, repositories, and followers. Attracted 350+ users organically, primarily through Twitter.",
      technologies: ["React", "Node.js", "Firebase", "Express", "Tailwind CSS"],
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/PranayBolem/InstaReelsLauncher",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Roomer",
      href: "https://roomer1-demo.web.app/",
      dates: "Jun 2024 - Sep 2024",
      active: false,
      description:
        "Built a room-tracking tool that replaced paper logs with real-time digital check-outs, improving operational efficiency by ~70% for hospitality workflows.",
      technologies: ["HTML", "JavaScript", "CSS", "Bootstrap", "Firebase"],
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/PranayBolem/InstaReelsLauncher",
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "AdhanCast",
      dates: "Mar 2025",
      location: "St. John's, NL",
      description:
        "Built a lightweight application that plays the Adhan automatically at prayer times based on user location. Focused on reliability, low resource usage, and simple configuration. Designed for personal and small-community use, with customizable notification and playback behavior.", // TODO: tweak if you want more technical depth
      image: "/adhancast.png",
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ammar-15/AdhanCast",
        },
        {
          type: "LinkedIn",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7301637061491531777/",
        },
      ],
    },
    {
      title: "Rot Launcher Hack Night",
      dates: "Mar 2025",
      location: "St. John's, NL",
      description: (
        <>
          Built a dopamine-inducing tool that launches Instagram Reels directly
          into the home screen to increase short-form content consumption.
          Focused on speed, minimal UI, and quick access. Collaborated with{" "}
          <a
            href="https://www.linkedin.com/in/pranay-bolem/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-primary"
          >
            Pranay Bolem
          </a>{" "}
          on design and implementation.
        </>
      ),
      image: "/rotlauncher.png",
      links: [
        {
          type: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/PranayBolem/InstaReelsLauncher",
        },
        {
          type: "LinkedIn",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7312811474488287232/",
        },
        {
          type: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/shorts/TT_48ZU72u8",
        },
      ],
    },

    // {
    //   title: "zubo.xyz",
    //   dates: "Feb 2026",
    //   location: "St. John's, NL",
    //   description:
    //     "fun stuff coming soon",
    //   image:
    //     "",
    //   links: [
    //     {
    //       title: "",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "",
    //     },
    //   ],
    // },
  ],
  education: [
    {
      school: "Get Building",
      href: "https://getcoding.ca",
      degree: "Full-Stack Software Development (Mentor-led Program)",
      logoUrl: "/getbuilding.png",
      start: "May 2024",
      end: "August 2025",
    },
    {
      school: "techNL",
      href: "https://technl.ca/ai-skills-launchpad/",
      degree: "AI in Data Engineering",
      logoUrl: "/technl.png",
      start: "Feb 2026",
      end: "Mar 2026",
    },
    {
      school: "Memorial University of Newfoundland",
      href: "https://www.mun.ca",
      degree: "Bachelor of Science, Computer Science (DNF 🥀)",
      logoUrl: "/mun.png",
      start: "Sep 2019",
      end: "May 2024",
    },
  ],
} as const;
