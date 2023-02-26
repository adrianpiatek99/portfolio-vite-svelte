import airtableIcon from "assets/icons/airtable.svg";
import awsIcon from "assets/icons/aws.svg";
import buildIcon from "assets/icons/build.svg";
import jestIcon from "assets/icons/jest.svg";
import nextjsIcon from "assets/icons/next-js.svg";
import prismaIcon from "assets/icons/prisma.svg";
import reactIcon from "assets/icons/react.svg";
import reactQueryIcon from "assets/icons/react-query.svg";
import reduxIcon from "assets/icons/redux.svg";
import storybookIcon from "assets/icons/storybook.svg";
import styledComponentsIcon from "assets/icons/styled-components.svg";
import tailwindcssIcon from "assets/icons/tailwind-css.svg";
import trpcIcon from "assets/icons/trpc.svg";
import typescriptIcon from "assets/icons/typescript.svg";
import viteIcon from "assets/icons/vite.svg";
import CurrentPortfolioUrl from "assets/projects/current-portfolio.png?url";
import MemoryGameUrl from "assets/projects/memory-game.png?url";
import OldPortfolioUrl from "assets/projects/old-portfolio.png?url";
import TheLabzUrl from "assets/projects/the-labz.jpg?url";
import TwitterCloneUrl from "assets/projects/twitter-clone.png?url";

const techTypes = [
  "Next.js",
  "TypeScript",
  "Vite",
  "Jest + RTL",
  "React",
  "Redux",
  "Prisma",
  "Styled Components",
  "TanStack Query",
  "Storybook",
  "Airtable",
  "AWS",
  "@craftjs/core",
  "Tailwind CSS",
  "tRPC",
  "Svelte"
] as const;

type TechTuple = typeof techTypes;

export type ProjectTech = { tech: TechTuple[number]; iconUrl: string };

export type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  githubUrl?: string;
  techs: ProjectTech[];
  isPinned?: boolean;
};

const nextjsTech: ProjectTech = { tech: "Next.js", iconUrl: nextjsIcon };
const typeScriptTech: ProjectTech = { tech: "TypeScript", iconUrl: typescriptIcon };
const prismaTech: ProjectTech = { tech: "Prisma", iconUrl: prismaIcon };
const styledComponentsTech: ProjectTech = {
  tech: "Styled Components",
  iconUrl: styledComponentsIcon
};
const viteReactTech: ProjectTech = { tech: "Vite", iconUrl: viteIcon };
const reactTech: ProjectTech = { tech: "React", iconUrl: reactIcon };
const reduxTech: ProjectTech = { tech: "Redux", iconUrl: reduxIcon };
const testTech: ProjectTech = { tech: "Jest + RTL", iconUrl: jestIcon };
const tanStackQueryTech: ProjectTech = { tech: "TanStack Query", iconUrl: reactQueryIcon };
const storybookTech: ProjectTech = { tech: "Storybook", iconUrl: storybookIcon };
const airtableTech: ProjectTech = { tech: "Airtable", iconUrl: airtableIcon };
const awsTech: ProjectTech = { tech: "AWS", iconUrl: awsIcon };
const craftjsTech: ProjectTech = { tech: "@craftjs/core", iconUrl: buildIcon };
const tailwindCssTech: ProjectTech = { tech: "Tailwind CSS", iconUrl: tailwindcssIcon };
const trpcTech: ProjectTech = { tech: "tRPC", iconUrl: trpcIcon };
// const svelteTech: ProjectTech = { tech: "Svelte", iconUrl: svelteIcon };

export const projects: Project[] = [
  {
    title: "Twitter Clone",
    description:
      "As in the title, it is the Twitter clone 😄\n Responsive website with basic features.",
    image: TwitterCloneUrl,
    url: "https://twitter-clone-nextjs-coral.vercel.app",
    githubUrl: "https://github.com/adrianpiatek99/twitter-clone-nextjs",
    techs: [
      nextjsTech,
      typeScriptTech,
      trpcTech,
      prismaTech,
      testTech,
      styledComponentsTech,
      tanStackQueryTech
    ],
    isPinned: true
  },
  {
    title: "The Labz",
    description:
      "The project that I have been working in my previous job.\n The Labz platform gives creatives a robust multi-media toolbox from which they can mix and match audio, video, text, links, images, video chat, and more to curate a unique and dynamic experiences.",
    image: TheLabzUrl,
    url: "https://www.thelabz.com",
    techs: [
      nextjsTech,
      typeScriptTech,
      awsTech,
      airtableTech,
      prismaTech,
      craftjsTech,
      reduxTech,
      testTech,
      storybookTech,
      styledComponentsTech
    ],
    isPinned: true
  },
  {
    title: "React portfolio",
    description: "Portfolio website built with react and vite.",
    image: CurrentPortfolioUrl,
    url: "/",
    githubUrl: "https://github.com/adrianpiatek99/portfolio-vite-react",
    techs: [reactTech, viteReactTech, typeScriptTech, tailwindCssTech]
  },
  {
    title: "Old portfolio",
    description: "Old portfolio website.",
    image: OldPortfolioUrl,
    url: "https://portfolio-adrian-piatek.vercel.app",
    githubUrl: "https://github.com/adrianpiatek99/portfolio-nextjs",
    techs: [reactTech, typeScriptTech, styledComponentsTech]
  },
  {
    title: "Memory game",
    description: "Pokemon memory game.",
    image: MemoryGameUrl,
    url: "https://memory-game-react-liart.vercel.app",
    githubUrl: "https://github.com/adrianpiatek99/memory-game-react",
    techs: [reactTech, reduxTech, styledComponentsTech]
  }
];
