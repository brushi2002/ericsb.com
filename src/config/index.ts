import type {
  NavBarLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  FeaturedPageContent,
  HomePageContent,
} from "../types/config";

import { socialLinks, homeSocialLinks } from "./social";

export const identity: Identity = {
  name: "Eric B",
  logo: "/ericsb.com/img/EB_HeadAvatar.jpeg",
  email: "eric@ericsb.com",
};

export const openGraphImage: string = "/img/vinitshahdeo-portfolio.jpg";

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/ericsb.com/",
  },
  {
    title: "About",
    url: "/ericsb.com/about",
  },
  {
    title: "Projects",
    url: "/ericsb.com/projects"
  },
  {
    title: "Blog",
    url: "https://substack.com/@oldguyfi?",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Eric B | Portfolio",
    description:
      "Explore the portfolio of Eric Berryman, a Software Engineering Leader specializing in building scalable, High Performing Teams.",
    image: openGraphImage,
    domain: "ericsb.com",
    url: "https://linkedin.com/in/ericsberryman",
  },
  role: "Engineering Lead",
  company: "ZZAZZ",
  description:
    "Software Engineer specializing in building scalable, secure, and performant backend microservices in Node.js and Go. Honored to be recognized as a GitHub Star twice from India. With a knack for building event-driven architecture, I balance code with badminton and find peace in a sip of tea and poetry.",
  socialLinks: socialLinks,
  homeSocialLinks: homeSocialLinks,
  links: [
    {
      title: "About",
      url: "/ericsb.com/about",
      icon: "mdi:account-circle",
    },
    {
      title: "Blog",
      url: "https://substack.com/@oldguyfi?",
      icon: "mdi:share-circle",
      external: true,
    }
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Eric Berryman",
    description:
      "Eric B.",
    image: openGraphImage,
    domain: "",
    url: "",
  }
};

// Featured (/featured)
export const featuredPageContent: FeaturedPageContent = {
  seo: {
    title: "Featured Articles, Stories & Interviews | Vinit Shahdeo",
    description:
      "Explore a curated collection of articles, insightful stories, and exclusive interviews with Vinit Shahdeo, a Software Engineer and a GitHub Star from Bengaluru, India.",
    image: openGraphImage,
    domain: "vinitshahdeo.com",
    url: "https://vinitshahdeo.com/featured",
  },
  subtitle: "Thoughts, stories, and interviews.",
};

// Now (/now)
export const projectPageContent: ProjectPageContent = {
  seo: {
    title: "Here is a list of my current Projects",
    description:
      "A updated log of what I'm building",
    image: openGraphImage,
    domain: "ericsb.com",
    url: "https://ericsb.com/projects",
  },
  title: "Now (Recently)",
  subtitle: "Where I’m at, what I’m focused on, and what I’m not.",
};

export * from "./music";
export * from "./social";
export * from "./featured";
export * from "./source";
export * from "./analytics";
export * from "./github";
