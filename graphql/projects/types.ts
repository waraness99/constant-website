export interface ProjectOverview {
  slug: string;
  title: string;
  excerpt: string;
  technicalStack: string[];
  coverImage: {
    url: string;
  };
}

export interface ProjectDetails {
  title: string;
  date: string;
  excerpt: string;
  content: {
    markdown: string;
  };
  technicalStack: string[];
  projectType: string;
  gallery: { id: string; url: string }[];
  youtubeUrl?: string;
  repositoryUrl?: string;
  websiteUrl?: string;
}
