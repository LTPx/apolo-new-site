export interface ApoloLayout {
  id: string;
  WebsiteName: string;
  Project: string;
  layout: Layout[];
  pages: Page[];
  _status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Layout {
  companyName?: string;
  logoImage?: Image;
  navigation?: Navigation[];
  textCTA?: string;
  id: string;
  blockType: string;
  hiringText?: HiringCta;
  hiringCTA?: HiringCta;
  tagLine?: TagLine[];
  heroSubtitle?: string;
  learnMore?: string;
  heroTitle?: string;
  heroCTA?: {
    heroCTA: string;
    heroCTALink: string;
  };
  heroImage?: {
    url: string;
    width?: number;
    height?: number;
  };
  title?: string;
  features?: Chance[];
  topTitle?: string;
  subtitle?: string;
  chances?: Chance[];
  companies?: Company[];
  teamMembers?: TeamMember[];
  ctas?: Cta[];
  image?: Image;
}

export interface Chance {
  featureTitle: string;
  featureText: FeatureText[];
  featureIcon: FeatureIcon;
  id: string;
}

export interface FeatureIcon {
  id: string;
  filename: string;
  mimeType: MIMEType;
  filesize: number;
  width: number;
  height: number;
  sizes: Sizes;
  createdAt: Date;
  updatedAt: Date;
  url: string;
}

export enum MIMEType {
  ImagePNG = "image/png",
}

export interface Sizes {
  thumbnail: Card;
  card: Card;
  tablet: Card;
}

export interface Card {
  width: number | null;
  height: number | null;
  mimeType: MIMEType | null;
  filesize: number | null;
  filename: null | string;
  url?: string;
}

export interface FeatureText {
  children: Child[];
}

export interface Child {
  text: string;
}

export interface Company {
  companyName: string;
  companyLogo: FeatureIcon;
  id: string;
  companyLink?: string;
}

export interface Cta {
  ctaText: string;
  ctaLink?: string;
  id: string;
}

export interface HiringCta {
  fr: string;
}

export interface Image {
  id: string;
  alt?: string;
  filename: string;
  mimeType: MIMEType;
  filesize: number;
  width: number;
  height: number;
  sizes: Sizes;
  createdAt: Date;
  updatedAt: Date;
  url: string;
}

export interface Navigation {
  name: string;
  href: string;
  id: string;
}

export interface TagLine {
  tagLine: HiringCta;
  id: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image: Image;
  socials: any[];
  id: string;
}

// export interface PageRichText {
//   pageName: string;
//   layout: {
//     text: {
//       type?: "h1" | "h2" | "h3" | "h4" | "ul" | "li";
//       children: {
//         text: string;
//         bold: boolean;
//         newTab?: boolean;
//         type?: string;
//         url?: string;
//       }[];
//     };
//     id: string;
//     blockType: string;
//   }[];
//   id: string;
// }

export interface Page {
  pageName: string;
  layout: Layout[];
  id: string;
}

export interface Layout {
  text: TextElement[];
  id: string;
  blockType: string;
}

export interface TextElement {
  type?: string; // 'h2', 'h4', 'ul', 'li', etc.
  children: Child[];
  newTab?: boolean;
  url?: string;
}

export interface Child {
  text: string;
  bold?: boolean;
  newTab?: boolean;
  type?: string;
  url?: string;
  children: Child[];
}
