import { Image } from "utils/common-types";

export interface ProjectOverview {
  slug: string;
  date: string;
  rating: number;
  title: string;
  excerpt: string;
  technicalStack: string[];
  coverImage: Image;
}

export interface ProjectDetails {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: {
    html: string;
  };
  technicalStack: string[];
  projectType: string;
  gallery: Image[];
  youtubeVideoId?: string;
  repositoryUrl?: string;
  websiteUrl?: string;
}
