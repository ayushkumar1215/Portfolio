import { SocialIcon } from "../components/SocialIcons";
import type { SocialLink } from "../types";

export const portfolioConfig = {
  name: "Ayush Kumar",
  logoText: "Ayush Kumar",
  title: "is a web designer and front-end developer",
  description: "He crafts responsive websites where technologies meet creativity",
  contactButtonText: "Contact me!!",
  statusText: "Currently working on Portfolio",
  quote: "With great power comes great electricity bill",
  quoteAuthor: "Dr. Who",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/ayushkumar1215/",
      icon: <SocialIcon iconType="github" />,
      ariaLabel: "GitHub",
    },
    // {
    //   name: "Website",
    //   url: "https://yourwebsite.com",
    //   icon: <SocialIcon iconType="website" />,
    //   ariaLabel: "Website",
    // },
    // {
    //   name: "Figma",
    //   url: "https://figma.com",
    //   icon: <SocialIcon iconType="figma" />,
    //   ariaLabel: "Figma",
    // },
  ] as SocialLink[],
};

