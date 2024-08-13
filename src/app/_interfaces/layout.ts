export interface ApoloLayout {
  id:          string;
  WebsiteName: string;
  Project:     string;
  layout:      Layout[];
  pages:       any[];
  _status:     string;
  createdAt:   Date;
  updatedAt:   Date;
}

export interface Layout {
  companyName?:  string;
  logoImage?:    Image;
  navigation?:   Navigation[];
  textCTA?:      string;
  id:            string;
  blockType:     string;
  hiringText?:   HiringCta;
  hiringCTA?:    HiringCta;
  tagLine?:      TagLine[];
  heroSubtitle?: string;
  learnMore?:    string;
  heroCTA?:      string;
  heroImage?:    string;
  title?:        string;
  features?:     Chance[];
  topTitle?:     string;
  subtitle?:     string;
  chances?:      Chance[];
  companies?:    Company[];
  teamMembers?:  TeamMember[];
  ctas?:         Cta[];
}

export interface Chance {
  featureTitle: string;
  featureText:  FeatureText[];
  featureIcon:  FeatureIcon;
  id:           string;
}

export interface FeatureIcon {
  id:        string;
  filename:  string;
  mimeType:  MIMEType;
  filesize:  number;
  width:     number;
  height:    number;
  sizes:     Sizes;
  createdAt: Date;
  updatedAt: Date;
  url:       string;
}

export enum MIMEType {
  ImagePNG = "image/png",
}

export interface Sizes {
  thumbnail: Card;
  card:      Card;
  tablet:    Card;
}

export interface Card {
  width:    number | null;
  height:   number | null;
  mimeType: MIMEType | null;
  filesize: number | null;
  filename: null | string;
  url?:     string;
}

export interface FeatureText {
  children: Child[];
}

export interface Child {
  text: string;
}

export interface Company {
  companyName:  string;
  companyLogo:  FeatureIcon;
  id:           string;
  companyLink?: string;
}

export interface Cta {
  ctaText:  string;
  ctaLink?: string;
  id:       string;
}

export interface HiringCta {
  fr: string;
}

export interface Image {
  id:        string;
  alt?:      string;
  filename:  string;
  mimeType:  MIMEType;
  filesize:  number;
  width:     number;
  height:    number;
  sizes:     Sizes;
  createdAt: Date;
  updatedAt: Date;
  url:       string;
}

export interface Navigation {
  name: string;
  href: string;
  id:   string;
}

export interface TagLine {
  tagLine: HiringCta;
  id:      string;
}

export interface TeamMember {
  name:    string;
  role:    string;
  bio?:    string;
  image:   Image;
  socials: any[];
  id:      string;
}
