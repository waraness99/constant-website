export const linkedInProfileUrl = "https://www.linkedin.com/in/constant-druon-455561195/";
export const gitHubProfileUrl = "https://github.com/waraness99";
export const twitterProfileUrl = "https://twitter.com/constant_druon";
// @ts-ignore-next-line
export const openCrispBox = () => $crisp.push(["do", "chat:open"]);

interface Link {
  title: string;
  href: string;
}

export const headerLinks: Link[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
];

export const footerInternalLinks: Link[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
];

export const footerExternalLinks: Link[] = [
  {
    title: "LinkedIn",
    href: linkedInProfileUrl,
  },
  {
    title: "GitHub",
    href: gitHubProfileUrl,
  },
  {
    title: "Twitter",
    href: twitterProfileUrl,
  },
];
