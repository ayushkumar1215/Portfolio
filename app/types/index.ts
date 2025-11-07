export type Language = 'EN' | 'ES';

export type Section = 'home' | 'works' | 'about-me' | 'contacts';

export interface NavigationItem {
  id: Section;
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

export interface NavbarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  language: Language;
  onLanguageChange: (language: Language) => void;
  logoText?: string;
}

export interface HeroProps {
  name: string;
  description: string;
  contactButtonText: string;
  statusText: string;
  socialLinks: SocialLink[];
  imageSrc?: string;
  imageAlt?: string;
}

